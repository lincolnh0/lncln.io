import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog — lncln.io",
    description: "Thoughts and writings",
};

async function getPostData() {
    const directoryPath = path.join(process.cwd(), "/public/markdowns/blog/");
    const files = fs.readdirSync(directoryPath);
    const fileData = [];
    for (const file of files) {
        const markdown = await import(`../../public/markdowns/blog/${file}`);
        const content = matter(markdown.default);
        fileData.push(content.data);
    }
    return fileData.sort((a, b) =>
        new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );
}

export default async function BlogListing() {
    const blogs = await getPostData();

    return (
        <div className="min-h-screen bg-white text-black font-mono">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <a className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100 mb-8" href="/">
                    <ArrowLeft size={16} />
                    Back to home
                </a>
                <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-4 border-black">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Blog</h2>
                    <span className="text-sm font-bold border-2 border-black px-2 py-0.5">{blogs.length}</span>
                </div>
                <div className="space-y-0">
                    {blogs.map((post, i) => (
                        <a
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="flex items-center justify-between border-2 border-black p-4 -mt-0.5 hover:bg-black hover:text-white transition-colors duration-100 group"
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-3xl font-black opacity-30 group-hover:opacity-60">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="text-lg font-black uppercase">{post.title}</h3>
                                    <p className="text-sm opacity-70">{post.description}</p>
                                </div>
                            </div>
                            <span className="text-2xl font-black shrink-0 ml-4">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
