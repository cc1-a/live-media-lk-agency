import { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import CallToAction from '@/components/CallToAction'
import BrandsCarousel from '@/components/BrandsCarousel'
import GradientBlob from '@/components/GradientBlob'

import SlotMachine from '@/components/SlotMachine'

export const metadata: Metadata = {
  title: 'About Us | Live Media LK',
  description: 'Learn about the team, history, and philosophy behind Live Media LK, a premium visual production and growth agency.',
}

const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Retention" },
  { value: "$50M+", label: "Client Revenue Generated" },
  { value: "10+", label: "Years Experience" },
];

const TEAM = [
  { name: "John Doe", role: "Founder / Creative Director", img: "placeholder" },
  { name: "Jane Smith", role: "Head of Growth", img: "placeholder" },
  { name: "Mike Johnson", role: "Lead Cinematographer", img: "placeholder" },
  { name: "Sarah Williams", role: "Content Strategist", img: "placeholder" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-16">
      <PageHeader 
        title={<span className="text-white">About <span className="text-primary animate-neon-flicker">Live Media.</span></span>}
        subtitle="Driven by aesthetics. Fueled by data. What started as a boutique photography studio has evolved into a comprehensive media powerhouse."
      />

      {/* Hero Image Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative">
        <div className="w-full aspect-[21/9] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <span className="text-white/20 uppercase tracking-widest relative z-20">High-Quality Team Photo</span>
          {/* <Image src="/path/to/image.jpg" alt="Team" fill className="object-cover" /> */}
        </div>
      </section>

      <BrandsCarousel />

      {/* Stats Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <GradientBlob className="left-0 top-1/2 -translate-y-1/2 opacity-20" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center p-8 lg:p-12 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300">
              <SlotMachine tag="div" text={stat.value} className="text-4xl lg:text-6xl font-bold text-white mb-4 w-full text-center" />
              <p className="text-primary text-sm uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative">
        <div className="text-center space-y-8">
          <SlotMachine tag="h2" text="OUR PHILOSOPHY" className="text-sm font-bold uppercase tracking-widest text-primary mb-2 w-full text-center" color="#FFBF00" />
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            We believe in the intersection of <span className="text-primary">art</span> and <span className="text-primary">analytics</span>.
          </h3>
          <p className="text-gray-300 leading-relaxed text-xl">
            Every frame we shoot is designed with a specific psychological intent and conversion goal in mind. We don't just make things look pretty; we make them perform. Visuals are only as good as the revenue they generate.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <SlotMachine tag="h2" text="MEET THE TEAM" className="text-sm font-bold uppercase tracking-widest text-primary mb-4 w-full text-center" color="#FFBF00" />
          <SlotMachine tag="h3" text="The minds behind the magic." className="text-4xl font-bold w-full text-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/50 transition-colors duration-300">
              <div className="aspect-[4/5] bg-white/5 relative">
                {/* <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /> */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">Headshot</div>
              </div>
              <div className="p-6 relative z-10 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
