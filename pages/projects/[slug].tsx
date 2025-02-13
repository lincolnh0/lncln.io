import {marked} from "marked";
import matter from 'gray-matter';
import Head from 'next/head'
import path from "path";
import fs from "fs";
import "../../app/globals.css"
import postStyles from "../../styles/post.module.css";
import {Code, Github} from "lucide-react";
import HomeButton from "@/components/home_button";
import DownloadButton from "@/components/download_button";
import Script from 'next/script'

export default function Project({frontmatter, markdownBody}: any) {
    return (
        <div className={"min-h-screen py-12"}>
            <Script src="https://cloud.umami.is/script.js" data-website-id="3ee7558b-1a42-4190-b237-5ff95c5468d2"></Script>   
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.description}/>
                <meta name="og:image" content={frontmatter.bannerImg}/>
            </Head>

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

export async function getStaticProps(context: any) {
    const {slug} = context.params;

    const data: any = await import(`public/markdowns/projects/${slug}.md`);
    const content = await matter(data.default);

    return {
        props: {
            frontmatter: content.data,
            markdownBody: marked(content.content),
        },
    }
}

export async function getStaticPaths() {
    const directoryPath = path.join(process.cwd(), "/public/markdowns/projects/");
    let fileNames: string[];
    fileNames = [];
    const files = fs.readdirSync(directoryPath);
    files.forEach(function (file) {
        fileNames.push(file.substring(0, file.indexOf(".")));
    });

    const paths = fileNames.map(slug => {
        return {params: {slug: slug}}
    })
    return {
        paths,
        fallback: false,
    }

}