import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone, Calendar } from 'lucide-react'
import CallToAction from '@/components/CallToAction'
import SlotMachine from '@/components/SlotMachine'

export const metadata: Metadata = {
  title: 'Contact Us | Live Media LK',
  description: 'Get in touch with Live Media LK. Book a strategy session, request a quote, or drop by our studio.',
}

const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "hello@livemedialk.com",
    href: "mailto:hello@livemedialk.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: "+94 11 234 5678",
    href: "tel:+94112345678"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Studio",
    detail: "123 Creative Ave, Colombo",
    href: "#"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Book a Session",
    detail: "Schedule a strategy call",
    href: "#"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-16">
      <PageHeader 
        title="Let's Talk."
        subtitle="Ready to elevate your brand? Book a strategy session or send us a direct inquiry. We usually respond within 24 hours."
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {CONTACT_INFO.map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="flex flex-col gap-4 p-8 bg-white/5 rounded-3xl cursor-pointer hover:bg-white/10 transition-all duration-300 ring-1 ring-white/10 hover:ring-primary/50 group hover:scale-[1.02] backdrop-blur-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-primary">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg">{item.detail}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 bg-white/5 rounded-3xl ring-1 ring-white/10 backdrop-blur-md">
              <SlotMachine tag="h3" text="Send us a message" className="text-3xl font-bold mb-8 w-full" />
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* Google Map Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="w-full h-96 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
           <span className="text-white/20 uppercase tracking-widest z-10 font-bold">Interactive Map Placeholder</span>
           {/* Add your iframe map here */}
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
