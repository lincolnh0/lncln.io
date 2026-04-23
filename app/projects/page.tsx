import PostListing from "@/components/post_listing";
import HomeButton from "@/components/home_button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — lncln.io",
    description: "All projects",
};

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <HomeButton />
                <div className="mb-8 pb-4 border-b-2 border-slate-200">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                        Projects
                    </h2>
                    <p className="text-slate-600 mt-2">Selected works</p>
                </div>
                <div className="pl-4">
                    <PostListing directory="projects" />
                </div>
            </div>
        </div>
    );
}
