import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-slate-900 shadow-xl py-4 border-b border-white/5' : 'bg-slate-900/95 backdrop-blur-md py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Logo - Modern Global Standard */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/logo_cq.png" 
            alt="Community Witnesses Logo" 
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
          />
          <div className="flex flex-col">
             <span className="font-heading text-lg font-bold uppercase tracking-tight text-white leading-none">
                Community Witnesses
             </span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold">
                Global Outreach
             </span>
          </div>
        </Link>

        {/* Desktop Links - Clean NGO Style */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-semibold transition-all duration-200 ${
                  location.pathname === link.path ? 'text-brand-primary' : 'text-slate-300 hover:text-brand-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/donate"
            id="nav-donate-btn"
            className="px-6 py-2.5 bg-brand-primary text-white text-sm font-bold rounded-full hover:bg-brand-secondary hover:scale-105 active:scale-95 transition-all shadow-md shadow-brand-primary/20"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-slate-900 h-screen z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-2xl font-bold transition-all duration-300 ${
              location.pathname === link.path ? 'text-brand-primary scale-110' : 'text-white hover:text-brand-primary'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/donate"
          className="mt-6 px-12 py-4 bg-brand-primary text-white font-bold text-xl rounded-full shadow-lg shadow-brand-primary/30"
        >
          Support Our Mission
        </Link>
      </div>
    </nav>
  )
}
