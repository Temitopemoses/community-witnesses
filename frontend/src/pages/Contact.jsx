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
      <section className="relative pt-48 pb-32 bg-slate-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-40 filter saturate-[1.2] brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 mb-8 animate-in shadow-xl text-brand-primary text-sm font-bold tracking-widest uppercase">
             Connect with Us
          </span>
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 animate-in leading-tight tracking-tight">
             How can we <span className="text-brand-primary underline decoration-brand-primary/40 decoration-4 underline-offset-[16px]">Serve</span> you?
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto animate-in leading-relaxed font-medium">
             Reach out to our team with questions, partnership proposals, or requests for direct support.
          </p>
        </div>
      </section>

      {/* ════════ CONTACT GRID ════════ */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          {/* Form Side */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-muted p-16 text-center rounded-[3rem] border border-brand-primary/20 shadow-2xl">
                <CheckCircle size={80} className="text-brand-primary mx-auto mb-8" strokeWidth={2.5} fill="currentColor" fillOpacity={0.1} />
                <h2 className="font-heading text-4xl text-slate-900 mb-6 font-black italic">Message Sent.</h2>
                <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed opacity-80">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been logged with our global support team. We will respond within 24-48 hours.
                </p>
                <div onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-xl cursor-pointer">Submit Another Global Inquiry</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 p-12 md:p-16 rounded-[4rem] shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
                <h3 className="font-heading text-4xl text-slate-900 mb-4 font-black italic text-brand-secondary">Submit Inquiry</h3>
                <p className="text-slate-400 text-sm mb-12 font-bold tracking-widest uppercase">Official correspondence.</p>

                <div className="space-y-10">
                   <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Your Name</label>
                         <input
                           type="text"
                           name="name"
                           required
                           value={formData.name}
                           onChange={handleChange}
                           className="w-full bg-slate-50 border-2 border-slate-50 py-5 px-8 rounded-2xl text-lg font-bold focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-300"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Email Address</label>
                         <input
                           type="email"
                           name="email"
                           required
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full bg-slate-50 border-2 border-slate-50 py-5 px-8 rounded-2xl text-lg font-bold focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-300"
                         />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Inquiry Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-2 border-slate-50 py-5 px-8 rounded-2xl text-lg font-bold focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-300"
                      />
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4">Your Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-2 border-slate-50 py-5 px-8 rounded-2xl text-lg font-bold focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-300 h-48 resize-none"
                      />
                   </div>

                   <button
                     type="submit"
                     className="w-full py-6 bg-brand-secondary text-white font-heading text-2xl font-black italic hover:bg-brand-primary transition-all duration-500 flex items-center justify-center gap-4 rounded-3xl shadow-2xl group active:scale-95"
                   >
                     Send Inquire
                     <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} size={24} />
                   </button>
                </div>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="reveal space-y-24 lg:sticky lg:top-48">
            <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold leading-tight">
               Our doors are open <br /> to <span className="text-brand-primary italic">everyone.</span>
            </h2>
            
            <div className="space-y-12">
               {[
                 { icon: Mail, title: 'Email Correspondence', info: 'info@communitywitnesses.org', label: 'Response within 24h', color: 'text-blue-500', bg: 'bg-blue-50' },
                 { icon: Phone, title: 'International Hotline', info: '+44 (0) 123 456 789', label: 'Emergency & General', color: 'text-emerald-500', bg: 'bg-emerald-50' },
                 { icon: MapPin, title: 'Global Office', info: 'United Kingdom', label: 'Official Headquarters', color: 'text-rose-500', bg: 'bg-rose-50' },
               ].map((item) => (
                 <div key={item.title} className="flex gap-6 items-start group">
                    <div className={`w-14 h-14 shrink-0 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                       <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight italic underline decoration-slate-100 decoration-4 group-hover:decoration-brand-primary transition-all">{item.title}</h3>
                       <p className="text-brand-primary font-black text-2xl mb-1 tracking-tight">{item.info}</p>
                       <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{item.label}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-12 bg-slate-50 border border-slate-200 rounded-[3rem] shadow-xl flex flex-col items-center text-center group overflow-hidden relative">
               <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
               <MessageSquare size={48} className="text-brand-primary mb-8" strokeWidth={2.5} />
               <h4 className="font-heading text-3xl font-black text-slate-900 mb-6 italic">Partner with Us</h4>
               <p className="text-slate-500 text-base font-medium mb-10 leading-relaxed max-w-xs italic">
                  Looking to build a stronger community together? We invite corporate and nonprofit partners to join our mission.
               </p>
               <Link to="/get-involved" className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm tracking-widest uppercase hover:text-slate-900 transition-colors">
                  Partnership Inquiries <ArrowRight size={16} />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
