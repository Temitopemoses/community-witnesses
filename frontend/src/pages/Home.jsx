import { Link } from 'react-router-dom'
import {
  Heart,
  Users,
  Shield,
  Star,
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
} from 'lucide-react'
import useReveal from '../hooks/useReveal'

const stats = [
  { icon: Heart, number: '15k+', label: 'Lives Transformed', color: 'text-brand-primary' },
  { icon: Users, number: '500+', label: 'Volunteers Globally', color: 'text-brand-secondary' },
  { icon: Globe, number: '20+', label: 'Communities Served', color: 'text-blue-600' },
  { icon: Shield, number: '24/7', label: 'Constant Support', color: 'text-emerald-600' },
]

const pillars = [
  {
    title: 'Homelessness',
    desc: 'Paths to shelter and permanent housing.',
    icon: Award,
    color: 'bg-brand-primary/10',
    iconColor: 'text-brand-primary',
  },
  {
    title: 'Recovery',
    desc: 'Compassionate freedom from addiction.',
    icon: TrendingUp,
    color: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Mental Health',
    desc: 'Holistic emotional and mental care.',
    icon: Heart,
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Outreach',
    desc: 'Engaging our local communities directly.',
    icon: Globe,
    color: 'bg-orange-500/10',
    iconColor: 'text-orange-600',
  },
]

export default function Home() {
  const sectionRef = useReveal()

  return (
    <div ref={sectionRef}>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-48 overflow-hidden bg-slate-900">
        {/* Vibrant Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Hope" 
            className="w-full h-full object-cover opacity-60 filter saturate-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/60" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-in shadow-xl">
             <img src="/images/logo_cq.png" alt="Community Witnesses Logo" className="w-6 h-6 object-contain brightness-0 invert" />
             <span className="text-white text-sm font-bold tracking-widest uppercase">Community Witnesses Worldwide</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-extrabold leading-[1.05] tracking-tight mb-8 animate-in">
             Restoring <span className="text-brand-primary underline decoration-brand-primary/30 decoration-[8px] underline-offset-[12px]">Hope</span> <br />
             Building <span className="text-white">Dignity.</span>
          </h1>
          
          <p className="font-body text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 animate-in leading-relaxed font-medium opacity-90" style={{ animationDelay: '0.2s' }}>
             An international organization dedicated to providing lasting freedom and restoration to communities facing homelessness, addiction, and mental health challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/donate" className="btn-primary flex items-center gap-3 text-lg px-12 py-5 rounded-full shadow-2xl">
              Donate to Impact
              <ArrowRight size={24} />
            </Link>
            <Link to="/get-involved" className="px-12 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white hover:text-slate-900 transition-all duration-300">
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ IMPACT BAR ════════ */}
      <section className="bg-white py-16 border-b border-slate-100 shadow-sm relative z-20 lg:mx-20 rounded-2xl shadow-2xl -translate-y-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="reveal text-center flex flex-col items-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`mb-4 ${stat.color} bg-slate-50 p-4 rounded-2xl`}>
                   <stat.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ GLOBAL VISION ════════ */}
      <section className="py-40 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal space-y-10 order-2 lg:order-1">
            <span className="text-brand-primary text-sm font-black uppercase tracking-[0.3em] block">Our Global Philosophy</span>
            <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-black leading-tight">
               Every community deserves <br />
               a brighter <span className="text-brand-primary italic">future.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-80">
              Community Witnesses envisions a world where individuals at risk are treated with love, respect, and dignity. We are a community-led force driving positive change through direct action and faith-inspired advocacy.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/about" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand-primary hover:scale-[1.05] transition-all shadow-xl shadow-slate-900/20">
                 Read Our History
              </Link>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
               <img src="/images/about.png" alt="Impact" className="w-full h-full object-cover filter contrast-125 saturate-[1.1]" />
               <div className="absolute inset-0 bg-brand-primary/10 border-8 border-white rounded-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CORE PILLARS ════════ */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-3xl mx-auto mb-24">
            <span className="text-orange-500 text-sm font-black uppercase tracking-[0.3em] block mb-8">What We Do</span>
            <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-black mb-12">Building pillars of <span className="text-brand-primary underline underline-offset-8">restoration.</span></h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed opacity-80">
              We provide comprehensive support services that empower individuals to gain victory, rediscover themselves, and create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pill, i) => (
              <div key={pill.title} className="reveal group card-global cursor-pointer border-t-[8px] border-t-brand-primary" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className={`w-16 h-16 ${pill.color} ${pill.iconColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <pill.icon size={32} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-850 mb-4">{pill.title}</h3>
                 <p className="text-slate-500 text-base font-medium leading-relaxed mb-6 italic">{pill.desc}</p>
                 <Link to="/our-work" className="text-brand-primary font-bold text-sm tracking-widest uppercase hover:underline">Explore Program</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ JOIN THE FORCE ════════ */}
      <section className="py-40 relative group mb-32">
         <div className="absolute inset-x-20 inset-y-0 bg-brand-primary rounded-[4rem] group-hover:inset-x-0 transition-all duration-700 overflow-hidden shadow-2xl shadow-brand-primary/30">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-black/10 rounded-full blur-[100px]" />
            
            <div className="relative h-full flex flex-col items-center justify-center px-6 text-center text-white py-24">
               <h2 className="font-heading text-5xl md:text-8xl font-black text-white leading-tight mb-12">
                  Be a source <br /> of <span className="text-brand-secondary underline underline-offset-[20px] decoration-white">hope.</span>
               </h2>
               <p className="text-white/90 text-xl md:text-3xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic">
                  Join a global community of change agents dedicated to restoring dignity and providing restoration.
               </p>
               <div className="flex flex-col sm:flex-row gap-8">
                  <Link to="/get-involved" className="px-16 py-6 bg-slate-900 text-white font-black text-2xl rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl">
                     Get Involved
                  </Link>
                  <Link to="/donate" className="px-16 py-6 bg-white text-brand-primary font-black text-2xl rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-2xl">
                     Donate Now
                  </Link>
               </div>
            </div>
         </div>
         <div className="h-[200px]" />
      </section>
    </div>
  )
}
