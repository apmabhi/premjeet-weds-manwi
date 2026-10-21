import React, { useState, useEffect } from 'react';
import { IndianLotusMotif, GoldFloralDivider } from './OrnamentalIcons.tsx';
import { Sparkles, Heart } from 'lucide-react';

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2026-12-10T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isWeddingDay: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isWeddingDay: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isWeddingDay: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isWeddingDay: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#180309] overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Top Lotus Motif */}
        <div className="flex justify-center mb-3">
          <IndianLotusMotif className="w-10 h-8 text-[#d4af37]" />
        </div>

        {/* Heading */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider gold-gradient-text">
          Counting Down to Forever ❤️
        </h2>
        
        <p className="mt-3 font-garamond italic text-lg sm:text-xl text-[#fcefee]/80 max-w-xl mx-auto">
          Every passing second brings us closer to the most auspicious and joyous day of our lives.
        </p>

        <GoldFloralDivider className="my-8 max-w-md mx-auto" />

        {timeLeft.isWeddingDay ? (
          /* Special Wedding Day Message */
          <div className="p-8 sm:p-12 rounded-xl bg-gradient-to-r from-[#2e0510] via-[#450717] to-[#2e0510] border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.4)] max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-[#ff4d6d] fill-[#ff4d6d] mx-auto mb-4 animate-bounce" />
            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text mb-3">
              Today is the Grand Day!
            </h3>
            <p className="font-garamond text-xl sm:text-2xl text-[#fffdfa] italic leading-relaxed">
              Two souls unite in eternal love and timeless harmony. Blessings and joy as Premjeet &amp; Manwi embark on forever!
            </p>
          </div>
        ) : (
          /* Countdown Grid */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mt-6">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="relative group p-4 sm:p-6 rounded-lg bg-[#27040e]/90 border border-[#d4af37]/40 shadow-lg shadow-black/60 backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                {/* Subtle corner studs */}
                <span className="absolute top-1.5 left-1.5 w-1 h-1 bg-[#d4af37] rounded-full opacity-60" />
                <span className="absolute top-1.5 right-1.5 w-1 h-1 bg-[#d4af37] rounded-full opacity-60" />
                <span className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-[#d4af37] rounded-full opacity-60" />
                <span className="absolute bottom-1.5 right-1.5 w-1 h-1 bg-[#d4af37] rounded-full opacity-60" />

                <div className="flex flex-col items-center">
                  <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text tabular-nums tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] font-cinzel text-[#f5ebd7]/75 font-medium">
                    {unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-[#d4af37]/80">
          <Sparkles className="w-3.5 h-3.5" />
          <span>10TH DECEMBER 2026</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};
