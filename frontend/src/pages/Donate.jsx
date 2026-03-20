import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Globe, Shield, CreditCard, CheckCircle, ArrowRight, Star, Award, TrendingUp, AlertCircle, Loader2 } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const donationAmounts = [25, 50, 100, 250, 500, 1000]

export default function Donate() {
  const sectionRef = useReveal()
  const location = useLocation()
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'canceled' | null

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    if (query.get('success')) {
      setStatus('success')
    }
    if (query.get('canceled')) {
      setStatus('canceled')
    }
  }, [location])

  const handleDonate = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount

    try {
      // Assuming backend runs on localhost:8000
      const response = await fetch('http://localhost:8000/api/donations/create-checkout-session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          donation_type: donationType,
        }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Failed to create checkout session', data)
        setLoading(false)
        alert('Could not initiate payment. Please ensure the backend is running.')
      }
    } catch (error) {
      console.error('Error initiating donation:', error)
      setLoading(false)
      alert('Error connecting to payment server. Please try again later.')
    }
  }

  const activeAmount = customAmount ? parseFloat(customAmount) : selectedAmount

  return (
    <div ref={sectionRef}>
      {/* ════════ PAGE HERO ════════ */}
      <section className="relative pt-40 pb-24 bg-brand-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Donate"
            className="w-full h-full object-cover opacity-20 filter saturate-[1.2] brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/80 to-brand-secondary" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">
            Support Our Mission
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Give with <span className="text-brand-primary">Impact</span>
          </h1>
          <p className="font-body text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your generous contributions provide the essential resources needed to restore hope
            and dignity to those facing hardship in our community.
          </p>
        </div>
      </section>

      {/* ════════ DONATION CONTENT ════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">

          {/* Info Side (Col-5) */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 reveal">
            <div>
              <h2 className="font-heading text-4xl text-slate-900 font-bold mb-6 leading-tight">
                Your support <br /> <span className="text-brand-primary italic">restores hope.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Community Witnesses is dedicated to providing lasting freedom for those at risk.
                100% of your donation goes directly towards our community outreach and support programs.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Globe, title: 'Global Transparency', desc: 'We adhere to the highest standards of financial accountability and transparency.', color: 'text-brand-primary', bg: 'bg-brand-primary/5' },
                { icon: Shield, title: 'Secure Processing', desc: 'Your payment information is encrypted and handled through secure global gateways.', color: 'text-brand-primary', bg: 'bg-brand-primary/5' },
                { icon: Star, title: 'Life-Changing Impact', desc: 'See how your contributions directly transform lives in our impact reports.', color: 'text-brand-primary', bg: 'bg-brand-primary/5' },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className={`w-12 h-12 shrink-0 ${item.bg} ${item.color} rounded-xl flex items-center justify-center border border-brand-primary/10`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-lg font-bold text-slate-900 mb-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-4 text-brand-primary">
                <Heart size={32} />
                <h4 className="font-heading text-xl font-bold text-slate-900">Charity Overview</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                "We rely on the power of God for transformation and restoration. Your gift is an investment in a brighter future for every individual."
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest uppercase">
                Registered Community Interest Company
              </div>
            </div>
          </div>

          {/* Form Side (Col-7) */}
          <div className="lg:col-span-7 reveal">
            {status === 'success' ? (
              <div className="bg-white p-12 lg:p-16 text-center rounded-3xl border border-slate-200 shadow-xl">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                  <CheckCircle size={40} />
                </div>
                <h2 className="font-heading text-3xl text-slate-900 mb-4 font-bold">Thank You</h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  Your generous gift has been received.
                  Together, we are making a lasting difference in our community.
                </p>
                <Link to="/" className="btn-primary inline-block">
                  Return Home
                </Link>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl">
                {status === 'canceled' && (
                  <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-4 text-amber-700">
                    <AlertCircle size={24} />
                    <p className="text-sm font-medium">The payment process was canceled. Please try again or contact us if you need help.</p>
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="font-heading text-3xl text-slate-900 font-bold mb-2">Make a Contribution</h3>
                  <p className="text-slate-500">Every contribution helps us reach more people in need.</p>
                </div>

                <form onSubmit={handleDonate} className="space-y-10">
                  {/* Donation Type */}
                  <div className="flex p-1 bg-slate-100 rounded-xl">
                    {['one-time', 'monthly'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setDonationType(type)}
                        className={`flex-1 py-3 text-sm font-bold tracking-widest uppercase rounded-lg transition-all ${donationType === type
                            ? 'bg-white text-brand-primary shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {/* Amount Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                        className={`py-6 rounded-xl border-2 transition-all font-heading text-2xl font-bold ${selectedAmount === amount && !customAmount
                            ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 scale-[1.02]'
                            : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-brand-primary/20 hover:text-brand-primary'
                          }`}
                      >
                        £{amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Or enter a custom amount</label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">£</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 py-4 pl-12 pr-5 rounded-xl text-2xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Payment Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary flex items-center justify-center gap-4 py-5 text-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={24} />
                          <span>Initiating Secure Gateway...</span>
                        </>
                      ) : (
                        <>
                          <span>Donate £{activeAmount}</span>
                          <CreditCard size={24} />
                        </>
                      )}
                    </button>
                    <div className="mt-8 flex items-center justify-center gap-6 text-slate-300">
                      <Shield size={24} className="opacity-50" />
                      <div className="h-6 w-px bg-slate-200" />
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Secure Stripe Gateway</span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ════════ TESTIMONIAL ════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 block">Our Vision in Action</span>
          <p className="text-slate-800 text-2xl md:text-3xl font-medium leading-relaxed mb-12 italic">
            "We envision a community where individuals at risk of homelessness and addiction are treated with love and respect, and are fully supported towards lasting freedom."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-slate-200" />
            <Heart className="text-brand-primary" fill="currentColor" size={24} />
            <div className="w-12 h-px bg-slate-200" />
          </div>
        </div>
      </section>
    </div>
  )
}
