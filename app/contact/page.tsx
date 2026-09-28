import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Live Media LK',
  description: 'Get in touch with Live Media LK. Book a strategy session, request a quote, or drop by our studio.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div className="space-y-12">
          <header className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Let's Talk.</h1>
            <p className="text-xl text-gray-400">
              Ready to elevate your brand? Book a strategy session or send us a direct inquiry.
            </p>
          </header>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Us
              </h2>
              <a href="mailto:livemedialkdigital@gmail.com" className="text-2xl font-bold hover:text-gray-300 transition-colors">
                livemedialkdigital@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Visit the Studio</h2>
              <p className="text-lg text-gray-300">
                123 Creative Avenue,<br />
                Colombo, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ContactForm />

          {/* Google Map Placeholder (Local SEO) */}
          <div className="w-full h-64 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden relative">
             <span className="text-white/20 uppercase tracking-widest z-10">Google Map Embed</span>
          </div>
        </div>

      </div>
    </main>
  )
}
