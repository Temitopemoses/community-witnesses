import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Users, CheckCircle, Send, ArrowRight, Heart, Star, Globe, User, Mail, Phone, Clock, MessageSquare, ChevronDown } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const interestOptions = [
  'Volunteering',
  'Outreach',
  'Admin Support',
  'Other',
]

export default function GetInvolved() {
  const sectionRef = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
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
            src="/images/services.png" 
            alt="Get Involved" 
            className="w-full h-full object-cover opacity-40 filter saturate-[1.2] brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 mb-8 animate-in shadow-xl text-brand-primary text-sm font-bold tracking-widest uppercase">
             Join the Force
          </span>
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 animate-in leading-tight tracking-tight">
             Witness the <span className="text-brand-primary underline decoration-brand-primary/40 decoration-4 underline-offset-[16px]">Change.</span> <br />
             Transform the Community.
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto animate-in leading-relaxed font-medium">
             Be part of a CIC dedicated to see lives restored, families rebuilt, and communities transformed through passion, power, salvation, and service.
          </p>
        </div>
      </section>

      {/* ════════ VOLUNTEER FORM ════════ */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          {/* Form Side */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-muted p-16 text-center rounded-[3rem] border border-brand-primary/20 shadow-2xl">
                <CheckCircle size={80} className="text-brand-primary mx-auto mb-8" strokeWidth={2.5} fill="currentColor" fillOpacity={0.1} />
                <h2 className="font-heading text-4xl text-slate-900 mb-6 font-black italic">Welcome.</h2>
                <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed opacity-80">
                  Thank you, <strong>{formData.fullName}</strong>. We've received your application and will be in touch shortly to welcome you to the mission.
                </p>
                <div onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-xl cursor-pointer">Submit Another Interest</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 p-12 md:p-16 rounded-[4rem] shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
                <h3 className="font-heading text-4xl text-slate-900 mb-4 font-black italic">Expression of Interest</h3>
                <p className="text-slate-400 text-sm mb-12 font-bold tracking-widest uppercase">Be part of the change agent.</p>

                <div className="space-y-8">
                   <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4 mb-1 block">Full Name</label>
                         <div className="relative group">
                           <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                           <input
                             type="text"
                             name="fullName"
                             required
                             placeholder="John Doe"
                             value={formData.fullName}
                             onChange={handleChange}
                             className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-slate-300"
                           />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4 mb-1 block">Email Address</label>
                         <div className="relative group">
                           <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                           <input
                             type="email"
                             name="email"
                             required
                             placeholder="john@example.com"
                             value={formData.email}
                             onChange={handleChange}
                             className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-slate-300"
                           />
                         </div>
                      </div>
                   </div>

                   <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4 mb-1 block">Phone Number</label>
                         <div className="relative group">
                           <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                           <input
                             type="tel"
                             name="phone"
                             placeholder="+44 7000 000000"
                             value={formData.phone}
                             onChange={handleChange}
                             className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-slate-300"
                           />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4 mb-1 block">Area of Interest</label>
                         <div className="relative group">
                           <Sparkles className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                           <select
                             name="interest"
                             required
                             value={formData.interest}
                             onChange={handleChange}
                             className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-12 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-all appearance-none cursor-pointer"
                           >
                             <option value="" disabled hidden>Select an area</option>
                             {interestOptions.map((opt) => (
                               <option key={opt} value={opt}>{opt}</option>
                             ))}
                           </select>
                           <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4 mb-1 block">Availability</label>
                      <div className="relative group">
                        <Clock className="absolute left-6 top-[22px] -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                        <input
                          type="text"
                          name="availability"
                          placeholder="e.g., Weekends, Evenings"
                          value={formData.availability}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-slate-300"
                        />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-4 mb-1 block">Message / Why you want to join</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-6 top-[22px] -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                        <textarea
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us a little about yourself and why you'd like to get involved..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-slate-300 resize-none h-32"
                        />
                      </div>
                   </div>

                   <button
                     type="submit"
                     className="w-full py-6 bg-slate-900 text-white font-heading text-2xl font-black italic hover:bg-brand-primary transition-all duration-500 flex items-center justify-center gap-4 rounded-3xl shadow-2xl group active:scale-95"
                   >
                     Submit to Mission
                     <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} size={24} />
                   </button>
                </div>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="reveal space-y-24 lg:sticky lg:top-48">
            <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold leading-tight">
               Build a community <br /> where <span className="text-brand-primary italic">everyone matters.</span>
            </h2>
            <div className="space-y-12">
               {[
                 { icon: Heart, title: 'Victory & Recovery', desc: 'Help others gain victory and rediscover themselves.', color: 'text-rose-500', bg: 'bg-rose-50' },
                 { icon: Globe, title: 'Impact', desc: 'Support outreach and programs.', color: 'text-blue-500', bg: 'bg-blue-50' },
                 { icon: Star, title: 'Leading Change', desc: 'Be the lead voice for restoration in your neighborhood.', color: 'text-amber-500', bg: 'bg-amber-50' },
               ].map((item) => (
                 <div key={item.title} className="flex gap-6 items-start group">
                    <div className={`w-14 h-14 shrink-0 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                       <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight italic underline decoration-slate-100 decoration-4 group-hover:decoration-brand-primary transition-all">{item.title}</h3>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed italic opacity-80">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="p-12 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
               <h4 className="font-heading text-2xl font-black text-white mb-6 underline decoration-brand-primary decoration-4">Need Guidance?</h4>
               <p className="text-white/70 text-base font-medium mb-10 italic leading-relaxed">
                  "We are accountable to our stakeholders and partners. Reach out to our admin support team directly."
               </p>
               <Link to="/contact" className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">
                  Contact Support <ArrowRight size={16} />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
