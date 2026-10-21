import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Heart } from 'lucide-react';
import { weddingAudio } from '../utils/audio.ts';

interface NavbarProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMusicPlaying, onToggleMusic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Invitation', href: '#invitation' },
    { name: 'Our Moment', href: '#moment' },
    { name: 'Wishes', href: '#wishes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a040b]/90 backdrop-blur-md border-b border-[#d4af37]/25 shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#120206]/80 via-[#120206]/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#fcefee] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span>Premjeet</span>
            <Heart className="w-3.5 h-3.5 text-[#e8c86d] fill-[#d4af37] animate-pulse" />
            <span>Manwi</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#f5ebd7]/80 hover:text-[#e8c86d] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#d4af37]/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + audio control */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Music controller button */}
            <button
              onClick={onToggleMusic}
              aria-label={isMusicPlaying ? 'Mute background wedding music' : 'Play background wedding music'}
              title={isMusicPlaying ? 'Pause Wedding Music' : 'Play Wedding Music'}
              className={`p-2 sm:px-3 rounded-full border transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                isMusicPlaying
                  ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#ffd700] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'border-[#d4af37]/35 bg-black/40 text-[#f5ebd7]/80 hover:border-[#d4af37] hover:text-[#f5ebd7]'
              }`}
            >
              {isMusicPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#ffd700] animate-pulse" />
                  <div className="flex items-end gap-0.5 h-3.5 px-0.5" aria-hidden="true">
                    <span className="w-0.5 h-full bg-[#ffd700] animate-[pulse_1s_ease-in-out_infinite]" />
                    <span className="w-0.5 h-2/3 bg-[#e8c86d] animate-[pulse_0.7s_ease-in-out_infinite]" />
                    <span className="w-0.5 h-4/5 bg-[#ffd700] animate-[pulse_1.2s_ease-in-out_infinite]" />
                  </div>
                  <span className="hidden sm:inline text-xs font-cinzel text-[#e8c86d] font-semibold">Music</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs text-[#f5ebd7]/70">Music</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <a
              href="#rsvp"
              className="px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase font-cinzel text-[#1a040b] bg-gradient-to-r from-[#f3e5ab] via-[#e8c86d] to-[#d4af37] rounded-sm hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              RSVP Now
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f5ebd7] md:hidden rounded border border-[#d4af37]/30 hover:border-[#d4af37]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1f050d]/98 border-b border-[#d4af37]/30 backdrop-blur-xl px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-4 font-cinzel text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#f5ebd7] hover:text-[#d4af37] py-2 text-base tracking-widest border-b border-[#d4af37]/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-[#e8c86d] to-[#d4af37] text-[#1a040b] rounded"
            >
              Confirm RSVP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
