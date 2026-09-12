import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Founder', path: '/founder' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Project', path: '/project' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100' 
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <img 
            src="/images/communitywitnesses_logo.png" 
            alt="Community Witnesses Logo" 
            className={`object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'w-11 h-11' : 'w-13 h-13'}`}
          />
          <div className="flex flex-col">
            <span className={`font-heading font-black uppercase tracking-tight text-slate-900 leading-none whitespace-nowrap transition-all duration-500 ${scrolled ? 'text-sm lg:text-base' : 'text-base lg:text-lg'}`}>
              Community Witnesses
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-2">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] rounded-lg transition-all duration-200 ${
                  location.pathname === link.path 
                    ? 'text-brand-primary bg-brand-primary/8' 
                    : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
          <Link
            to="/donate"
            id="nav-donate-btn"
            className="ml-3 px-5 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-full hover:bg-brand-primary-dark hover:scale-105 active:scale-95 transition-all shadow-md shadow-brand-primary/20 whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-slate-900 focus:outline-none z-[110] p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-2xl min-h-screen flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
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
          className={`mt-4 px-12 py-4 bg-brand-primary text-white font-bold text-xl rounded-full shadow-lg shadow-brand-primary/30 transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? `${navLinks.length * 80}ms` : '0ms' }}
        >
          Support Our Mission
        </Link>
      </div>
    </nav>
  )
}
