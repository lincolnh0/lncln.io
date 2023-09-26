import {marked} from "marked";
import matter from 'gray-matter';
import Head from 'next/head'
import path from "path";
import fs from "fs";
import "../../app/globals.css"
import postStyles from "@/styles/post.module.css";
import HomeButton from "@/components/home_button";
import DownloadButton from "@/components/download_button";

export default function Blog({ frontmatter, markdownBody}: any) {
  return (
      <div className={"p-12 min-h-screen"}>

        <Head>
          <title>{ frontmatter.title }</title>
          <meta name="description" content={frontmatter.description} />
        </Head>

        <div className={"mx-4 my-2 flex flex-col md:flex-row gap-4 justify-between"}>
          <HomeButton />
        </div>
        <div className={"mx-4 my-16"}>
          <h1 className="mb-1 font-bold title text-4xl">
            {frontmatter.title}
          </h1>
          <p className={"text-gray-500"}>
            {frontmatter.description}</p>
        </div>
        <div className={postStyles.main} dangerouslySetInnerHTML={{ __html: markdownBody }}></div>
        <div className={"mx-4 my-2 flex flex-col md:flex-row gap-4"}>
          <DownloadButton path={"blog/" + frontmatter.id + ".md"}/>
        </div>
      </div>

  )
}

export async function getStaticProps(context:any) {
  const { slug } = context.params;

  const data:any  = await import(`public/markdowns/blog/${slug}.md`);
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
  const paths = fileNames.map(slug => { return { params: { slug: slug } } })
  return {
    paths,
    fallback: false,
  }

}