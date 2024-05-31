import path from "path";
import fs from "fs";
import matter from "gray-matter";

type PostListingProp = {
  directory: string
}

export default async function PostListing({ directory }: PostListingProp) {
  const allFileData = await getPostData(directory);
  let sortedFileData = allFileData.sort((a, b) => {
    return new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime();
  })
  return (
      <ul>
        {sortedFileData.map((fileData) => (
          <li key={fileData.title} className={"mt-2 py-2  text-primary hover:font-bold"}>
            <a href={`/${directory}/${fileData.id}`} className={""}>
              <h3 className={"hover:underline"}>{fileData.title}</h3>
            </a>
          </li>
        ))}
      </ul>
  )
}

async function getPostData(directory: string) {
  const directoryPath = path.join(process.cwd(), `/public/markdowns/${directory}/`);
  const fileData = [];
  const files = fs.readdirSync(directoryPath);
  for await (const file of files ) {
    const markdown = await import(`public/markdowns/${directory}/${file}`);
    const content = matter(markdown.default);
    fileData.push(content.data);
  }
  return fileData;
}