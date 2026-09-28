import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import CallToAction from '@/components/CallToAction'
import GradientBlob from '@/components/GradientBlob'
import SlotMachine from '@/components/SlotMachine'
import { Video, ImageIcon, Scissors, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visual Production | Live Media LK',
  description: 'Premium commercial photography, brand videography, and creative shoots tailored for high-end conversions.',
}

const FEATURES = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Pre-Production",
    description: "Meticulous planning, location scouting, and storyboarding."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Cinema-Grade Gear",
    description: "RED digital cinema cameras and high-end lighting."
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "On-Set Execution",
    description: "Flawless execution of the creative vision on location or in studio."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Post-Production",
    description: "Expert color grading, sound design, and editing."
  }
];

export default function VisualProductionPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-16">
      
      <PageHeader 
        title="Visual Production."
        subtitle="Commercial photography, brand videography, and creative shoots tailored for high-end conversions."
      />

      <section className="relative py-24 px-6 overflow-hidden">
        <GradientBlob className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SlotMachine tag="h2" text="CORE OFFERINGS" className="text-sm font-bold uppercase tracking-widest text-primary mb-4 w-full text-center" color="#FFBF00" />
            <SlotMachine tag="h3" text="From concept to final cut." className="text-4xl font-bold w-full text-center" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative">
        <div className="w-full aspect-[21/9] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative">
           <span className="text-white/20 uppercase tracking-widest relative z-20">Production BTS Video/Image</span>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
