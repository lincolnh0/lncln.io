import './globals.css'


export default function Home() {
  return (
    <main className="p-24 min-h-screen">
      <div className="site-container min-w-full flex flex-col justify-between">
        <div className="mb-24 relative flex-col place-items-center">
          <h1 className="font-bold title text-5xl transition ease-in-out">
            l<span>nc</span>ln.<span>io</span>
          </h1>
          <p className="domain-intro">personal development blog</p>
          <p className="portfolio-intro">software developer</p>
        </div>

        <div className="flex min-w-full">
          <div className="flex-col w-1/2">
            <h2 className={"text-2xl font-bold text-gray-600"}>Projects</h2>
          </div>


          <div className="flex-col w-1/2">
            <h2 className={"text-2xl font-bold text-gray-600"}>Blogs</h2>

          </div>

        </div>
      </div>
    </main>
  )
}
