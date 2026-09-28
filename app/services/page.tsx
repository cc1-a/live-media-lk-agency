import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import CallToAction from '@/components/CallToAction'
import GradientBlob from '@/components/GradientBlob'
import SlotMachine from '@/components/SlotMachine'
import { Camera, BarChart, Rocket, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Live Media LK',
  description: 'Comprehensive media production, content strategy, and growth marketing services.',
}

const SERVICES = [
  {
    title: "Visual Production",
    slug: "visual-production",
    description: "High-end commercial photography and brand videography tailored for high-converting campaigns. We shoot with psychological intent.",
    icon: <Camera className="w-8 h-8" />,
    features: ["Commercial Photography", "Brand Documentaries", "Product Videography", "Event Coverage"],
    reverse: false
  },
  {
    title: "Content Strategy",
    slug: "content-strategy",
    description: "Data-backed social media planning and visual identity mapping. We ensure your content reaches the right audience at the right time.",
    icon: <BarChart className="w-8 h-8" />,
    features: ["Social Media Management", "Content Calendars", "Audience Research", "Brand Identity"],
    reverse: true
  },
  {
    title: "Campaign Launch",
    slug: "campaign-launch",
    description: "Strategic media buying and digital campaign launches. We don't just create assets; we distribute them for maximum ROI.",
    icon: <Rocket className="w-8 h-8" />,
    features: ["Paid Advertising", "Media Buying", "Launch Strategy", "Performance Tracking"],
    reverse: false
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-16">
      <PageHeader 
        title="Our Expertise."
        subtitle="We combine stunning visuals with data-driven content strategy and targeted media buying to launch brands into the stratosphere."
      />

      <div className="py-24 space-y-32">
        {SERVICES.map((service, index) => (
          <section key={index} className="relative isolate overflow-hidden">
            <GradientBlob className={service.reverse ? 'left-3/4' : 'left-1/4'} />
            <div className="max-w-7xl mx-auto px-6">
              <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm">
                <div className={`grid lg:grid-cols-2 gap-0 ${service.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Text Content */}
                  <div className={`p-8 lg:p-16 flex flex-col justify-center ${service.reverse ? 'lg:col-start-2' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8">
                      {service.icon}
                    </div>
                    <SlotMachine tag="h2" text={service.title} className="text-4xl md:text-5xl font-bold mb-6 w-full text-left" />
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-12">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="font-bold text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-4 text-primary font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  {/* Image/Visual Area */}
                  <div className={`relative bg-white/5 min-h-[400px] lg:min-h-full ${service.reverse ? 'lg:col-start-1' : ''}`}>
                    {/* Placeholder for service image */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 uppercase tracking-widest font-bold">
                      {service.title} Visual
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CallToAction />
    </main>
  )
}
