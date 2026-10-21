import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { GoldCornerOrnament, IndianLotusMotif } from './OrnamentalIcons.tsx';

interface HeroSectionProps {
  onOpenInvitation: () => void;
  hasOpened: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInvitation, hasOpened }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 bg-gradient-to-b from-[#180309] via-[#2d0510] to-[#1a030a]"
    >
      {/* Background Decorative Mandala Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full border border-[#d4af37]/40 animate-spin" style={{ animationDuration: '180s' }}>
          <div className="w-full h-full border border-dashed border-[#e8c86d]/30 rounded-full scale-90" />
        </div>
      </div>

      {/* Royal Subtle Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(18,2,6,0.95)_75%)] pointer-events-none" />

      {/* Main Luxury Frame */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-8 py-12 sm:py-16 my-8">
        
        {/* Ornate Gold Border Container */}
        <div className="relative border-2 border-[#d4af37]/50 rounded-2xl p-6 sm:p-12 md:p-16 bg-[#25040d]/85 backdrop-blur-md shadow-[0_0_50px_rgba(212,175,55,0.22)] gold-ornament-double-border">
          
          {/* Corner Ornaments */}
          <GoldCornerOrnament position="top-left" className="absolute -top-3 -left-3 w-14 h-14 sm:w-20 sm:h-20 text-[#e8c86d]" />
          <GoldCornerOrnament position="top-right" className="absolute -top-3 -right-3 w-14 h-14 sm:w-20 sm:h-20 text-[#e8c86d]" />
          <GoldCornerOrnament position="bottom-left" className="absolute -bottom-3 -left-3 w-14 h-14 sm:w-20 sm:h-20 text-[#e8c86d]" />
          <GoldCornerOrnament position="bottom-right" className="absolute -bottom-3 -right-3 w-14 h-14 sm:w-20 sm:h-20 text-[#e8c86d]" />

          {/* Auspicious Vedic Top Blessing Symbol */}
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="text-[#e8c86d] text-sm tracking-[0.3em] font-cinzel opacity-90 mb-2">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <IndianLotusMotif className="w-10 h-8 text-[#ffd700]" />
          </div>

          {/* "Together with our families" */}
          <div className="mb-4">
            <p className="font-garamond italic text-xl sm:text-2xl md:text-3xl text-[#fcefee] tracking-wide">
              Together with our families
            </p>
          </div>

          {/* Golden Divider */}
          <div className="flex items-center justify-center gap-3 my-4 max-w-xs mx-auto">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* The Couple's Names with Animated Heart */}
          <div className="my-6 sm:my-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 font-cinzel">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
                Premjeet
              </h1>
              
              {/* Romantic Animated Heart & Ampersand */}
              <div className="flex items-center justify-center relative my-1 md:my-0 group">
                <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#f3e5ab] px-1">
                  &
                </span>
                <span className="absolute -top-1 -right-2">
                  <Heart className="w-5 h-5 text-[#ff4d6d] fill-[#ff4d6d] animate-bounce drop-shadow-[0_0_8px_rgba(255,77,109,0.8)]" />
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
                Manwi
              </h1>
            </div>
          </div>

          {/* "ARE GETTING MARRIED" */}
          <div className="my-5">
            <p className="font-cinzel text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] sm:tracking-[0.5em] uppercase text-[#e8c86d] drop-shadow-sm">
              ARE GETTING MARRIED
            </p>
          </div>

          {/* "10 DECEMBER 2026" */}
          <div className="mt-4 mb-8">
            <div className="inline-block px-6 py-2 border-y border-[#d4af37]/60 bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent">
              <p className="font-cinzel text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.25em] text-[#fffdfa]">
                10 DECEMBER 2026
              </p>
            </div>
          </div>

          {/* Button: "Open Our Wedding Invitation" */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              onClick={onOpenInvitation}
              className="group relative px-8 sm:px-10 py-3.5 sm:py-4 overflow-hidden rounded-sm bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-[#1a040b] font-cinzel font-bold text-sm sm:text-base tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Open Our Wedding Invitation</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>

            <p className="text-xs text-[#f5ebd7]/60 font-garamond italic tracking-wide mt-1">
              Click to view invitation card &amp; celebrate with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
