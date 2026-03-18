import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Globe, Shield, CreditCard, CheckCircle, ArrowRight, Star, Award, TrendingUp } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const donationAmounts = [25, 50, 100, 250, 500, 1000]

export default function Donate() {
  const sectionRef = useReveal()
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [submitted, setSubmitted] = useState(false)

  const handleDonate = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const activeAmount = customAmount ? parseInt(customAmount) : selectedAmount

  return (
    <div ref={sectionRef}>
      {/* ════════ PAGE HERO ════════ */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Donate" 
            className="w-full h-full object-cover opacity-40 filter saturate-[1.2] brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 mb-8 animate-in shadow-xl text-brand-primary text-sm font-bold tracking-widest uppercase">
             Fuel the Restoration
          </span>
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 animate-in leading-tight tracking-tight">
             Give with <span className="text-brand-primary underline decoration-brand-primary/40 decoration-4 underline-offset-[16px]">Impact.</span> <br />
             Restore a life.
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto animate-in leading-relaxed font-medium">
             Your support provides lasting freedom for those at risk or experiencing hardship. Every contribution makes a difference.
          </p>
        </div>
      </section>

      {/* ════════ DONATION FORM ════════ */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          {/* Info Side */}
          <div className="reveal space-y-16 lg:sticky lg:top-48">
            <h2 className="font-heading text-4xl md:text-6xl text-slate-900 font-extrabold leading-tight">
               Your support <span className="text-brand-primary italic">restores hope.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              We envision a community where individuals are treated with love, respect, and dignity. Your gift enables us to provide the resources needed for complete freedom.
            </p>
            
            <div className="space-y-10 pt-8">
               {[
                 { icon: Globe, title: 'Global Transparency', desc: 'Secure and transparent processing for every gift.', color: 'text-blue-500', bg: 'bg-blue-50' },
                 { icon: Award, title: 'Impact Verified', desc: 'Every penny goes directly to community restoration.', color: 'text-amber-500', bg: 'bg-amber-50' },
                 { icon: TrendingUp, title: 'Direct Growth', desc: 'Providing the fuel for individuals to gain victory.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
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
          </div>

          {/* Form Side */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-muted p-16 text-center rounded-[3rem] border border-brand-primary/20 shadow-2xl">
                <CheckCircle size={80} className="text-brand-primary mx-auto mb-8" strokeWidth={2.5} fill="currentColor" fillOpacity={0.1} />
                <h2 className="font-heading text-4xl text-slate-900 mb-6 font-black italic">Gratitude.</h2>
                <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed opacity-80">
                  Your generous gift of <strong>£{activeAmount}</strong> has been received with immense gratitude. We are restoring hope together.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-brand-primary/20">
                   Return to Community <ArrowRight size={20} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleDonate} className="bg-white border border-slate-100 p-12 md:p-16 rounded-[4rem] shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
                <h3 className="font-heading text-4xl text-slate-900 mb-12 font-black italic">Make a Contribution</h3>

                {/* Donation Type Header */}
                <div className="flex bg-slate-100 p-2 rounded-2xl mb-12">
                  {['one-time', 'recurring'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setDonationType(type)}
                      className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 ${
                        donationType === type ? 'bg-white text-brand-primary shadow-xl' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                      className={`py-8 rounded-2xl border-2 transition-all duration-300 font-heading text-3xl font-black italic ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-brand-primary text-white border-brand-primary shadow-xl shadow-brand-primary/20'
                          : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-brand-primary/20 hover:text-brand-primary'
                      }`}
                    >
                      £{amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-12">
                   <input
                     type="number"
                     placeholder="Customize Amount (£)"
                     value={customAmount}
                     onChange={(e) => setCustomAmount(e.target.value)}
                     className="w-full bg-slate-50 border-2 border-slate-50 py-6 px-8 rounded-2xl text-2xl font-black focus:outline-none focus:border-brand-primary transition-all placeholder:text-slate-300 italic"
                   />
                </div>

                {/* Submit Button Luxe */}
                <button
                  type="submit"
                  className="w-full py-8 bg-slate-900 text-white font-heading text-3xl font-black italic hover:bg-brand-primary transition-all duration-500 flex items-center justify-center gap-6 rounded-3xl shadow-2xl group active:scale-95"
                >
                  Process Donation
                  <CreditCard className="group-hover:translate-x-2 transition-transform" strokeWidth={2.5} size={32} />
                </button>

                <p className="text-center text-slate-300 text-xs font-bold tracking-widest uppercase mt-12 flex items-center justify-center gap-2">
                   <Shield size={16} /> Secure Encrypted Gateway
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ════════ MISSION TESTIMONY ════════ */}
      <section className="py-40 bg-slate-50 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <Heart className="text-brand-primary mx-auto mb-12" strokeWidth={3} size={64} fill="white" />
            <h2 className="font-heading text-5xl md:text-8xl text-slate-900 font-black italic mb-12 tracking-tight">Love is the solution.</h2>
            <p className="text-slate-500 text-xl md:text-3xl font-medium tracking-wide italic leading-relaxed mb-20">"We are committed to demonstrating genuine love without judgement or condemnation. Everyone deserves to be treated with honour and worth."</p>
            <div className="flex flex-wrap gap-8 justify-center">
               <Link to="/about" className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 shadow-xl hover:bg-brand-primary hover:text-white transition-all">
                  Our Core Values
               </Link>
            </div>
         </div>
      </section>
    </div>
  )
}
