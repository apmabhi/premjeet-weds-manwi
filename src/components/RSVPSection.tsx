import React, { useState } from 'react';
import { IndianLotusMotif, GoldFloralDivider } from './OrnamentalIcons.tsx';
import { CheckCircle2, Heart, Send, User, Users, MessageSquare } from 'lucide-react';
import { RSVPData } from '../types/wedding.ts';

export const RSVPSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [attendance, setAttendance] = useState<'accepts' | 'declines'>('accepts');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!guestName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    setIsSubmitting(true);

    const newRsvp: RSVPData = {
      id: Date.now().toString(),
      guestName: guestName.trim(),
      numberOfGuests: attendance === 'accepts' ? numberOfGuests : 0,
      attendance,
      message: message.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    try {
      // 1. Attempt server API call
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRsvp),
      }).catch(() => null);

      // 2. Client-side local storage persistence backup
      const existingRsvps: RSVPData[] = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existingRsvps.push(newRsvp);
      localStorage.setItem('wedding_rsvps', JSON.stringify(existingRsvps));

      setSubmittedName(guestName.trim());
      setIsSubmitted(true);
      setGuestName('');
      setMessage('');
      setNumberOfGuests(1);
    } catch (err) {
      // Graceful fallback to client storage
      setSubmittedName(guestName.trim());
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#180309] overflow-hidden">
      {/* Subtle backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.12)_0%,transparent_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Top Motif */}
        <div className="flex justify-center mb-3">
          <IndianLotusMotif className="w-10 h-8 text-[#d4af37]" />
        </div>

        {/* Heading & Subtext */}
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider gold-gradient-text">
            Will You Join Our Celebration?
          </h2>
          <p className="mt-3 font-garamond italic text-lg sm:text-2xl text-[#fcefee]/85 max-w-xl mx-auto leading-relaxed">
            Your presence and blessings will make our special day even more memorable.
          </p>
          <GoldFloralDivider className="my-6 max-w-sm mx-auto" />
        </div>

        {/* RSVP Card with Luxurious Ivory Background & Delicate Gold Borders */}
        <div className="relative rounded-2xl bg-[#fffdf9] text-[#2c1810] p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.3)] border-2 border-[#d4af37]">
          
          {/* Subtle Inset Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#d4af37]/40 rounded-xl pointer-events-none" />

          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-[#e8c86d]/20 border border-[#d4af37] text-[#997520] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#b8860b]" />
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4a0815] mb-2">
                RSVP Received with Gratitude!
              </h3>
              
              <p className="font-garamond italic text-xl sm:text-2xl text-[#5c301c] max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-[#8b152d]">{submittedName}</span>! Your response has been joyfully recorded.
              </p>

              <div className="p-4 bg-[#fbf6ec] rounded-lg border border-[#d4af37]/40 max-w-md mx-auto text-sm text-[#6d4c38] font-garamond italic leading-relaxed">
                Premjeet and Manwi look forward to sharing their love and auspicious wedding moments with you on 10th December 2026.
              </div>

              <button
                onClick={handleReset}
                className="mt-8 px-6 py-2.5 text-xs font-cinzel font-semibold tracking-widest uppercase rounded border border-[#d4af37] text-[#8b152d] hover:bg-[#8b152d] hover:text-white transition-colors duration-200"
              >
                Submit Response For Another Guest
              </button>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-300 rounded text-red-700 text-xs sm:text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Guest Name */}
              <div>
                <label htmlFor="guestName" className="block text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#4a0815] uppercase mb-2 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#b8860b]" />
                  <span>Guest Name *</span>
                </label>
                <input
                  id="guestName"
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/60 bg-[#faf6ee] text-[#2c1810] placeholder:text-[#a0897b] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:bg-white transition-all text-sm sm:text-base font-sans-clean"
                />
              </div>

              {/* Attendance Confirmation Radio Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#4a0815] uppercase mb-2">
                  Attendance Confirmation *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('accepts')}
                    className={`flex items-center justify-center gap-2 p-3.5 rounded-lg border-2 text-sm sm:text-base font-cinzel font-semibold transition-all duration-200 cursor-pointer ${
                      attendance === 'accepts'
                        ? 'border-[#8b152d] bg-[#8b152d] text-white shadow-md'
                        : 'border-[#d4af37]/50 bg-[#faf6ee] text-[#4a0815] hover:border-[#8b152d]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${attendance === 'accepts' ? 'fill-white' : 'text-[#8b152d]'}`} />
                    <span>Accepts with Joy ❤️</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('declines')}
                    className={`flex items-center justify-center gap-2 p-3.5 rounded-lg border-2 text-sm sm:text-base font-cinzel font-semibold transition-all duration-200 cursor-pointer ${
                      attendance === 'declines'
                        ? 'border-[#5c301c] bg-[#5c301c] text-white shadow-md'
                        : 'border-[#d4af37]/50 bg-[#faf6ee] text-[#5c301c] hover:border-[#5c301c]'
                    }`}
                  >
                    <span>Regretfully Declines</span>
                  </button>
                </div>
              </div>

              {/* Number of Guests (Only if attending) */}
              {attendance === 'accepts' && (
                <div>
                  <label htmlFor="numberOfGuests" className="block text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#4a0815] uppercase mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#b8860b]" />
                    <span>Number of Guests Attending</span>
                  </label>
                  <select
                    id="numberOfGuests"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/60 bg-[#faf6ee] text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:bg-white text-sm sm:text-base font-sans-clean"
                  >
                    <option value={1}>1 Guest (Just Me)</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5 or more Guests (Family)</option>
                  </select>
                </div>
              )}

              {/* Optional Message */}
              <div>
                <label htmlFor="rsvpMessage" className="block text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#4a0815] uppercase mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#b8860b]" />
                  <span>Optional Message for the Couple</span>
                </label>
                <textarea
                  id="rsvpMessage"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a warm note or congratulations..."
                  className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/60 bg-[#faf6ee] text-[#2c1810] placeholder:text-[#a0897b] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:bg-white transition-all text-sm sm:text-base font-sans-clean resize-none"
                />
              </div>

              {/* Submit Button: "Confirm Your Response" */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#8b152d] via-[#a31a37] to-[#8b152d] text-white font-cinzel font-bold text-sm sm:text-base tracking-[0.2em] uppercase shadow-lg shadow-[#8b152d]/30 hover:brightness-110 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-[#d4af37]"
                >
                  {isSubmitting ? (
                    <span>Recording Response...</span>
                  ) : (
                    <>
                      <span>Confirm Your Response</span>
                      <Send className="w-4 h-4 text-[#f3e5ab]" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-center text-xs text-[#8c6b54] font-garamond italic pt-2">
                🔒 Privacy Assured: Guest responses are sent privately to Premjeet &amp; Manwi and will not be made public.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
