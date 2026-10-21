import React from 'react';
import { GoldCornerOrnament, IndianLotusMotif, GoldFloralDivider } from './OrnamentalIcons.tsx';
import { Heart, Sparkles } from 'lucide-react';

export const OurGallerySection: React.FC = () => {
  // Exact path to user's uploaded photograph
  const photoUrl = '/assets/aistudio/file_0000000004a08208be46ca0a804325a5_f905c897.png';

  return (
    <section id="moment" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#180309] via-[#22040c] to-[#160207] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Top Lotus Icon */}
        <div className="flex justify-center mb-3">
          <IndianLotusMotif className="w-10 h-8 text-[#d4af37]" />
        </div>

        {/* Section Heading: "Our Beautiful Moment ❤️" */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider gold-gradient-text">
          Our Beautiful Moment ❤️
        </h2>
        
        <p className="mt-3 font-garamond italic text-lg sm:text-2xl text-[#fcefee]/85 max-w-xl mx-auto">
          "In your eyes, I found my home. In your heart, I found my forever."
        </p>

        <GoldFloralDivider className="my-8 max-w-md mx-auto" />

        {/* Central Single Photograph Presentation */}
        <div className="relative max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-6">
          
          {/* Glowing Aura behind the frame */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#d4af37]/25 via-[#ff758f]/20 to-[#d4af37]/25 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Royal Gold Frame Container */}
          <div className="relative p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#3a0610] via-[#24040a] to-[#190207] border-2 border-[#d4af37]/70 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.25)]">
            
            {/* Corner Filigrees */}
            <GoldCornerOrnament position="top-left" className="absolute -top-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 text-[#e8c86d] z-20" />
            <GoldCornerOrnament position="top-right" className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 text-[#e8c86d] z-20" />
            <GoldCornerOrnament position="bottom-left" className="absolute -bottom-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 text-[#e8c86d] z-20" />
            <GoldCornerOrnament position="bottom-right" className="absolute -bottom-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 text-[#e8c86d] z-20" />

            {/* Inner Gold Inset Frame */}
            <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/50 p-1 sm:p-1.5 bg-[#120205]">
              
              {/* The EXACT uploaded photograph - aspect ratio preserved, no stretch, pristine quality */}
              <img
                src={photoUrl}
                alt="Premjeet & Manwi — Together in Love"
                loading="eager"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[720px] object-contain rounded-lg shadow-inner mx-auto transition-transform duration-700 ease-out hover:scale-[1.01]"
              />

              {/* Subtle gold shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none rounded-lg" />
            </div>

            {/* Elegant Floral & Couple Plate at bottom of frame */}
            <div className="mt-4 pt-3 border-t border-[#d4af37]/30 flex flex-col items-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-cinzel font-semibold tracking-widest text-[#f5ebd7]">
                <span>PREMJEET</span>
                <Heart className="w-4 h-4 text-[#ff4d6d] fill-[#ff4d6d] animate-pulse" />
                <span>MANWI</span>
              </div>
              <p className="font-garamond italic text-sm text-[#e8c86d]/90 mt-1">
                A cherished memory on the path to holy matrimony
              </p>
            </div>
          </div>
        </div>

        {/* Romantic note below photo */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-cinzel tracking-[0.2em] text-[#d4af37]/75">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BLESSED WITH LOVE &amp; TOGETHERNESS</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};
