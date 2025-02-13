import PostListing from "../components/post_listing";
export default function Home() {
  return (
      <main className="p-16 md:p-24 mx-auto min-h-screen font-sans">
        <div className="site-container flex flex-col justify-between items-center">
          <div className="mb-24 relative flex-col font-sans">
            <h1 className="mb-1 text-primary font-semibold title text-5xl">
              l<span>nc</span>ln.<span>io</span>
            </h1>
            <p className="text-primary domain-intro">portfolio & blog</p>
            <p className="text-primary portfolio-intro text-right">software engineer</p>
          </div>


        </div>
        <div className="flex flex-col gap-12 md:flex-row md:gap-0 md:justify-items-end justify-between md:w-3/4 lg:w-1/2 mx-auto">
          <div className="flex-col w-full flex-shrink">
            <h2 className={"text-2xl text-primary font-bold"}>Projects</h2>
            <PostListing directory={"projects"}/>
          </div>

          <div className="flex-col w-full flex-shrink md:text-right">
            <h2 className={"text-2xl text-primary font-bold "}>Blog</h2>
            <PostListing directory={"blog"} />

          </div>

        </div>
      </main>
  )
}
