import {marked} from "marked";
import matter from 'gray-matter';
import path from "path";
import fs from "fs";
import postStyles from "../../../styles/post.module.css";
import {ArrowLeft, Code, Github, Download} from "lucide-react";
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
        <div className="min-h-screen bg-white text-black font-mono py-12">
            <div className="max-w-3xl mx-auto px-6">
                <a className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100 mb-8" href="/">
                    <ArrowLeft size={16} />
                    Back to home
                </a>

                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                    {frontmatter.title}
                </h1>
                <p className="text-sm opacity-60 font-bold uppercase mb-8">{frontmatter.description}</p>

                <div className="flex flex-wrap gap-3 mb-10">
                    {frontmatter.sourceUrl &&
                        <a target="_blank"
                           className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100"
                           href={frontmatter.sourceUrl}><Github size={16}/>Source</a>}
                    {frontmatter.demoUrl &&
                        <a target="_blank"
                           className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100"
                           href={frontmatter.demoUrl}><Code size={16}/>Demo</a>}
                    <a target="_blank"
                       className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100"
                       href={"/markdowns/projects/" + frontmatter.id + ".md"}><Download size={16}/>Download .md</a>
                </div>
                <article className={`${postStyles.main} prose prose-neutral max-w-none`} dangerouslySetInnerHTML={{__html: markdownBody}}></article>
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
