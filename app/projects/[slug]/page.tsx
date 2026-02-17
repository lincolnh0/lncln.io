import {marked} from "marked";
import matter from 'gray-matter';
import path from "path";
import fs from "fs";
import postStyles from "../../../styles/post.module.css";
import {Code, Github} from "lucide-react";
import HomeButton from "@/components/home_button";
import DownloadButton from "@/components/download_button";
import { Metadata } from 'next';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const data: any = await import(`../../../public/markdowns/projects/${slug}.md`);
    const content = matter(data.default);
    
    return {
        title: content.data.title,
        description: content.data.description,
        openGraph: {
            images: content.data.bannerImg ? [content.data.bannerImg] : [],
        },
    }
}

export default async function Project({ params }: Props) {
    const { slug } = params;
    
    const data: any = await import(`../../../public/markdowns/projects/${slug}.md`);
    const content = matter(data.default);
    const frontmatter = content.data;
    const markdownBody = marked(content.content);

    return (
        <div className={"min-h-screen py-12"}>
            <div className={"px-12 py-2 flex justify-start flex-col"}>
                <div className={"prose mx-auto text-primary"}>
                    <HomeButton/>

                    <h1>
                        {frontmatter.title}
                    </h1>
                    <p className={"opacity-60 italic font-light"}>{frontmatter.description}</p>

                    <div className={"mt-8 flex flex-col md:flex-row gap-2"}>
                        {frontmatter.sourceUrl &&
                            <a target="_blank"
                               className={"btn btn-neutral"}
                               href={frontmatter.sourceUrl}><Github size={16}/>Source</a>}
                        {frontmatter.demoUrl &&
                            <a target="_blank"
                               className={"btn btn-neutral"}
                               href={frontmatter.demoUrl}><Code size={16}/>Demo</a>}
                        <DownloadButton path={"projects/" + frontmatter.id + ".md"}/>
                    </div>
                    <article className={postStyles.main} dangerouslySetInnerHTML={{__html: markdownBody}}></article>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const directoryPath = path.join(process.cwd(), "/public/markdowns/projects/");
    const files = fs.readdirSync(directoryPath);
    
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => ({
            slug: file.replace(/\.md$/, '')
        }));
}
