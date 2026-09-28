import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Strategy | Live Media LK',
  description: 'Data-driven brand content strategy, social media planning, and visual identity mapping across all touchpoints.',
}

export default function ContentStrategyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <header className="space-y-6 border-b border-white/20 pb-12">
          <Link href="/" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs">&larr; Back to Home</Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Content Strategy.</h1>
          <p className="text-xl text-gray-400">Brand content strategy, social media planning, and visual identity.</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Mapping the Visual Journey</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Before any content is produced, we define the roadmap. We analyze your target audience, identify key cultural touchpoints, and map out a visual journey that aligns perfectly with your brand's core identity.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Social Media Planning</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Consistency is the engine of growth. We develop comprehensive content calendars, dictating platform-specific strategies that maximize organic reach and build community engagement.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Visual Identity Cohesion</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Every asset we produce is designed to fit seamlessly into a larger ecosystem. From Instagram grids to web banners, we ensure your brand looks unmistakable and premium across every digital touchpoint.
          </p>
        </section>

        <div className="pt-12">
          <Link href="/contact" className="inline-block border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Start Strategizing
          </Link>
        </div>
      </div>
    </main>
  )
}
