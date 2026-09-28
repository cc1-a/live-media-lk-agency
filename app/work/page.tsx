import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import CallToAction from '@/components/CallToAction'

export const metadata: Metadata = {
  title: 'Our Work | Live Media LK',
  description: 'Explore our portfolio of high-end commercial photography, brand videography, and growth campaigns.',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-16">
      
      <PageHeader 
        title="Our Work."
        subtitle="A curated selection of our most impactful visual campaigns and brand growth projects."
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter / Categories placeholder */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-500 mb-16">
          <button className="text-primary border-b-2 border-primary pb-2">All</button>
          <button className="hover:text-white hover:border-white border-b-2 border-transparent pb-2 transition-all">Commercial</button>
          <button className="hover:text-white hover:border-white border-b-2 border-transparent pb-2 transition-all">Fashion</button>
          <button className="hover:text-white hover:border-white border-b-2 border-transparent pb-2 transition-all">Campaigns</button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link key={item} href={`/work/sample-project-${item}`} className="group block aspect-[4/5] bg-gray-900 border border-white/10 overflow-hidden relative rounded-3xl hover:border-primary/50 transition-all duration-500">
              
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />
              
              {/* Optional neon glow effect behind the card */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Visual Production
                  </p>
                  <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Project Alpha {item}
                  </h2>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    A comprehensive rebrand and digital launch for a premium lifestyle brand.
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <CallToAction />
    </main>
  )
}
