import PostListing from "../components/post_listing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Minimal Header with Large Typography */}
      <div className="container mx-auto px-6 py-20 md:py-32 max-w-4xl">
        <div className="border-l-4 border-orange-500 pl-8 mb-20 home2-container">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 text-slate-900 tracking-tight home-title">
            l<span>nc</span>ln.<span>io</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 font-light mb-2">
            Software Engineer
          </p>
          <p className="text-lg text-slate-500 max-w-lg">
            Crafting digital experiences through thoughtful code and design.
          </p>
        </div>

        {/* Content Sections with Minimal Design */}
        <div className="space-y-20">
          {/* Projects Section */}
          <section>
            <div className="mb-8 pb-4 border-b-2 border-slate-200">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Projects
              </h2>
              <p className="text-slate-600 mt-2">Selected works</p>
            </div>
            <div className="pl-4">
              <PostListing directory="projects" />
            </div>
          </section>

          {/* Blog Section */}
          <section>
            <div className="mb-8 pb-4 border-b-2 border-slate-200">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Blog
              </h2>
              <p className="text-slate-600 mt-2">Thoughts and writings</p>
            </div>
            <div className="pl-4">
              <PostListing directory="blog" />
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t-2 border-slate-200 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Let&apos;s connect
                </h3>
                <p className="text-slate-600">
                  Always open to interesting conversations and opportunities.
                </p>
              </div>
              <div className="flex gap-6 text-slate-600">
                <a href="#" className="hover:text-orange-500 transition-colors font-medium">
                  Email
                </a>
                <span className="text-slate-300">•</span>
                <a href="#" className="hover:text-orange-500 transition-colors font-medium">
                  GitHub
                </a>
                <span className="text-slate-300">•</span>
                <a href="#" className="hover:text-orange-500 transition-colors font-medium">
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 mt-32">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <p className="text-slate-500 text-sm">
            © 2026 lncln.io — Design with intention
          </p>
        </div>
      </footer>
    </main>
  );
}
