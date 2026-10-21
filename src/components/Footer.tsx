import React from 'react';
import { IndianLotusMotif, IndianMandalaMotif, GoldCornerOrnament } from './OrnamentalIcons.tsx';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#100205] text-[#f5ebd7] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#d4af37]/40 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle corner filigrees */}
      <GoldCornerOrnament position="top-left" className="absolute top-0 left-0 w-16 h-16 text-[#e8c86d] opacity-50" />
      <GoldCornerOrnament position="top-right" className="absolute top-0 right-0 w-16 h-16 text-[#e8c86d] opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Lotus & Shubh Vivah Symbol */}
        <div className="flex justify-center mb-4">
          <IndianLotusMotif className="w-12 h-10 text-[#ffd700]" />
        </div>

        {/* Premjeet & Manwi */}
        <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-wider mb-2">
          Premjeet &amp; Manwi
        </h3>

        {/* "Two Souls, One Forever." */}
        <p className="font-garamond italic text-xl sm:text-2xl text-[#fcefee] tracking-wide my-3">
          Two Souls, One Forever.
        </p>

        {/* Golden Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <Heart className="w-4 h-4 text-[#ff4d6d] fill-[#ff4d6d] animate-pulse" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* "10 December 2026" */}
        <div className="mb-6">
          <span className="inline-block px-5 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#1c0309] font-cinzel text-sm sm:text-base font-semibold tracking-[0.25em] text-[#e8c86d]">
            10 DECEMBER 2026
          </span>
        </div>

        {/* "Made with Love for Premjeet & Manwi ❤️" */}
        <div className="mt-8 pt-8 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cinzel tracking-wider text-[#a0897b]">
          <p className="flex items-center gap-1.5 text-[#e8c86d]">
            <span>Made with Love for Premjeet &amp; Manwi</span>
            <Heart className="w-3.5 h-3.5 text-[#ff4d6d] fill-[#ff4d6d]" />
          </p>
          <p className="flex items-center gap-1 text-[#f5ebd7]/60">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Auspicious Wedding Celebration</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
