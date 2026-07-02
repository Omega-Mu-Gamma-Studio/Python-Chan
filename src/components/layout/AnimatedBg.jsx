import { useEffect, useRef } from 'react';
import './AnimatedBg.css';

/**
 * AnimatedBg
 * Two-layer background:
 *   Layer 1 — Aurora: CSS-animated radial blobs, pure CSS, zero JS
 *   Layer 2 — Particles: canvas, ~60 slow-drifting nodes with faint edges
 * Both are decorative only — pointer-events: none, z-index: 0
 */

const PARTICLE_COUNT = 55;
const CONNECTION_DIST = 130;

// Canvas drawing can't read CSS custom properties directly (they're
// hex strings, not rgba), so we resolve the current theme's colors
// once per effect run and convert them to rgb components here.
function hexToRgb(hex, fallback) {
  const clean = (hex || '').trim().replace('#', '');
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return fallback;
  const bigint = parseInt(clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

const AnimatedBg = ({ themeClass }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Resolve the current theme's particle colors from the live
    // CSS variables (these already reflect whichever .theme-* class
    // is applied on .app-layout), with sane fallbacks.
    const styles = getComputedStyle(canvas);
    const primaryLight = hexToRgb(
      styles.getPropertyValue('--color-primary-light'),
      { r: 127, g: 217, b: 196 }
    );
    const amber = hexToRgb(
      styles.getPropertyValue('--color-amber'),
      { r: 217, g: 164, b: 65 }
    );

    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    // Spawn particles — fireflies over water: mostly theme primary, a few amber
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:   Math.random() * W,
      y:   Math.random() * H,
      vx:  (Math.random() - 0.5) * 0.18,
      vy:  (Math.random() - 0.5) * 0.18,
      r:   Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.1,
      amber: Math.random() < 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${primaryLight.r}, ${primaryLight.g}, ${primaryLight.b}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw dots — fireflies over water
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const c = p.amber ? amber : primaryLight;
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${p.opacity})`;
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [themeClass]);

  return (
    <div className="animated-bg" aria-hidden="true">
      {/* Aurora layer — pure CSS */}
      <div className="aurora">
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
        <div className="aurora__blob aurora__blob--4" />
      </div>
      {/* Particle layer — canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  );
};

export default AnimatedBg;