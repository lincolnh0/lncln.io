import PostListing from "../../components/post_listing";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home1() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-orange-600 font-semibold text-sm">👋 Welcome to my portfolio</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-600 to-slate-900">
            l<span className="text-orange-500">nc</span>ln.<span className="text-orange-500">io</span>
          </h1>
          <p className="text-2xl text-slate-600 mb-4">Software Engineer</p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Building elegant solutions to complex problems. Passionate about clean code, 
            modern web technologies, and creating exceptional user experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transform">
              <Github className="w-5 h-5 text-slate-700" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transform">
              <Linkedin className="w-5 h-5 text-slate-700" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transform">
              <Mail className="w-5 h-5 text-slate-700" />
            </a>
          </div>
        </div>

        {/* Projects and Blog Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Projects Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Explore my latest work and side projects showcasing various technologies and problem-solving approaches.
            </p>
            <PostListing directory="projects" />
            <div className="mt-6 pt-6 border-t border-slate-200">
              <a href="/projects" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 group">
                View all projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-slate-900">Blog</h2>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Thoughts on software development, technical insights, and lessons learned along the way.
            </p>
            <PostListing directory="blog" />
            <div className="mt-6 pt-6 border-t border-slate-200">
              <a href="/blog" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 group">
                Read all posts
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Let&apos;s work together</h3>
            <p className="text-orange-100 mb-6">
              Interested in collaborating? Get in touch and let&apos;s create something amazing.
            </p>
            <a href="#" className="inline-block px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
