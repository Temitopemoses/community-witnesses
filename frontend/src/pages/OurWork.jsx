import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Award, TrendingUp, Heart, Globe, ArrowRight, Shield, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const newImages = [
  '/images/WhatsApp Image 2026-03-18 at 00.10.09.jpeg',
  '/images/WhatsApp Image 2026-03-18 at 00.10.09 (1).jpeg',
  '/images/WhatsApp Image 2026-03-18 at 00.10.09 (2).jpeg',
  '/images/WhatsApp Image 2026-03-18 at 00.10.09 (3).jpeg',
  '/images/WhatsApp Image 2026-03-18 at 00.10.09 (4).jpeg'
]

const programs = [
  {
    icon: Shield,
    title: 'Shelter & Housing',
    desc: 'Paths to immediate shelter and long-term housing solutions.',
    tag: 'Fundamental Human Right',
    color: 'bg-brand-primary/10',
    iconColor: 'text-brand-primary',
  },
  {
    icon: TrendingUp,
    title: 'Addiction Recovery',
    desc: 'Personalized recovery programs to break free from dependency.',
    tag: 'Restorative Liberty',
    color: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Heart,
    title: 'Mental Health Support',
    desc: 'Empathetic and professional care for holistic mental resilience.',
    tag: 'Emotional Restoration',
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: Globe,
    title: 'Community Outreach',
    desc: 'Bringing essential services and support directly to neighborhoods.',
    tag: 'Global Engagement',
    color: 'bg-rose-500/10',
    iconColor: 'text-rose-600',
  },
]

export default function OurWork() {
  const sectionRef = useReveal()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % newImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % newImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + newImages.length) % newImages.length)

  return (
    <div ref={sectionRef}>
      {/* ════════ PAGE HERO ════════ */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services.png" 
            alt="Impact" 
            className="w-full h-full object-cover opacity-40 filter saturate-[1.2] brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 mb-8 animate-in shadow-xl text-brand-primary text-sm font-bold tracking-widest uppercase">
             <img src="/images/logo_cq.png" alt="Logo" className="w-5 h-5 object-contain brightness-0 invert opacity-80" />
             The Work of Impact
          </span>
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 animate-in leading-tight tracking-tight">
             Impact of <br />
             <span className="text-brand-primary italic decoration-brand-primary decoration-8 underline underline-offset-[16px]">Transformation.</span>
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto animate-in leading-relaxed font-medium">
             Driven by direct community engagement, our programs are built to restore hope and provide lasting results.
          </p>
        </div>
      </section>

      {/* ════════ PROGRAMS ════════ */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-3xl mx-auto mb-24">
             <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block mb-8">Pillars of Impact</span>
             <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold mb-12 tracking-tight leading-tight">Restorative <span className="text-brand-primary italic">Programs.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {programs.map((p, i) => (
              <div key={p.title} className="reveal group card-global border-l-[12px] border-l-slate-100 hover:border-l-brand-primary transition-all duration-700 flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl hover:scale-[1.02]" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className={`w-20 h-20 shrink-0 ${p.bg || 'bg-slate-50'} ${p.iconColor} rounded-[2rem] flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500`}>
                    <p.icon size={40} strokeWidth={2.5} />
                 </div>
                 <div className="space-y-4 flex-1">
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline decoration-brand-primary decoration-4 transition-all group-hover:decoration-slate-900">{p.tag}</span>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight italic">{p.title}</h3>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed italic opacity-85 underline decoration-slate-100 decoration-4 group-hover:decoration-slate-200 transition-all">{p.desc}</p>
                    <div className="pt-6">
                       <Link to="/get-involved" className="text-brand-primary font-black text-sm tracking-widest uppercase hover:underline flex items-center gap-2 group/btn">
                          Join the work <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                       </Link>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SUCCESS STORIES BAR ════════ */}
      <section className="py-40 bg-slate-50 border-y border-slate-100 overflow-hidden relative group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-12 reveal text-center mb-16">
               <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block mb-8">Our Impact Goal</span>
               <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold tracking-tight">Experience our <span className="text-brand-primary italic scale-150-hover">restorative force.</span></h2>
            </div>
            
            <div className="lg:col-span-5 reveal">
                <div className="relative rounded-[5rem] overflow-hidden shadow-2xl skew-y-3 transform hover:skew-y-0 transition-all duration-700 aspect-[3/4]">
                   <img src="/images/hero.png" alt="Transformation" className="w-full h-full object-cover filter saturate-[1.3] brightness-[0.8] scale-110" />
                   <div className="absolute bottom-16 left-12 right-12 text-white p-12 bg-black/30 backdrop-blur-md rounded-[3rem] border border-white/20">
                      <Star size={48} className="text-brand-primary mb-8" fill="currentColor" strokeWidth={0} />
                      <p className="text-3xl font-black italic leading-[1.2] mb-8">"Every individual matters. Building a stronger, healthier community starts here."</p>
                      <span className="text-brand-primary text-[10px] tracking-widest uppercase font-black">— Foundation Board</span>
                   </div>
                </div>
            </div>
            
            <div className="lg:col-span-7 reveal space-y-16 lg:pl-12">
               {[
                  { title: 'Restoring Hope & Dignity', info: 'Primary focus for all of our international engagements.' },
                  { title: 'Positive Change Agent', desc: 'Building victory and rediscovered purpose.', color: 'text-brand-primary' },
                  { title: 'Service to Humanity', icon: Globe },
               ].map((item, i) => (
                  <div key={item.title} className="reveal flex gap-8 items-start group border-b border-slate-200 pb-12" style={{ animationDelay: `${i * 0.15}s` }}>
                     <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                        <Award className="text-brand-primary" size={28} strokeWidth={2.5} />
                     </div>
                     <div>
                        <h4 className="text-3xl font-black text-slate-900 mb-2 italic group-hover:text-brand-primary transition-all leading-tight">{item.title}</h4>
                        <p className="text-slate-500 text-lg font-medium opacity-80 italic">{item.info || item.desc || "Guided by love and faith."}</p>
                     </div>
                  </div>
               ))}
               <div className="pt-8">
                  <Link to="/donate" className="btn-primary inline-flex rounded-full text-xl px-16 py-6 font-black italic">
                     Fuel this impact
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* ════════ IMPACT IN ACTION CAROUSEL ════════ */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-3xl mx-auto mb-20">
             <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block mb-8">Impact in Action</span>
             <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold mb-12 tracking-tight leading-tight">Moments of <span className="text-brand-primary italic">Transformation.</span></h2>
          </div>

          <div className="reveal relative group max-w-5xl mx-auto">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative">
               {newImages.map((img, i) => (
                 <div
                   key={i}
                   className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                     i === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                   }`}
                 >
                   <img src={img} alt={`Transformation ${i + 1}`} className="w-full h-full object-cover object-top" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 </div>
               ))}
               
               {/* Overlay Info */}
               <div className="absolute bottom-12 left-12 right-12 text-white z-10">
                  <span className="bg-brand-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 inline-block">Direct Community Service</span>
                  <p className="text-2xl md:text-4xl font-black italic">Building victory, rediscovering purpose.</p>
               </div>
            </div>

            {/* Controls */}
            <button
               onClick={prevImage}
               className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all z-20"
            >
               <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button
               onClick={nextImage}
               className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all z-20"
            >
               <ChevronRight size={24} strokeWidth={3} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-12">
               {newImages.map((_, i) => (
                 <button
                   key={i}
                   onClick={() => setCurrentImage(i)}
                   className={`h-2 rounded-full transition-all duration-500 ${
                     i === currentImage ? 'w-12 bg-brand-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
                   }`}
                 />
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
