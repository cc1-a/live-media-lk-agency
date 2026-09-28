import Link from 'next/link';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the case study data from a CMS using the slug.
  const projectName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-transparent text-white pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/work" className="text-primary hover:text-white uppercase tracking-widest text-sm font-bold transition-colors mb-12 inline-block">
          &larr; Back to Portfolio
        </Link>

        {/* SEO <h1> */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{projectName}</h1>
        <p className="text-xl text-gray-400 mb-16 leading-relaxed">
          A high-end visual and strategic execution resulting in massive digital growth.
        </p>

        {/* SEO structured content sections */}
        <article className="prose prose-invert prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Client</h2>
            <p className="text-gray-300 leading-relaxed">
              [Client Description] Describe the client's industry, their market positioning, and what made them seek out a full-funnel visual storytelling agency.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">
              [Challenge Description] Detail the exact hurdles the client was facing. Were they struggling with conversions? Did their visual identity feel outdated compared to their premium product?
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Strategy</h2>
            <p className="text-gray-300 leading-relaxed">
              [Strategy Description] Explain the strategic approach before any cameras were turned on. Detail the content mapping, media buying strategy, and visual direction.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Execution</h2>
            <p className="text-gray-300 leading-relaxed">
              [Execution Details] This is where you talk about the shoot, the production value, the gear used, and the on-set execution. Include behind-the-scenes insights.
            </p>
            {/* Placeholder for project imagery */}
            <div className="w-full aspect-video bg-white/5 border border-primary/20 rounded-xl mt-8 flex items-center justify-center text-gray-500">
              [High Resolution Campaign Video / Image Gallery]
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Results (ROI/Metrics)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl text-center">
                <span className="block text-4xl font-bold text-primary mb-2">+340%</span>
                <span className="text-sm uppercase tracking-widest text-gray-400">ROAS</span>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl text-center">
                <span className="block text-4xl font-bold text-primary mb-2">2.4M</span>
                <span className="text-sm uppercase tracking-widest text-gray-400">Impressions</span>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl text-center">
                <span className="block text-4xl font-bold text-primary mb-2">-45%</span>
                <span className="text-sm uppercase tracking-widest text-gray-400">CPA</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              [Results Description] Break down the actual business impact. Search engines love numbers, metrics, and definitive proof of success.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
