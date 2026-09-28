import Link from 'next/link';
import GradientBlob from '@/components/GradientBlob';
import CallToAction from '@/components/CallToAction';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const projectName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-transparent text-white pt-32">
      <GradientBlob className="top-0 left-1/2 -translate-x-1/2 opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10 px-6 pb-24">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/work" className="text-gray-400 hover:text-primary uppercase tracking-widest text-sm font-bold transition-colors mb-12 inline-flex items-center gap-2">
          <span>&larr;</span> Back to Portfolio
        </Link>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] bg-white/5 border border-white/10 rounded-3xl mb-12 flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
          <span className="text-white/20 uppercase tracking-widest relative z-20 font-bold">Hero Project Image</span>
        </div>

        {/* SEO <h1> */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{projectName}</h1>
        <p className="text-xl text-gray-400 mb-16 leading-relaxed">
          A high-end visual and strategic execution resulting in massive digital growth.
        </p>

        {/* Results Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
          {[
            { value: "+340%", label: "ROAS" },
            { value: "2.4M", label: "Impressions" },
            { value: "-45%", label: "CPA" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-md hover:border-primary/50 transition-colors">
              <span className="block text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{stat.value}</span>
              <span className="text-sm uppercase tracking-widest text-primary font-bold">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* SEO structured content sections */}
        <article className="prose prose-invert prose-lg max-w-none space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">
              [Challenge Description] Detail the exact hurdles the client was facing. Were they struggling with conversions? Did their visual identity feel outdated compared to their premium product?
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Strategy</h2>
            <p className="text-gray-300 leading-relaxed">
              [Strategy Description] Explain the strategic approach before any cameras were turned on. Detail the content mapping, media buying strategy, and visual direction.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Execution</h2>
            <p className="text-gray-300 leading-relaxed">
              [Execution Details] This is where you talk about the shoot, the production value, the gear used, and the on-set execution. Include behind-the-scenes insights.
            </p>
            <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-3xl mt-8 flex items-center justify-center text-gray-500">
              [High Resolution Campaign Video]
            </div>
          </section>
        </article>
      </div>

      <CallToAction />
    </main>
  );
}
