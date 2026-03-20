import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, CheckCircle, Send, Globe, MessageSquare, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const sectionRef = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={sectionRef}>
      {/* ════════ PAGE HERO ════════ */}
      <section className="relative pt-40 pb-24 bg-brand-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-20 filter saturate-[1.2] brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/80 to-brand-secondary" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            How can we <span className="text-brand-primary">serve</span> you?
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about our mission or need direct assistance, 
            our team is here to listen and respond with compassion.
          </p>
        </div>
      </section>

      {/* ════════ CONTACT CONTENT ════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side (Col-5) */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 reveal">
            <div>
              <h2 className="font-heading text-4xl text-slate-900 font-bold mb-6 leading-tight">
                Our doors are open <br /> to <span className="text-brand-primary italic">everyone.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Community Witnesses is dedicated to restoration and hope. 
                Contact us through any of the channels below or visit our global headquarters.
              </p>
            </div>
            
            <div className="space-y-8">
               {[
                 { icon: Mail, title: 'Email Correspondence', info: 'info@communitywitnesses.org', label: 'Response within 24h', color: 'text-brand-primary', bg: 'bg-brand-primary/5' },
                 { icon: Phone, title: 'International Hotline', info: '+44 (0) 123 456 789', label: 'Emergency & General Support', color: 'text-brand-primary', bg: 'bg-brand-primary/5' },
                 { icon: MapPin, title: 'Global Office', info: 'Manchester, United Kingdom', label: 'Official Headquarters', color: 'text-brand-primary', bg: 'bg-brand-primary/5' },
               ].map((item) => (
                 <div key={item.title} className="flex gap-6 items-start">
                    <div className={`w-12 h-12 shrink-0 ${item.bg} ${item.color} rounded-xl flex items-center justify-center border border-brand-primary/10`}>
                       <item.icon size={24} />
                    </div>
                    <div>
                       <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h3>
                       <p className="text-xl font-bold text-slate-900 mb-1">{item.info}</p>
                       <p className="text-slate-500 text-xs font-medium">{item.label}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <MessageSquare size={80} className="text-brand-primary" strokeWidth={1} />
               </div>
               <h4 className="font-heading text-2xl font-bold text-slate-900 mb-3">Partner with Us</h4>
               <p className="text-slate-500 text-sm mb-6 leading-relaxed max-w-sm">
                  Looking to build a stronger community together? We invite corporate and nonprofit partners to join our mission of transformation.
               </p>
               <Link to="/get-involved" className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm tracking-widest uppercase hover:underline group">
                  Partnership Inquiries <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>

          {/* Form Side (Col-7) */}
          <div className="lg:col-span-7 reveal">
            {submitted ? (
              <div className="bg-white p-12 lg:p-16 text-center rounded-3xl border border-slate-200 shadow-xl">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                  <CheckCircle size={40} />
                </div>
                <h2 className="font-heading text-3xl text-slate-900 mb-4 font-bold">Message Received</h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been sent to our support team. We will respond within 24-48 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl">
                <div className="mb-10">
                  <h3 className="font-heading text-3xl text-slate-900 font-bold mb-2">Send us a Message</h3>
                  <p className="text-slate-500">Please fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label htmlFor="name" className="text-sm font-semibold text-slate-700 block">Full Name</label>
                       <input
                         id="name"
                         type="text"
                         name="name"
                         required
                         placeholder="John Doe"
                         value={formData.name}
                         onChange={handleChange}
                         className="w-full bg-slate-50 border border-slate-200 py-3.5 px-5 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-slate-400"
                       />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-semibold text-slate-700 block">Email Address</label>
                       <input
                         id="email"
                         type="email"
                         name="email"
                         required
                         placeholder="john@example.com"
                         value={formData.email}
                         onChange={handleChange}
                         className="w-full bg-slate-50 border border-slate-200 py-3.5 px-5 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-slate-400"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700 block">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-5 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 block">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 py-3.5 px-5 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-3 py-4"
                    >
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                    <p className="mt-6 text-center text-xs text-slate-400 italic">
                      Protection of your data is important to us. We will never share your personal information with third parties.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}
