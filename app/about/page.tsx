import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Live Media LK',
  description: 'Learn about the team, history, and philosophy behind Live Media LK, a premium visual production and growth agency.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <header className="space-y-6 border-b border-white/20 pb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">About Live Media.</h1>
          <p className="text-xl text-gray-400">Driven by aesthetics. Fueled by data.</p>
        </header>

        {/* Team Photo Placeholder */}
        <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
          <span className="text-white/20 uppercase tracking-widest">High-Quality Team Photo</span>
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our History</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            What started as a boutique photography studio has evolved into a comprehensive media powerhouse. We realized early on that stunning visuals only work when they are seen by the right people. That realization transformed our approach from pure production to holistic brand growth.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Our Philosophy</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We believe in the intersection of art and analytics. Every frame we shoot is designed with a specific psychological intent and conversion goal in mind. We don't just make things look pretty; we make them perform.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="border border-white/10 p-6 rounded-xl bg-white/5">
              <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center text-white/30 text-xs">Headshot</div>
              <h3 className="text-xl font-bold">Founder / Creative Director</h3>
              <p className="text-sm text-gray-400 mt-2">Visionary behind the lens with a decade of high-end commercial experience.</p>
            </div>
            <div className="border border-white/10 p-6 rounded-xl bg-white/5">
              <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center text-white/30 text-xs">Headshot</div>
              <h3 className="text-xl font-bold">Head of Growth</h3>
              <p className="text-sm text-gray-400 mt-2">Data-obsessed strategist turning visual assets into scalable ROI.</p>
            </div>
          </div>
        </section>

        <div className="pt-12 text-center border-t border-white/20">
          <h2 className="text-2xl font-bold mb-6">Ready to work together?</h2>
          <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-full">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
