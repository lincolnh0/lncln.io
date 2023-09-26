import PostListing from "../components/post_listing";
export default function Home() {
  return (
    <main className="p-16 md:p-24 min-h-screen">
      <div className="site-container flex flex-col justify-between">
        <div className="mb-24 relative flex-col place-items-center">
          <h1 className="mb-1 font-bold title text-5xl">
            l<span>nc</span>ln.<span>io</span>
          </h1>
          <p className="text-gray-600 domain-intro">development blog</p>
          <p className="text-gray-600 portfolio-intro">software developer</p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-0">
          <div className="flex-col w-full md:w-1/2 lg:w-1/3 text-gray-600">
            <h2 className={"text-2xl font-bold"}>Projects</h2>
            <PostListing directory={"projects"} />
          </div>

          <div className="flex-col w-full md:w-1/2 lg:w-1/3">
            <h2 className={"text-2xl font-bold text-gray-600"}>Blog</h2>
            <PostListing directory={"blog"} />

          </div>

        </div>
      </div>
    </main>
  )
}
