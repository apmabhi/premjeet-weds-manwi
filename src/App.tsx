/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CountdownSection } from './components/CountdownSection.tsx';
import { InvitationCardSection } from './components/InvitationCardSection.tsx';
import { OurGallerySection } from './components/OurGallerySection.tsx';
import { RSVPSection } from './components/RSVPSection.tsx';
import { WishesSection } from './components/WishesSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PetalsAndParticles } from './components/PetalsAndParticles.tsx';
import { FloatingControls } from './components/BackToTop.tsx';
import { weddingAudio } from './utils/audio.ts';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsMusicPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggleMusic = () => {
    weddingAudio.toggle();
  };

  const handleOpenInvitation = () => {
    setHasOpenedInvitation(true);
    // Start romantic background music if not playing yet
    if (!isMusicPlaying) {
      weddingAudio.play();
      setIsMusicPlaying(true);
    }
    // Smooth scroll to countdown / invitation
    const invitationEl = document.getElementById('countdown') || document.getElementById('invitation');
    if (invitationEl) {
      invitationEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#120206] text-[#f7eedd] selection:bg-[#d4af37] selection:text-[#1a050b] font-sans-clean relative selection:font-medium">
      {/* Floating Rose Petals & Golden Stardust Engine */}
      <PetalsAndParticles isEnabled={petalsEnabled} />

      {/* Royal Top Navigation Bar */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <HeroSection
          onOpenInvitation={handleOpenInvitation}
          hasOpened={hasOpenedInvitation}
        />

        {/* 2. Live Wedding Countdown */}
        <CountdownSection />

        {/* 3. Luxurious Traditional Indian Wedding Invitation Card */}
        <InvitationCardSection />

        {/* 4. Our Gallery — Strictly Exactly One Uploaded Photograph */}
        <OurGallerySection />

        {/* 5. Interactive RSVP Section */}
        <RSVPSection />

        {/* 6. Wedding Wishes & Blessings Guestbook */}
        <WishesSection />
      </main>

      {/* 8. Royal Red and Gold Footer */}
      <Footer />

      {/* Floating Scroll-to-Top, Audio, and Petals Controls */}
      <FloatingControls
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
      />
    </div>
  );
}
