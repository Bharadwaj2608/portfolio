import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 });
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animate);
    };

    const onEnter = () => ring.classList.add('hover');
    const onLeave = () => ring.classList.remove('hover');

    window.addEventListener('mousemove', onMove);

    // ← Fix: wait for DOM to be ready before querying
    const timeout = setTimeout(() => {
      document.querySelectorAll('a, button, .card-hover').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    }, 500);

    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor cursor-dot" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99999 }} />
      <div ref={ringRef} className="cursor cursor-ring" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 99998 }} />
    </>
  );
}
