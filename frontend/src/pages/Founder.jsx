import { Link } from 'react-router-dom'
import { Heart, Globe, Zap, HandHeart, Star, Shield, Award, CheckCircle, ArrowRight, Linkedin, Twitter, Mail, Instagram, Facebook } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Founder() {
  const sectionRef = useReveal()

  return (
    <div ref={sectionRef} className="bg-white">
      {/* ════════ FOUNDER HERO ════════ */}
      <section className="relative pt-32 pb-24 bg-brand-secondary overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.png" 
            alt="Dornubari Cletus Firima" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/80 via-transparent to-brand-secondary" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 text-brand-primary text-xs font-bold tracking-widest uppercase">
            Our Leadership
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-in leading-tight tracking-tight">
            About the <span className="text-brand-primary">Founder</span>
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-xl max-w-4xl mx-auto animate-in leading-relaxed">
            Dornubari Cletus Firima is the Founder and Chief Executive of Community Witnesses CIC, a UK‑based social enterprise established to address the interconnected challenges of homelessness, addiction, and mental health within vulnerable populations.
          </p>
        </div>
      </section>

      {/* ════════ BIOGRAPHY & PORTRAIT ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait Side */}
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-200">
                <div className="aspect-[4/5] w-full bg-slate-100 relative">
                  <img 
                    src="/images/founder.jpeg" 
                    alt="Dornubari Cletus Firima" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary" />
                </div>
                
                {/* Social Links */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <a href="https://www.instagram.com/ukcomwit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-brand-secondary hover:text-brand-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/UKcommunitywitnesses" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-brand-secondary hover:text-brand-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.tiktok.com/@ukcomwit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-brand-secondary hover:text-brand-primary transition-colors">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
              
              {/* Founder's Motto / Philosophy Summary */}
              <div className="mt-8 p-8 bg-slate-50 rounded-2xl border-l-4 border-brand-primary shadow-sm">
                <p className="text-slate-700 italic font-medium leading-relaxed">
                  "Recovery is possible when people receive the right combination of support, structure, and compassion."
                </p>
                <p className="mt-4 text-brand-secondary font-bold text-sm">— Dornubari C. Firima</p>
              </div>
            </div>
            
            {/* Biography Side */}
            <div className="reveal space-y-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-brand-secondary font-bold mb-4">Dornubari C. Firima</h2>
                <p className="text-brand-primary font-semibold text-lg">Founder & Chief Executive, Community Witnesses CIC</p>
              </div>

              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  His leadership is grounded in a multidisciplinary background spanning public health, pharmacy, theology, and community development.
                </p>
              </div>

              {/* Education & Credentials */}
              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-brand-secondary font-bold text-xl mb-4">Professional and Academic Background</h3>
                <p className="text-slate-600 mb-6">Dornubari brings a strong academic foundation to his work, holding:</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    { title: "Master of Public Health (MPH)", sub: "Birmingham City University", icon: Globe },
                    { title: "Bachelor's Degree in Pharmacy", sub: "B.Pharm, Pharm. D", icon: Zap },
                    { title: "Master's Degree in Theology", sub: "Pastoral Ministry", icon: HandHeart },
                    { title: "Ordained Minister", sub: "Within Pentecostal Denomination", icon: Star }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:bg-slate-50 hover:border-slate-200 transition-all group shadow-sm bg-white">
                      <div className="w-10 h-10 shrink-0 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-brand-secondary text-sm font-bold">{item.title}</h4>
                        <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  This combination of scientific, public health, and pastoral training enables him to design and lead interventions that are both evidence‑based and deeply person‑centred. His expertise spans addiction recovery, health behaviour change, community engagement, and holistic support models for individuals experiencing complex needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FOUNDING PHILOSOPHY ════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto reveal">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-secondary font-bold mb-6">Founding Philosophy</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mb-8" />
            <p className="text-slate-600 text-lg leading-relaxed">
              Community Witnesses CIC is built on a modernised adaptation of the historic Salvation Army ethos, expressed through four organisational pillars:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "Passion (Love)", desc: "Upholding dignity, compassion, and unconditional positive regard for every individual.", icon: Heart },
              { title: "Power (Freedom)", desc: "Supporting people to break free from addiction, trauma, and systemic barriers.", icon: Shield },
              { title: "Salvation (Regeneration)", desc: "Facilitating long‑term personal change through structured, holistic pathways.", icon: Zap },
              { title: "Service (Witness)", desc: "Demonstrating commitment through consistent, practical, community‑based action.", icon: HandHeart }
            ].map((pillar, i) => (
              <div key={i} className="reveal card-global flex flex-col items-center justify-center text-center p-8 bg-white hover:border-brand-primary border-t-4 border-transparent transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)]" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-secondary mb-4">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-4xl mx-auto reveal">
            <p className="text-slate-600 md:text-lg font-medium italic">
              "These pillars guide the CIC’s operational model, programme design, and partnership strategy, ensuring that services remain both mission‑driven and outcome‑focused."
            </p>
          </div>
        </div>
      </section>

      {/* ════════ IMPACT & COMMITMENT ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Commitment to Addressing Addiction and Vulnerability */}
          <div className="reveal space-y-8">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-brand-secondary border border-slate-100 shadow-sm">
                 <Shield size={26} />
               </div>
               <h3 className="text-2xl font-bold text-brand-secondary leading-tight">Commitment to Addressing Addiction & Vulnerability</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              For many years, Dornubari has been driven by a deep commitment to supporting individuals affected by addiction. His work is informed by both professional experience and personal conviction that recovery is possible when people receive the right combination of support, structure, and compassion.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-bold text-brand-secondary mb-6 text-lg">His contributions include:</h4>
              <ul className="space-y-5">
                {[
                  "Developing community‑based frameworks for addiction recovery",
                  "Designing integrated support pathways for homelessness and mental health",
                  "Building partnerships across statutory, voluntary, and faith‑based sectors",
                  "Advocating for trauma‑informed, person‑centred approaches",
                  "Supporting individuals to rebuild stable, meaningful, and independent lives"
                ].map((txt, i) => (
                  <li key={i} className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-xl">
                    <CheckCircle size={20} className="text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-slate-600">{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Leadership and Impact */}
          <div className="reveal space-y-8 bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                 <Award size={26} />
               </div>
               <h3 className="text-2xl font-bold text-brand-secondary leading-tight">Leadership and Impact</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              As founder, Dornubari provides strategic direction, programme oversight, and community leadership for Community Witnesses CIC. His approach combines:
            </p>
            <ul className="space-y-4 pt-2 mb-8">
              {[
                "Evidence‑based public health practice",
                "Professional healthcare knowledge",
                "Pastoral care and spiritual insight",
                "A strong commitment to social justice and community transformation"
              ].map((txt, i) => (
                <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{txt}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 text-[15px] leading-relaxed font-medium italic border-l-4 border-brand-primary pl-6">
              Under his leadership, Community Witnesses CIC aims to become a key contributor to local and regional efforts to reduce homelessness, improve mental health outcomes, and support individuals on the journey to recovery from addiction.
            </p>
          </div>

        </div>
      </section>

      {/* ════════ FOUNDER CALL TO ACTION ════════ */}
      <section className="py-24 bg-brand-secondary border-t border-slate-100 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">Join the Mission</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Be part of the community change driven by Dornubari's vision for transformation and restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary">
              Volunteer Now
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-full hover:bg-white hover:text-brand-secondary transition-all">
              Contact Our Founder
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
