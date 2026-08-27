import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';

const FloatingVolunteerButton = () => {
  const location = useLocation();

  // Hide the floating button if we are already on the volunteer page
  if (location.pathname === '/volunteer-form') {
    return null;
  }

  return (
    <Link
      to="/volunteer-form"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-[0_8px_30px_rgba(5,150,105,0.4)] hover:shadow-[0_8px_30px_rgba(5,150,105,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden"
    >
      {/* Pulse Effect Background */}
      <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full origin-center"></span>
      
      <HeartHandshake className="w-5 h-5 animate-pulse group-hover:scale-110 transition-transform" />
      <span className="relative">Volunteer</span>
      
      {/* Subtle Glow */}
      <span className="absolute -inset-1 bg-emerald-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
    </Link>
  );
};

export default FloatingVolunteerButton;
