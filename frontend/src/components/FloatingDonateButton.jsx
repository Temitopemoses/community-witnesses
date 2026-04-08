import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const FloatingDonateButton = () => {
  const location = useLocation();

  // Hide the floating button if we are already on the donate page
  if (location.pathname === '/donate') {
    return null;
  }

  return (
    <Link
      to="/donate"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-brand-primary text-white font-bold rounded-full shadow-[0_8px_30px_rgb(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden"
    >
      {/* Pulse Effect Background */}
      <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full origin-center"></span>
      
      <Heart className="w-5 h-5 fill-current animate-pulse group-hover:scale-110 transition-transform" />
      <span className="relative">Donate</span>
      
      {/* Subtle Glow */}
      <span className="absolute -inset-1 bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
    </Link>
  );
};

export default FloatingDonateButton;
