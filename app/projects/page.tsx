import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Projects — lncln.io",
    description: "All projects",
};

async function getPostData() {
    const directoryPath = path.join(process.cwd(), "/public/markdowns/projects/");
    const files = fs.readdirSync(directoryPath);
    const fileData = [];
    for (const file of files) {
        const markdown = await import(`../../public/markdowns/projects/${file}`);
        const content = matter(markdown.default);
        fileData.push(content.data);
    }
    return fileData.sort((a, b) =>
        new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );
}

export default async function Projects() {
    const projects = await getPostData();

    return (
        <div className="min-h-screen bg-white text-black font-mono">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <a className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100 mb-8" href="/">
                    <ArrowLeft size={16} />
                    Back to home
                </a>
                <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-4 border-black">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Projects</h2>
                    <span className="text-sm font-bold border-2 border-black px-2 py-0.5">{projects.length}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {projects.map((project, i) => (
                        <a
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="block border-2 border-black p-5 -mt-0.5 -ml-0.5 hover:bg-black hover:text-white transition-colors duration-100"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <span className="text-xs font-bold opacity-50">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-xl font-black uppercase mt-1">{project.title}</h3>
                                    <p className="text-sm mt-2 opacity-70">{project.description}</p>
                                </div>
                                <span className="text-2xl font-black shrink-0">→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
