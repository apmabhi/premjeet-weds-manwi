import React from 'react';
import { GoldCornerOrnament, IndianLotusMotif, IndianMandalaMotif, GoldFloralDivider } from './OrnamentalIcons.tsx';
import { Heart, Sparkles } from 'lucide-react';

export const InvitationCardSection: React.FC = () => {
  return (
    <section id="invitation" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#150308] overflow-hidden">
      {/* Background Indian ornamental mandala texture */}
      <div className="absolute inset-0 bg-invitation-texture opacity-75 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Heading Tag */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase font-cinzel tracking-[0.35em] text-[#e8c86d] font-semibold mb-2">
            Formal Wedding Announcement
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text">
            The Royal Invitation
          </h2>
          <div className="w-20 h-0.5 bg-[#d4af37] mx-auto mt-3" />
        </div>

        {/* Physical Luxury Card Simulation */}
        <div className="relative mx-auto rounded-2xl bg-gradient-to-b from-[#420612] via-[#2f040d] to-[#1e0208] border-2 border-[#d4af37]/60 p-8 sm:p-14 md:p-16 shadow-[0_15px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.2)] text-center">
          
          {/* Inner Golden Inset Border */}
          <div className="absolute inset-3 sm:inset-5 border border-[#d4af37]/40 rounded-xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 border border-dashed border-[#e8c86d]/25 rounded-lg pointer-events-none" />

          {/* Luxury Corner Ornaments */}
          <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 sm:top-4 sm:left-4 w-12 h-12 sm:w-20 sm:h-20 text-[#e8c86d]" />
          <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-20 sm:h-20 text-[#e8c86d]" />
          <GoldCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-20 sm:h-20 text-[#e8c86d]" />
          <GoldCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-20 sm:h-20 text-[#e8c86d]" />

          {/* Central Watermark Mandala behind text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <IndianMandalaMotif className="w-80 h-80 sm:w-96 sm:h-96 text-[#d4af37]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Auspicious Invocation */}
            <div className="mb-4">
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#e8c86d] uppercase font-semibold">
                ॥ ॐ श्री गणेशाय नमः ॥
              </span>
            </div>

            <IndianLotusMotif className="w-10 h-8 text-[#ffd700] mb-3" />

            {/* "With the Blessings of Our Families" */}
            <p className="font-garamond italic text-xl sm:text-2xl md:text-3xl text-[#fcefee] tracking-wide mb-2">
              With the Blessings of Our Families
            </p>

            {/* "Together with their families" */}
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#e8c86d] mb-6">
              Together with their families
            </p>

            <GoldFloralDivider className="my-3 max-w-xs" />

            {/* "Premjeet & Manwi" */}
            <div className="my-6">
              <h3 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold gold-gradient-text tracking-wide drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]">
                Premjeet
              </h3>
              
              <div className="flex items-center justify-center gap-3 my-2">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
                <span className="font-script text-4xl sm:text-5xl text-[#fff8dc] px-2">&amp;</span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
              </div>

              <h3 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold gold-gradient-text tracking-wide drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]">
                Manwi
              </h3>
            </div>

            <GoldFloralDivider className="my-3 max-w-xs" />

            {/* "Joyfully Invite You to Celebrate Their Wedding" */}
            <p className="font-garamond italic text-2xl sm:text-3xl md:text-4xl text-[#fffdfa] max-w-xl mx-auto my-4 leading-relaxed">
              Joyfully Invite You to Celebrate Their Wedding
            </p>

            {/* "10th December 2026" */}
            <div className="mt-6 mb-2">
              <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#d4af37]/60 bg-[#1f030a]/80 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <span className="font-cinzel text-lg sm:text-2xl font-bold tracking-[0.2em] text-[#fcefee]">
                  10th December 2026
                </span>
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
              </div>
            </div>

            {/* Traditional Auspicious Sloka / Shubh Vivah Note */}
            <div className="mt-8 pt-6 border-t border-[#d4af37]/25 max-w-lg text-center">
              <p className="font-garamond italic text-base sm:text-lg text-[#f5ebd7]/85 leading-relaxed">
                "May love, trust, and divine grace guide our steps as we begin our holy union."
              </p>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs font-cinzel text-[#d4af37] tracking-widest">
                <Heart className="w-3.5 h-3.5 fill-[#d4af37]" />
                <span>SHUBH VIVAH</span>
                <Heart className="w-3.5 h-3.5 fill-[#d4af37]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
