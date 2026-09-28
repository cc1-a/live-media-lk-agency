import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import CallToAction from '@/components/CallToAction'
import GradientBlob from '@/components/GradientBlob'
import SlotMachine from '@/components/SlotMachine'
import { Rocket, Target, PieChart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Campaign Launch | Live Media LK',
  description: 'Strategic media buying, paid advertising, and high-impact digital campaign launches.',
}

const FEATURES = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Launch Strategy",
    description: "Multi-channel planning for maximum initial impact."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Paid Advertising",
    description: "Highly targeted ad campaigns across Meta, Google, and TikTok."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Media Buying",
    description: "Optimized placement to ensure highest return on ad spend."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "ROI Optimization",
    description: "Continuous A/B testing and budget reallocation."
  }
];

export default function CampaignLaunchPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-16">
      
      <PageHeader 
        title="Campaign Launch."
        subtitle="Strategic media buying, paid advertising, and high-impact digital campaign launches."
      />

      <section className="relative py-24 px-6 overflow-hidden">
        <GradientBlob className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SlotMachine tag="h2" text="THE LAUNCHPAD" className="text-sm font-bold uppercase tracking-widest text-primary mb-4 w-full text-center" color="#FFBF00" />
            <SlotMachine tag="h3" text="Scaling with precision." className="text-4xl font-bold w-full text-center" />
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
           <span className="text-white/20 uppercase tracking-widest relative z-20">Campaign Analytics Dashboard</span>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
