import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Campaign Launch & PR | Live Media LK',
  description: 'Digital campaign launches, post-launch advertising, and strategic media buying for maximum ROI.',
}

export default function CampaignLaunchPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <header className="space-y-6 border-b border-white/20 pb-12">
          <Link href="/" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs">&larr; Back to Home</Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Campaign Launch.</h1>
          <p className="text-xl text-gray-400">Digital campaigns, PR, and data-driven media buying.</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Digital Campaign Architecture</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            A beautiful video means nothing if nobody sees it. We architect full-scale digital launches, identifying the optimal channels, timings, and audience segments to ensure your campaign makes an explosive impact.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Targeted Media Buying</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We manage your ad spend with clinical precision. By leveraging A/B testing, pixel tracking, and retargeting funnels, we turn raw visual assets into scalable revenue engines with measurable ROI.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Public Relations & Distribution</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Beyond paid ads, we orchestrate organic PR momentum. We distribute your narrative across digital publications, influencers, and industry networks to build authentic authority and trust.
          </p>
        </section>

        <div className="pt-12">
          <Link href="/contact" className="inline-block border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Launch Your Campaign
          </Link>
        </div>
      </div>
    </main>
  )
}
