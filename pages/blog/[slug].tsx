import {marked} from "marked";
import matter from 'gray-matter';
import Head from 'next/head'
import path from "path";
import fs from "fs";
import "../../app/globals.css"
import postStyles from "@/styles/post.module.css";
import HomeButton from "@/components/home_button";
import DownloadButton from "@/components/download_button";
import Script from 'next/script'

export default function Blog({frontmatter, markdownBody}: any) {
    return (
        <div className={"p-12 min-h-screen"}>
            <Script src="https://cloud.umami.is/script.js" data-website-id="3ee7558b-1a42-4190-b237-5ff95c5468d2"></Script>   
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.description}/>
            </Head>

            <div className={"prose mx-auto text-primary"}>
                <HomeButton/>
                <h1>
                    {frontmatter.title}
                </h1>
                <p className={"opacity-60 italic font-light"}>{frontmatter.description}</p>
                <div className={postStyles.main} dangerouslySetInnerHTML={{__html: markdownBody}}></div>
                <div className={"mt-8 flex flex-col md:flex-row gap-4"}>
                    <DownloadButton path={"blog/" + frontmatter.id + ".md"}/>
                </div>
            </div>
        </div>

    )
}

export async function getStaticProps(context: any) {
    const {slug} = context.params;

    const data: any = await import(`public/markdowns/blog/${slug}.md`);
    const content = await matter(data.default);

    return {
        props: {
            frontmatter: content.data,
            markdownBody: marked(content.content),
        },
    }
}

export async function getStaticPaths() {
    const directoryPath = path.join(process.cwd(), "/public/markdowns/blog/");
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