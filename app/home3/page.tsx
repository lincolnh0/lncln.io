import PostListing from "../../components/post_listing";
import { Code2, Rocket, PenTool } from "lucide-react";

export default function Home3() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Split Screen Hero */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center p-8 md:p-16 bg-slate-900">
          <div className="max-w-lg">
            <div className="mb-8">
              <div className="inline-block px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <span className="text-orange-400 text-sm font-medium">Available for work</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I&apos;m <br />
                <span className="text-orange-500">Lincoln</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                A software engineer who loves building products that make a difference.
                Specializing in web technologies and modern development practices.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-sm text-slate-400">Clean Code</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-sm text-slate-400">Fast Delivery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-sm text-slate-400">Great Design</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-slate-700 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-16">
          <div className="text-center">
            <div className="text-9xl font-bold mb-4 text-white/20">
              &lt;/&gt;
            </div>
            <p className="text-2xl text-white/80 font-light">
              Building the web, one line at a time
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Recent Projects
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              A collection of my latest work showcasing different technologies and approaches.
            </p>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <PostListing directory="projects" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Latest Posts
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Sharing knowledge and insights from my journey in software development.
            </p>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <PostListing directory="blog" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6 py-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <a href="mailto:hello@lncln.io" className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">© 2026 lncln.io</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">GitHub</a>
              <a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-500 hover:text-orange-500 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
