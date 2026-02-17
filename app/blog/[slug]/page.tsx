import {marked} from "marked";
import matter from 'gray-matter';
import path from "path";
import fs from "fs";
import postStyles from "@/styles/post.module.css";
import HomeButton from "@/components/home_button";
import DownloadButton from "@/components/download_button";
import { Metadata } from 'next';

// Configure marked for security
marked.setOptions({
    mangle: false,
    headerIds: false
});

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const data: any = await import(`../../../public/markdowns/blog/${slug}.md`);
    const content = matter(data.default);
    
    return {
        title: content.data.title,
        description: content.data.description,
    }
}

export default async function Blog({ params }: Props) {
    const { slug } = params;
    
    const data: any = await import(`../../../public/markdowns/blog/${slug}.md`);
    const content = matter(data.default);
    const frontmatter = content.data;
    const markdownBody = marked(content.content);

    return (
        <div className={"p-12 min-h-screen"}>
            <div className={"prose mx-auto text-primary"}>
                <HomeButton/>
                <h1>
                    {frontmatter.title}
                </h1>
                <p className={"opacity-60 italic font-light"}>{frontmatter.description}</p>

                <div className={"mt-8 flex flex-col md:flex-row gap-4"}>
                    <DownloadButton path={"blog/" + frontmatter.id + ".md"}/>
                </div>
                <div className={postStyles.main} dangerouslySetInnerHTML={{__html: markdownBody}}></div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const directoryPath = path.join(process.cwd(), "/public/markdowns/blog/");
    const files = fs.readdirSync(directoryPath);
    
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => ({
            slug: file.replace(/\.md$/, '')
        }));
}
