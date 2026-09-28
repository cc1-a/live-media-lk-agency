import ScrollSequence from '@/components/ScrollSequence'
import Link from 'next/link'
import SlotMachine from '@/components/SlotMachine'
import ExpertiseCards from '@/components/ExpertiseCards'
import dynamic from 'next/dynamic'

const PastProjectsAnimation = dynamic(() => import('@/components/PastProjectsAnimation'))
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'))

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-primary selection:text-black">
      
      {/* 1. The Hero Section */}
      <ScrollSequence />


        
        {/* Content Foreground */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col gap-40">
          
          {/* Who We Are Elevator Pitch */}
          <section className="max-w-4xl text-center mx-auto">
            <SlotMachine tag="h2" text="Elevating Brands Beyond Production" className="text-4xl md:text-5xl font-bold mb-8 text-white w-full text-center" staggerFrom="start" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We started as a high-end visual production house, but beautiful imagery alone doesn't scale businesses. 
              Today, we're a full-stack growth and PR agency combining stunning visuals with data-driven content strategy 
              and targeted media buying to launch brands into the stratosphere.
            </p>
          </section>

          {/* Services Overview (The Routing Hub) */}
          <section>
            <SlotMachine tag="h3" text="OUR EXPERTISE" className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-primary" color="#FFBF00" />
            <ExpertiseCards />
          </section>

        </div>

        {/* Featured Work (The Proof) - Moved outside flex container for pinning */}
        <PastProjectsAnimation />

        {/* Social Proof (Full Width) */}
        <section className="w-full relative z-10 py-24">
          <SlotMachine tag="h3" text="CLIENT SUCCESS" className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-primary" color="#FFBF00" />
          <TestimonialsSection />
        </section>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32 flex flex-col gap-40">
          {/* Final CTA (The Conversion) */}
          <section id="contact" className="text-center py-24 bg-white/5 border border-primary/20 rounded-xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <SlotMachine tag="h2" text="Ready to scale?" className="text-4xl md:text-6xl font-bold mb-6 text-white w-full text-center" />
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Book a strategy session with our team to map out your brand's visual identity and growth trajectory.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-black px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors rounded-full shadow-[0_0_40px_rgba(255,191,0,0.3)]">
                Get in Contact
              </Link>
            </div>
          </section>

        </div>
    </main>
  );
}
