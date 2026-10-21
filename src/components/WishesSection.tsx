import React, { useState, useEffect } from 'react';
import { IndianLotusMotif, GoldFloralDivider } from './OrnamentalIcons.tsx';
import { Heart, Send, Sparkles, MessageCircle, ShieldCheck, Check, Lock, Unlock, Trash2 } from 'lucide-react';
import { WeddingWish } from '../types/wedding.ts';

// Initial pre-seeded blessings from family and friends
const INITIAL_BLESSINGS: WeddingWish[] = [
  {
    id: 'blessing-1',
    guestName: 'Grandparents & Elders',
    message: 'सदा सुहागन रहो! May Mahadev and Parvati bless Premjeet and Manwi with boundless happiness, respect, mutual understanding, and prosperity for seven lifetimes.',
    createdAt: '2026-10-15T10:00:00.000Z',
    approved: true,
    isFamily: true,
  },
  {
    id: 'blessing-2',
    guestName: 'Sharma & Kumar Families',
    message: 'Watching two beautiful souls unite brings tears of joy to our eyes. Heartiest congratulations to dear Premjeet and sweet Manwi! May your bond grow stronger with each passing dawn.',
    createdAt: '2026-10-18T14:30:00.000Z',
    approved: true,
    isFamily: true,
  },
  {
    id: 'blessing-3',
    guestName: 'Rohit & Neha',
    message: 'To the most wonderful couple, Premjeet & Manwi! Wishing you endless laughter, thrilling adventures, and love that never fades. Counting down to 10th December!',
    createdAt: '2026-10-20T09:15:00.000Z',
    approved: true,
  },
  {
    id: 'blessing-4',
    guestName: 'Ananya & Friends',
    message: 'You two are truly made for each other. Your smile together lights up every room! Wishing you an enchanting wedding day and a lifetime of happiness.',
    createdAt: '2026-10-21T08:00:00.000Z',
    approved: true,
  },
];

// Inappropriate words filter for safety
const BANNED_PATTERNS = [
  /spam/i,
  /viagra/i,
  /casino/i,
  /crypto/i,
  /fuck/i,
  /bitch/i,
  /asshole/i,
  /shit/i,
];

export const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<WeddingWish[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_BLESSINGS;
  });

  const [guestName, setGuestName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Moderation state
  const [showModeration, setShowModeration] = useState(false);
  const [moderationPin, setModerationPin] = useState('');
  const [isModeratorAuthed, setIsModeratorAuthed] = useState(false);
  const [pinError, setPinError] = useState('');

  // Persist to local storage whenever wishes change
  useEffect(() => {
    localStorage.setItem('wedding_wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Load from backend API if available
  useEffect(() => {
    fetch('/api/wishes')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setWishes(data);
        }
      })
      .catch(() => {
        // Safe fallback
      });
  }, []);

  const handleSendWish = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessNotice(false);

    if (!guestName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (!message.trim() || message.trim().length < 5) {
      setErrorMsg('Please write a heartfelt wedding blessing (at least 5 characters).');
      return;
    }

    // Safety & profanity check
    const isClean = !BANNED_PATTERNS.some((pattern) => pattern.test(guestName) || pattern.test(message));

    if (!isClean) {
      setErrorMsg('Please ensure your wedding blessing contains respectful language.');
      return;
    }

    setIsSubmitting(true);

    const newWish: WeddingWish = {
      id: `wish-${Date.now()}`,
      guestName: guestName.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      approved: true, // Clean vetted message approved
    };

    try {
      await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWish),
      }).catch(() => null);

      setWishes((prev) => [newWish, ...prev]);
      setGuestName('');
      setMessage('');
      setSuccessNotice(true);
      setTimeout(() => setSuccessNotice(false), 5000);
    } catch {
      setWishes((prev) => [newWish, ...prev]);
      setGuestName('');
      setMessage('');
      setSuccessNotice(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUnlockModerator = (e: React.FormEvent) => {
    e.preventDefault();
    if (moderationPin === '2026' || moderationPin === '1012') {
      setIsModeratorAuthed(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN. (Couple / Family PIN)');
    }
  };

  const toggleWishApproval = (id: string) => {
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, approved: !w.approved } : w))
    );
  };

  const deleteWish = (id: string) => {
    setWishes((prev) => prev.filter((w) => w.id !== id));
  };

  const visibleWishes = isModeratorAuthed ? wishes : wishes.filter((w) => w.approved);

  return (
    <section id="wishes" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#160207] via-[#24040d] to-[#140207] overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top Lotus Motif */}
        <div className="flex justify-center mb-3">
          <IndianLotusMotif className="w-10 h-8 text-[#d4af37]" />
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider gold-gradient-text">
            Send Your Love &amp; Blessings ❤️
          </h2>
          <p className="mt-3 font-garamond italic text-lg sm:text-2xl text-[#fcefee]/85 max-w-xl mx-auto">
            Shower Premjeet and Manwi with your warm wishes as they embark on a journey of a lifetime.
          </p>
          <GoldFloralDivider className="my-6 max-w-sm mx-auto" />
        </div>

        {/* Wish Submission Form */}
        <div className="max-w-2xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-[#29050f]/90 border border-[#d4af37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f5ebd7] mb-4 text-center flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-[#ff4d6d] fill-[#ff4d6d]" />
            <span>Write a Wedding Blessing</span>
            <Heart className="w-5 h-5 text-[#ff4d6d] fill-[#ff4d6d]" />
          </h3>

          {successNotice && (
            <div className="p-4 mb-4 bg-[#2e4d26]/80 border border-emerald-500 rounded-lg text-emerald-200 text-sm text-center flex items-center justify-center gap-2 font-cinzel">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Your blessing has been sent to Premjeet &amp; Manwi with love!</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 mb-4 bg-red-950/80 border border-red-500 text-red-200 text-xs sm:text-sm rounded text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSendWish} className="space-y-4">
            <div>
              <label htmlFor="wishAuthor" className="block text-xs font-cinzel tracking-wider text-[#e8c86d] uppercase mb-1.5 font-semibold">
                Your Name *
              </label>
              <input
                id="wishAuthor"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Ramesh & Sunita Uncle / Priya"
                className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/40 bg-[#190309] text-[#fffdfa] placeholder:text-[#a0897b]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-sm font-sans-clean"
              />
            </div>

            <div>
              <label htmlFor="wishMessage" className="block text-xs font-cinzel tracking-wider text-[#e8c86d] uppercase mb-1.5 font-semibold">
                Your Wedding Blessing *
              </label>
              <textarea
                id="wishMessage"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="May Premjeet & Manwi be blessed with everlasting happiness, love, and divine grace..."
                className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/40 bg-[#190309] text-[#fffdfa] placeholder:text-[#a0897b]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-sm font-sans-clean resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-[#1a040b] font-cinzel font-bold text-sm tracking-[0.2em] uppercase hover:brightness-110 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Sending Blessing...</span>
              ) : (
                <>
                  <span>Send Wedding Blessing</span>
                  <Send className="w-4 h-4 text-[#1a040b]" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Wishes Display Cards Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#d4af37]/20">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f5ebd7] flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#e8c86d]" />
              <span>Cherished Blessings ({visibleWishes.length})</span>
            </h3>

            {/* Moderator Mode Toggle for Couple */}
            <button
              onClick={() => setShowModeration(!showModeration)}
              className="text-xs font-cinzel text-[#d4af37] hover:text-[#fff3c4] flex items-center gap-1.5 px-3 py-1 rounded border border-[#d4af37]/30 hover:border-[#d4af37]"
            >
              {isModeratorAuthed ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Couple Moderation Active</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Couple / Organizer Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Moderator PIN prompt */}
          {showModeration && !isModeratorAuthed && (
            <div className="p-4 mb-6 rounded-lg bg-[#24040d] border border-[#d4af37]/60 max-w-sm ml-auto">
              <form onSubmit={handleUnlockModerator} className="flex flex-col gap-2">
                <span className="text-xs font-cinzel text-[#e8c86d]">Enter Couple PIN to Moderate (e.g. 2026)</span>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={moderationPin}
                    onChange={(e) => setModerationPin(e.target.value)}
                    placeholder="PIN"
                    className="flex-1 px-3 py-1.5 rounded bg-[#140206] border border-[#d4af37]/40 text-xs text-white"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#d4af37] text-[#140206] text-xs font-bold rounded font-cinzel"
                  >
                    Verify
                  </button>
                </div>
                {pinError && <span className="text-xs text-red-300">{pinError}</span>}
              </form>
            </div>
          )}

          {/* Grid of Wishes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {visibleWishes.map((w) => (
              <div
                key={w.id}
                className="relative p-6 rounded-xl bg-gradient-to-br from-[#290510] via-[#21040d] to-[#190208] border border-[#d4af37]/35 shadow-lg shadow-black/50 hover:border-[#d4af37]/70 transition-all duration-300"
              >
                {/* Decorative gold heart in corner */}
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  {w.isFamily && (
                    <span className="text-[10px] uppercase font-cinzel tracking-wider px-2 py-0.5 rounded bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f3e5ab]">
                      Family
                    </span>
                  )}
                  <Heart className="w-4 h-4 text-[#ff4d6d]/70 fill-[#ff4d6d]/30" />
                </div>

                {/* Blessing message */}
                <p className="font-garamond italic text-lg sm:text-xl text-[#fffdfa] leading-relaxed mb-4 pr-6">
                  "{w.message}"
                </p>

                {/* Sender Name & Date */}
                <div className="pt-3 border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-[#e8c86d]">
                  <span className="font-cinzel font-semibold tracking-wider text-[#f5ebd7] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    {w.guestName}
                  </span>
                  <span className="font-sans-clean text-[#a0897b] text-[11px]">
                    {new Date(w.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                {/* Moderation Controls when authed */}
                {isModeratorAuthed && (
                  <div className="mt-3 pt-2 border-t border-[#d4af37]/30 flex items-center justify-between text-xs">
                    <button
                      onClick={() => toggleWishApproval(w.id)}
                      className={`px-2 py-1 rounded text-[11px] font-cinzel flex items-center gap-1 ${
                        w.approved ? 'bg-emerald-950 text-emerald-300 border border-emerald-600' : 'bg-amber-950 text-amber-300 border border-amber-600'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3" />
                      {w.approved ? 'Approved (Visible)' : 'Hidden (Pending)'}
                    </button>
                    <button
                      onClick={() => deleteWish(w.id)}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
