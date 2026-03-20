import { Link } from 'react-router-dom'
import { Heart, Sparkles, Star, HandHeart, Shield, Eye, Award, Globe, Users, ArrowRight, Zap, BookOpen, Handshake } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const values = [
  { icon: Heart, name: 'Love', desc: 'Love is the solution to all social challenges, expressed without judgment.', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Sparkles, name: 'Hope', desc: 'With the right support today, a brighter future is possible for everyone.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Star, name: 'Faith', desc: 'Relying on spiritual guidance for complete freedom from life’s struggles.', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: HandHeart, name: 'Respect', desc: 'Creating a safe environment where everyone feels valued and connected.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: Shield, name: 'Dignity', desc: 'Upholding the dignity of every individual, regardless of background.', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: Eye, name: 'Integrity', desc: 'We say what we mean and stand by our words with complete honesty.', color: 'text-slate-500', bg: 'bg-slate-50' },
]
const pillarsData = [
  {
    icon: Heart,
    name: 'Passion',
    subtitle: 'A Heart for the Lost and Broken',
    desc: 'The CIC begins with love; active, sacrificial, and unconditional. This is not sentimental affection but a practical, justice‑driven commitment to people experiencing homelessness, addiction, and mental distress.',
    details: 'This pillar drives us to create safe spaces, build trusting relationships, and offer consistent support that reflects the love of God in action.',
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  },
  {
    icon: Zap,
    name: 'Power',
    subtitle: 'Freedom From the Grip of Addiction',
    desc: 'We recognise that addiction is a complex interplay of trauma, environment, and psychological pain. Through evidence‑based interventions and faith‑centred pathways, we help individuals break free.',
    details: 'This pillar emphasises holistic deliverance—addressing the physical, emotional, and spiritual dimensions of recovery through the transformative power of God.',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    icon: BookOpen,
    name: 'Salvation',
    subtitle: 'A New Life Rooted in God',
    desc: 'Beyond crisis intervention, we are committed to long‑term regeneration. Salvation is the beginning of a renewed life, one marked by purpose, obedience to God, and restored identity.',
    details: 'We provide discipleship opportunities, mentoring, and spiritual guidance, helping individuals rebuild their lives on a foundation of faith, character, and hope.',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: Handshake,
    name: 'Service',
    subtitle: 'Good News Through Action and Word',
    desc: 'Those who have experienced transformation are called to become agents of transformation themselves, serving others and sharing their testimonies.',
    details: 'This reflects a cycle of empowerment where those once supported become supporters, and those once lost become witnesses of God’s grace.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  }
]
export default function About() {
  const sectionRef = useReveal()

  return (
    <div ref={sectionRef}>
      {/* ════════ PAGE HERO ════════ */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.png" 
            alt="About Community Witnesses" 
            className="w-full h-full object-cover opacity-40 filter saturate-[1.2] blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 animate-in leading-tight tracking-tight">
             Led by <span className="text-brand-primary italic">Love.</span> <br />
             Driven by <span className="text-white underline decoration-brand-primary/40 decoration-4">Mission.</span>
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto animate-in leading-relaxed font-medium">
             A community interest company dedicated to restoring hope and dignity to those at risk in our communities.
          </p>
        </div>
      </section>

      {/* ════════ WHO WE ARE (ABOUT US) ════════ */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal space-y-12">
            <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block">Who We Are</span>
            <h2 className="font-heading text-4xl md:text-7xl text-slate-900 font-extrabold leading-tight tracking-tight">
               About <span className="text-brand-primary italic">Us</span>.
            </h2>
            <div className="space-y-8">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                We are a Community Interest Company dedicated to transforming the lives of people facing homelessness, addiction, and mental health challenges. Our work is inspired by the historic mission of the Salvation Army, yet shaped for the realities of today combining practical support, compassionate outreach, and faith‑centred hope.
              </p>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                At the heart of our organisation is a simple conviction: every person is loved by God, created with purpose, and capable of complete restoration. We exist to walk with those who have been pushed to the margins, offering not only immediate help but a pathway to long‑term wholeness.
              </p>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-8 items-center">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                     <Award className="text-brand-primary" size={24} />
                  </div>
                  <span className="text-slate-900 font-bold uppercase tracking-wider text-xs md:text-sm">Faith-Inspired</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
                     <Heart className="text-rose-500" size={24} />
                  </div>
                  <span className="text-slate-900 font-bold uppercase tracking-wider text-xs md:text-sm">Compassionate Love</span>
               </div>
            </div>
          </div>
          <div className="reveal">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl skew-x-1 group">
               <img src="/images/hero.png" alt="Community Witnesses" className="w-full h-[600px] object-cover filter contrast-110 saturate-[1.15] scale-105 group-hover:scale-100 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
               <div className="absolute bottom-12 left-12 right-12 text-white">
                  <p className="text-3xl font-black leading-tight italic">"Every person is loved by God."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ VISION & MISSION ════════ */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
             <div className="relative rounded-[4rem] overflow-hidden shadow-2xl skew-x-[-1deg] group">
                <img src="/images/services.png" alt="Community Witnesses Vision" className="w-full h-[600px] object-cover filter contrast-110 saturate-[1.15] scale-105 group-hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
             </div>
          </div>
          <div className="reveal order-1 lg:order-2 space-y-16">
            <div className="space-y-6">
               <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block">Our Foundation</span>
               <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold leading-tight tracking-tight">
                  Vision & <span className="text-brand-primary">Mission.</span>
               </h2>
            </div>
            
            <div className="space-y-10">
               <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-6 mb-8 text-brand-primary">
                     <Eye size={48} strokeWidth={1.5} />
                     <h3 className="text-3xl font-black text-slate-900 tracking-tight italic">Our Vision</h3>
                  </div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
                    "We envision a community where individuals and families affected by homelessness, addiction, and mental health challenges are treated with love, respect, and dignity—fully supported towards lasting freedom."
                  </p>
               </div>
               <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-6 mb-8 text-amber-500">
                     <Zap size={48} strokeWidth={1.5} />
                     <h3 className="text-3xl font-black text-slate-900 tracking-tight italic">Our Mission</h3>
                  </div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
                    "To see lives restored, families rebuilt, and communities transformed through passion, power, salvation and service."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CORE VALUES ════════ */}
      <section className="py-40 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-3xl mx-auto mb-32">
            <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block mb-8">What We Stand For</span>
            <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold mb-12 tracking-tight leading-tight">Our Guided <span className="text-brand-primary italic">Virtues.</span></h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed font-body">
               We operate with integrity and accountability across all touchpoints, ensuring that our stakeholders and communities feel valued.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={v.name} className="reveal group card-global border-t-[6px] border-t-white hover:border-t-brand-primary transition-all duration-500" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className={`w-16 h-16 ${v.bg} ${v.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100`}>
                    <v.icon size={32} strokeWidth={2.5} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight italic underline decoration-slate-100 decoration-4 group-hover:decoration-brand-primary transition-all">{v.name}</h3>
                 <p className="text-slate-500 text-base font-medium leading-relaxed italic">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ THE FOUR PILLARS ════════ */}
      <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="reveal max-w-4xl mb-32">
            <span className="text-brand-primary text-sm font-black uppercase tracking-[0.4em] block mb-8">Foundational Strategy</span>
            <h2 className="font-heading text-5xl md:text-7xl font-black mb-12 italic leading-tight">The Four <span className="text-brand-primary">Pillars.</span></h2>
            <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed italic opacity-90">
              At its core, Community Witnesses believes that every person carry inherent dignity and the potential for complete restoration. We exist to stand in the gap for those overlooked or trapped in brokenness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {pillarsData.map((p, i) => (
              <div key={p.name} className="reveal group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-12 hover:bg-white/10 transition-all duration-500 shadow-2xl" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex flex-col md:flex-row gap-10">
                  <div className={`w-20 h-20 shrink-0 ${p.bg} ${p.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <p.icon size={40} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl font-black text-white mb-2 tracking-tight italic">{p.name}</h3>
                      <p className="text-brand-primary text-sm font-black uppercase tracking-widest">{p.subtitle}</p>
                    </div>
                    <p className="text-slate-300 text-lg font-medium leading-relaxed italic opacity-85">
                      {p.desc}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                       <p className="text-slate-400 text-sm italic font-medium leading-relaxed">
                         {p.details}
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ LOWER CTA LUXE ════════ */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="reveal space-y-12">
               <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block">Be a Change Agent</span>
               <h2 className="font-heading text-5xl md:text-7xl text-slate-900 font-black leading-tight">Experience the <br /> impact <span className="text-brand-primary italic">together.</span></h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed font-body italic">We provide a safe and inclusive environment where everyone feels valued and connected. Join us today to make a lasting difference.</p>
               <div className="pt-8">
                  <Link to="/get-involved" className="btn-primary group flex items-center gap-3 text-lg px-12 py-5 rounded-full inline-flex">
                     Join the Mission
                     <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
            <div className="reveal">
               <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl">
                  <img src="/images/services.png" alt="Outreach" className="w-full h-full object-cover filter saturate-[1.2] contrast-110" />
                  <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-md p-8 rounded-full border border-white/20">
                     <Users size={40} className="text-white" />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
