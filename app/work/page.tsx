import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Work | Live Media LK',
  description: 'Explore our portfolio of high-end commercial photography, brand videography, and growth campaigns.',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <header className="space-y-6 text-center max-w-3xl mx-auto pb-12 border-b border-white/20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Our Work.</h1>
          <p className="text-xl text-gray-400">
            A curated selection of our most impactful visual campaigns and brand growth projects.
          </p>
        </header>

        {/* Filter / Categories placeholder */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
          <span className="text-white">All</span>
          <span className="hover:text-white cursor-pointer transition-colors">Commercial</span>
          <span className="hover:text-white cursor-pointer transition-colors">Fashion</span>
          <span className="hover:text-white cursor-pointer transition-colors">Campaigns</span>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link key={item} href={`/work/sample-project-${item}`} className="group block aspect-[4/5] bg-gray-900 border border-white/10 overflow-hidden relative rounded-xl">
              <div className="absolute inset-0 bg-transparent/50 group-hover:bg-transparent/10 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <h2 className="text-2xl font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Sample Project {item}
                </h2>
                <p className="text-sm text-gray-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 mt-2">
                  Visual Production & PR
                </p>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  )
}
