import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Visual Production | Live Media LK',
  description: 'Premium commercial photography, brand videography, and creative shoots tailored for high-end conversions.',
}

export default function VisualProductionPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <header className="space-y-6 border-b border-white/20 pb-12">
          <Link href="/" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs">&larr; Back to Home</Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Visual Production.</h1>
          <p className="text-xl text-gray-400">Commercial photography, brand videography, and creative shoots.</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">The Pre-Production Planning</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Every successful shoot begins with meticulous planning. We map out the visual narrative, location scouting, talent acquisition, and logistical requirements long before we pick up a camera.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">On-Set Execution</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Using cinema-grade equipment and industry-leading techniques, our production crew executes the creative vision flawlessly. Whether it's a controlled studio environment or an unpredictable on-location shoot.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Gear & Capabilities</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We invest in the best to deliver the best. From RED digital cinema cameras to high-end lighting grids and drone cinematography, our toolkit is matched only by our expertise.
          </p>
        </section>

        <div className="pt-12">
          <Link href="/contact" className="inline-block border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Book a Shoot
          </Link>
        </div>
      </div>
    </main>
  )
}
