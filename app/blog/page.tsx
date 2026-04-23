import PostListing from "@/components/post_listing";
import HomeButton from "@/components/home_button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — lncln.io",
    description: "Thoughts and writings",
};

export default function BlogListing() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <HomeButton />
                <div className="mb-8 pb-4 border-b-2 border-slate-200">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                        Blog
                    </h2>
                    <p className="text-slate-600 mt-2">Thoughts and writings</p>
                </div>
                <div className="pl-4">
                    <PostListing directory="blog" />
                </div>
            </div>
        </div>
    );
}
