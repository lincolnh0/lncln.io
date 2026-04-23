import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "lncln.io — BRUTAL",
    description: "portfolio and development blog",
};

async function getPostData(directory: string) {
    const directoryPath = path.join(process.cwd(), `/public/markdowns/${directory}/`);
    const files = fs.readdirSync(directoryPath);
    const fileData = [];
    for (const file of files) {
        const markdown = await import(`../../public/markdowns/${directory}/${file}`);
        const content = matter(markdown.default);
        fileData.push(content.data);
    }
    return fileData.sort((a, b) =>
        new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    );
}

export default async function BrutalHome() {
    const projects = await getPostData("projects");
    const blogs = await getPostData("blog");
    const limitedProjects = projects.slice(0, 6);
    const limitedBlogs = blogs.slice(0, 6);

    return (
        <main className="min-h-screen bg-white text-black font-mono">
            {/* Header */}
            <header className="border-b-4 border-black brutal-header">
                <div className="max-w-6xl mx-auto px-6 py-8 md:py-16">
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none brutal-title">
                        l<span className="brutal-nc"><span>nc</span></span>ln<span className="brutal-io text-white bg-black px-2 ml-1"><span>.io</span></span>
                    </h1>
                    <div className="mt-6">
                        <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase">Software Engineer</span>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6">
                {/* Projects */}
                <section className="border-b-4 border-black py-12">
                    <div className="flex items-baseline gap-4 mb-8">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Projects</h2>
                        <span className="text-sm font-bold border-2 border-black px-2 py-0.5">{projects.length}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {limitedProjects.map((project, i) => (
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
                    {projects.length > 6 && (
                        <a href="/projects" className="inline-block mt-6 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100">
                            See all projects →
                        </a>
                    )}
                </section>

                {/* Blog */}
                <section className="border-b-4 border-black py-12">
                    <div className="flex items-baseline gap-4 mb-8">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Blog</h2>
                        <span className="text-sm font-bold border-2 border-black px-2 py-0.5">{blogs.length}</span>
                    </div>
                    <div className="space-y-0">
                        {limitedBlogs.map((post, i) => (
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
                    {blogs.length > 6 && (
                        <a href="/blog" className="inline-block mt-6 border-2 border-black px-4 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-100">
                            See all posts →
                        </a>
                    )}
                </section>

                {/* Contact */}
                <section className="py-12">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Contact</h2>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:me@lncln.io"
                            className="border-4 border-black px-6 py-3 font-black uppercase text-lg hover:bg-black hover:text-white transition-colors duration-100"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/lincolnh0"
                            className="border-4 border-black px-6 py-3 font-black uppercase text-lg hover:bg-black hover:text-white transition-colors duration-100"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lincoln-ho/"
                            className="border-4 border-black px-6 py-3 font-black uppercase text-lg hover:bg-black hover:text-white transition-colors duration-100"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="border-t-4 border-black">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-bold uppercase">
                        &copy; 2026 lncln.io
                    </p>
                    <p className="text-xs font-bold uppercase opacity-50">
                        No frills. No fluff. Just work.
                    </p>
                </div>
            </footer>
        </main>
    );
}
