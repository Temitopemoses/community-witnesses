import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Founder', path: '/founder' },
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

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-100' 
          : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Logo - Modern Global Standard */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/communitywitnesses_logo.png" 
            alt="Community Witnesses Logo" 
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
           <div className="flex flex-col">
            <span className={`font-heading font-black uppercase tracking-tight text-slate-900 leading-none whitespace-nowrap transition-all duration-500 ${scrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
              Community Witnesses
            </span>
          </div>
        </Link>

        {/* Desktop Links - Optimized for high-density navigation */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          <div className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  location.pathname === link.path ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/donate"
            id="nav-donate-btn"
            className="px-5 py-2 lg:px-6 lg:py-2.5 bg-brand-primary text-white text-[10px] lg:text-sm font-bold rounded-full hover:bg-brand-primary-dark hover:scale-105 active:scale-95 transition-all shadow-md shadow-brand-primary/20"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-900 focus:outline-none z-[110]"
        >
          {isOpen ? <X strokeWidth={2.5} /> : <Menu strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-2xl min-h-screen flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            style={{ transitionDelay: isOpen ? `${i * 100}ms` : '0ms' }}
            className={`text-2xl font-bold transition-all duration-300 ${
              location.pathname === link.path 
                ? 'text-brand-primary scale-110' 
                : 'text-slate-900 hover:text-brand-primary'
            } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/donate"
          className={`mt-6 px-12 py-4 bg-brand-primary text-white font-bold text-xl rounded-full shadow-lg shadow-brand-primary/30 transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? `${navLinks.length * 100}ms` : '0ms' }}
        >
          Support Our Mission
        </Link>
      </div>
    </nav>
  )
}
