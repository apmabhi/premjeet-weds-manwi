import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  vy: number;
  vx: number;
  color: string;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  vy: number;
  vx: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayProgress: number;
  petalColor: string;
  shadowColor: string;
  alpha: number;
}

export const PetalsAndParticles: React.FC<{ isEnabled?: boolean }> = ({ isEnabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Golden dust particles
    const particleCount = Math.min(38, Math.floor(width / 35));
    const particles: Particle[] = [];
    const goldPalette = ['#ffd700', '#f3e5ab', '#e8c86d', '#fff8dc', '#d4af37'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        vy: -(Math.random() * 0.4 + 0.15), // Float gently upward
        vx: (Math.random() - 0.5) * 0.3,
        color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
      });
    }

    // Floating Rose Petals
    const petalColors = [
      { fill: '#c2185b', shadow: '#880e4f' }, // Deep royal rose
      { fill: '#d81b60', shadow: '#ad1457' }, // Ruby velvet
      { fill: '#ad1457', shadow: '#4a0018' }, // Crimson
      { fill: '#e91e63', shadow: '#c2185b' }, // Blush rose
      { fill: '#f48fb1', shadow: '#d81b60' }, // Soft pink
    ];

    const petalCount = Math.min(18, Math.floor(width / 75));
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const palette = petalColors[Math.floor(Math.random() * petalColors.length)];
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 10,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.025,
        vy: Math.random() * 0.75 + 0.6, // Gental downward drift
        vx: (Math.random() - 0.5) * 0.4,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmplitude: Math.random() * 1.5 + 1.0,
        swayProgress: Math.random() * Math.PI * 2,
        petalColor: palette.fill,
        shadowColor: palette.shadow,
        alpha: Math.random() * 0.35 + 0.55,
      });
    }

    // Draw an organic realistic rose petal curve
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;

      // Realistic petal gradient
      const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
      grad.addColorStop(0, p.shadowColor);
      grad.addColorStop(0.5, p.petalColor);
      grad.addColorStop(1, '#ffc1e3');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      // Left curve
      ctx.bezierCurveTo(-p.size * 0.75, -p.size * 0.6, -p.size * 0.9, p.size * 0.5, 0, p.size);
      // Right curve
      ctx.bezierCurveTo(p.size * 0.9, p.size * 0.5, p.size * 0.75, -p.size * 0.6, 0, -p.size);
      ctx.closePath();
      ctx.fill();

      // Subtle center vein
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.8);
      ctx.quadraticCurveTo(p.size * 0.1, 0, 0, p.size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw golden particles
      for (const p of particles) {
        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.1 || p.alpha >= 0.85) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 6;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw falling petals
      for (const petal of petals) {
        petal.swayProgress += petal.swaySpeed;
        petal.x += Math.sin(petal.swayProgress) * petal.swayAmplitude + petal.vx;
        petal.y += petal.vy;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > height + 30) {
          petal.y = -30;
          petal.x = Math.random() * width;
        }

        drawPetal(petal);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.88 }}
      aria-hidden="true"
    />
  );
};
