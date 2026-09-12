import React from 'react'
import { Heart, Shield, MapPin, Users, CheckCircle, Mail, HandHeart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920" 
            alt="Community Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark to-brand-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm border border-white/30 shadow-lg">
            A Community Witnesses CIC Initiative
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg leading-tight">
            STREETCONNECT <br className="hidden sm:block" /> SWINDON
          </h1>
          <p className="text-2xl md:text-4xl font-semibold tracking-wide opacity-90 drop-shadow-md">
            Contact • Connect • Change
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl">
          <Heart className="w-12 h-12 text-brand-primary" fill="currentColor" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About StreetConnect</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
            StreetConnect is a community outreach project delivered by Community Witnesses CIC to support individuals in Swindon who are facing homelessness, addiction, mental health challenges, or crisis situations.
          </p>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Our team meets people where they are in public spaces, neighbourhoods, and community locations; offering compassionate, practical, and early‑intervention support.
          </p>
          <div className="p-8 md:p-10 bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-3xl border border-brand-primary/20 shadow-xl shadow-brand-primary/5">
            <p className="text-2xl md:text-3xl font-semibold text-brand-primary leading-snug">
              StreetConnect exists to prevent crisis before it escalates, strengthen wellbeing, and connect people to the right help at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Sections */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* What We Do */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <HandHeart className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What We Do</h3>
              </div>
              <p className="text-lg text-slate-600 mb-8 font-medium">StreetConnect provides free, confidential, and non-judgemental support, including:</p>
              <ul className="space-y-5">
                {[
                  'Wellbeing checks',
                  'Crisis support',
                  'Homelessness prevention',
                  'Addiction and substance-misuse early intervention',
                  'Mental health signposting',
                  'Practical help and encouragement',
                  'Pastoral Care',
                  'Connection to local services and community resources'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700">
                    <CheckCircle className="w-7 h-7 text-brand-primary shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-teal-50 rounded-2xl text-teal-600 group-hover:scale-110 group-hover:bg-teal-100 transition-all duration-300">
                  <Users className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Our Approach</h3>
              </div>
              <p className="text-lg text-slate-600 mb-8 font-medium">We believe every person deserves:</p>
              <ul className="space-y-5 mb-10">
                {[
                  'Respect',
                  'Dignity',
                  'Compassion',
                  'Safety',
                  'A chance to be heard'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700">
                    <CheckCircle className="w-7 h-7 text-brand-primary shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
                <p className="text-lg text-slate-700 italic font-medium leading-relaxed">
                  "We focus on contact first, building trust, listening, and offering practical pathways to support."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Safety & Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Safety */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-orange-50 rounded-2xl text-orange-600">
                  <Shield className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Safety & Professional Standards</h3>
              </div>
              <p className="text-xl text-slate-600 mb-8 font-medium">Our outreach team is:</p>
              <ul className="space-y-4 mb-10">
                {['DBS-checked', 'Safeguarding trained', 'Trauma-informed', 'And have other relevant training'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-800 font-semibold text-lg bg-slate-50 hover:bg-slate-100 transition-colors p-5 rounded-2xl border border-slate-200">
                    <Shield className="w-6 h-6 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-block p-6 bg-slate-800 text-white rounded-2xl font-medium shadow-lg">
                Supported by strong governance and policies from Community Witnesses CIC.
              </div>
            </div>

            {/* Locations */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-purple-50 rounded-2xl text-purple-600">
                  <MapPin className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Where We Work</h3>
              </div>
              <p className="text-xl text-slate-600 mb-8 font-medium">StreetConnect operates across Swindon:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Town Centre', 'Bus stations', 'Parks and open spaces', 'Community hubs', 'Local neighbourhoods'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 transition-colors p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <MapPin className="w-6 h-6 text-purple-500 shrink-0" />
                    <span className="font-semibold text-slate-800 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-brand-primary/10 rounded-2xl text-brand-primary font-bold text-lg border border-brand-primary/20 flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                Look out for our StreetConnect banner during outreach sessions.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-primary/30 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Volunteer With Us</h2>
          <p className="text-2xl text-slate-300 mb-16 font-medium">Make a real difference in your community.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Full training', 'Safeguarding guidance', 'DBS checks', 'Flexible volunteering opportunities', 'A supportive team environment'].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 flex items-center gap-3 hover:bg-white/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-brand-primary" />
                <span className="font-medium text-slate-100 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-white/10 inline-block w-full max-w-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-10 text-white">Contact us to join the team</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:contact@communitywitnesses.org.uk" className="flex items-center gap-3 px-8 py-5 bg-brand-primary hover:bg-brand-primary-dark transition-all hover:scale-105 rounded-full font-bold text-lg w-full sm:w-auto justify-center shadow-lg shadow-brand-primary/30">
                <Mail className="w-6 h-6" />
                Email Us
              </a>
              <Link to="/volunteer-form" className="flex items-center gap-3 px-8 py-5 bg-white text-slate-900 hover:bg-slate-100 transition-all hover:scale-105 rounded-full font-bold text-lg w-full sm:w-auto justify-center shadow-lg">
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Funded By */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Proudly Funded By</p>
          <div className="flex items-center justify-center gap-10 md:gap-16 mb-8">
            <img 
              src="/images/lottery_community_fund.jpg" 
              alt="National Lottery Community Fund" 
              className="max-h-16 w-auto object-contain"
            />
            <div className="w-px h-12 bg-slate-200"></div>
            <img 
              src="/images/10giving_logo.jpg" 
              alt="10Giving" 
              className="max-h-16 w-auto object-contain"
            />
          </div>
          <p className="text-slate-600 text-xl leading-relaxed font-medium">
            StreetConnect Swindon is proudly funded by the <strong className="text-slate-900 font-bold">National Lottery Community Fund</strong> and <strong className="text-slate-900 font-bold">10Givings</strong>, with additional support from local donations, CIC contributions, and volunteer time.
          </p>
        </div>
      </section>
    </div>
  )
}
