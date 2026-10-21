import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface FloatingControlsProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  isMusicPlaying,
  onToggleMusic,
  petalsEnabled,
  onTogglePetals,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating Petals Toggle */}
      <button
        onClick={onTogglePetals}
        title={petalsEnabled ? 'Pause Floating Petals' : 'Enable Floating Petals'}
        aria-label={petalsEnabled ? 'Pause floating rose petals' : 'Enable floating rose petals'}
        className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-all duration-300 cursor-pointer ${
          petalsEnabled
            ? 'bg-[#29050f]/90 border-[#d4af37] text-[#ffd700] hover:scale-110 shadow-[0_0_12px_rgba(212,175,55,0.4)]'
            : 'bg-[#180309]/80 border-[#d4af37]/30 text-[#a0897b] hover:text-[#f5ebd7]'
        }`}
      >
        <Sparkles className="w-4 h-4" />
      </button>

      {/* Floating Audio Toggle */}
      <button
        onClick={onToggleMusic}
        title={isMusicPlaying ? 'Mute Background Music' : 'Play Background Music'}
        aria-label={isMusicPlaying ? 'Mute romantic background music' : 'Play romantic background music'}
        className={`w-11 h-11 rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 cursor-pointer ${
          isMusicPlaying
            ? 'bg-gradient-to-r from-[#d4af37] to-[#e8c86d] text-[#1a040b] border-[#ffd700] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.5)]'
            : 'bg-[#24040d]/90 text-[#f5ebd7] border-[#d4af37]/40 hover:border-[#d4af37]'
        }`}
      >
        {isMusicPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
      </button>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Return to top"
          aria-label="Scroll back to top"
          className="w-10 h-10 rounded-full bg-[#1b0309]/90 border border-[#d4af37]/60 text-[#f5ebd7] flex items-center justify-center shadow-lg hover:bg-[#d4af37] hover:text-[#1a040b] hover:border-[#d4af37] transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
