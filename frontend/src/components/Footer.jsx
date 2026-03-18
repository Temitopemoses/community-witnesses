import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Send, Award, Shield } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Our Mission',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Work', path: '/our-work' },
        { name: 'Philosophy', path: '/about' },
        { name: 'History', path: '/about' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Volunteer', path: '/get-involved' },
        { name: 'Donate Now', path: '/donate' },
        { name: 'Partnerships', path: '/contact' },
        { name: 'Newsletter', path: '/get-involved' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Media Kit', path: '/' },
        { name: 'Annual Report', path: '/' },
        { name: 'Safety & Trust', path: '/' },
        { name: 'Privacy Policy', path: '/' },
      ],
    },
  ]

  return (
    <footer id="main-footer" className="bg-slate-900 pt-32 pb-16 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[200px] -mr-96 -mt-96" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Footer */}
        <div className="grid lg:grid-cols-12 gap-24 border-b border-white/5 pb-24 mb-24 items-start">
           <div className="lg:col-span-5 space-y-12">
              <Link to="/" className="flex items-center gap-4 group">
                 <img 
                   src="/images/logo_cq.png" 
                   alt="Community Witnesses Logo" 
                   className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110 brightness-0 invert"
                 />
                 <div className="flex flex-col">
                    <span className="font-heading text-3xl font-black uppercase tracking-tight text-white leading-none">Community Witnesses</span>
                    <span className="text-[11px] uppercase tracking-[0.4em] text-brand-primary font-black mt-1">International Standard</span>
                 </div>
              </Link>
              <p className="text-slate-400 text-lg md:text-xl font-medium italic leading-relaxed max-w-md">
                 "Restoring hope and dignity through compassion, faith-inspired action, and direct community service."
              </p>
              <div className="flex gap-4">
                 {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-brand-primary hover:text-white hover:scale-110 transition-all duration-300">
                       <Icon size={20} strokeWidth={2.5} />
                    </a>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7 grid md:grid-cols-3 gap-16 items-start">
              {footerLinks.map((column) => (
                <div key={column.title} className="space-y-10 group">
                  <h3 className="font-heading text-xl font-black text-white italic underline decoration-brand-primary decoration-4 group-hover:decoration-white transition-all">{column.title}</h3>
                  <ul className="space-y-6">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.path} className="text-slate-400 font-bold text-sm tracking-widest uppercase hover:text-brand-primary transition-colors flex items-center gap-2">
                           {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </div>

        {/* Global Impact CTA in Footer */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-center">
           <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-[2.5rem] flex items-center justify-center shrink-0 border border-brand-primary/20">
                 <Globe size={40} className="text-brand-primary" strokeWidth={2.5} />
              </div>
              <div>
                 <h4 className="font-heading text-3xl font-black text-white mb-2 italic">Global Accountability & Trust</h4>
                 <p className="text-slate-400 text-lg font-medium italic opacity-85">"We say what we mean and stand by our words. We are accountable to the communities we serve."</p>
              </div>
           </div>
           <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Link to="/donate" className="px-16 py-6 bg-brand-primary text-white font-black text-2xl rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl flex items-center gap-4 group">
                 Donate Now
                 <Award size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
           </div>
        </div>

        {/* Final Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-8">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-black tracking-widest bg-slate-800/50 px-6 py-3 rounded-full border border-white/5">
                 <Shield size={16} fill="currentColor" fillOpacity={0.1} /> Secure Global Processing
              </div>
           </div>
           <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">
              © {currentYear} Community Witnesses. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  )
}
