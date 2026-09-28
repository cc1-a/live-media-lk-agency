'use client'

import { useState } from 'react'
import { sendContactMessage } from '@/app/actions'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactMethod, setContactMethod] = useState('whatsapp')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      await sendContactMessage(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
        <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
        <p className="text-gray-400 text-center">We have received your details and will get back to you shortly.</p>
        <div className="pt-4 border-t border-white/10 w-full flex flex-col items-center gap-4">
          <p className="text-gray-300 text-center">Want to chat with the owner right now?</p>
          <a 
            href="https://wa.me/94760967178" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white/5 border border-white/10 rounded-xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
        <input 
          type="text" 
          name="name" 
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
          placeholder="Your Name (Optional)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
        <input 
          type="text" 
          name="company" 
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
          placeholder="Your Company (Optional)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Contact Method</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-white cursor-pointer">
            <input 
              type="radio" 
              name="contactMethod" 
              value="whatsapp" 
              checked={contactMethod === 'whatsapp'} 
              onChange={() => setContactMethod('whatsapp')}
              className="accent-white w-4 h-4"
            />
            WhatsApp
          </label>
          <label className="flex items-center gap-2 text-white cursor-pointer">
            <input 
              type="radio" 
              name="contactMethod" 
              value="email" 
              checked={contactMethod === 'email'} 
              onChange={() => setContactMethod('email')}
              className="accent-white w-4 h-4"
            />
            Email
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {contactMethod === 'whatsapp' ? 'WhatsApp Number' : 'Email Address'}
        </label>
        <input 
          type={contactMethod === 'email' ? 'email' : 'tel'} 
          name="contactDetail" 
          required 
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
          placeholder={contactMethod === 'whatsapp' ? '+94 7X XXX XXXX' : 'you@example.com'}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Brief Explanation</label>
        <textarea 
          name="message" 
          required 
          rows={4}
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 mt-4"
      >
        {isSubmitting ? 'Sending...' : 'Get in Contact'}
      </button>
    </form>
  )
}
