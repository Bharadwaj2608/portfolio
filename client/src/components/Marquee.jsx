import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ITEMS = [
  'React', 'Node.js', 'Express', 'MongoDB',
  'Three.js', 'GSAP', 'TypeScript', 'Docker',
  'Redis', 'GraphQL', 'AWS', 'PostgreSQL',
];

export default function Marquee({ reverse = false }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: reverse ? totalWidth : -totalWidth,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    const onEnter = () => tweenRef.current.timeScale(0.3);
    const onLeave = () => tweenRef.current.timeScale(1);
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, [reverse]);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ overflow: 'hidden', width: '100%', padding: '20px 0' }}>
      <div ref={trackRef} style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', willChange: 'transform' }}>
        {doubled.map(function(item, i) {
          return (
            <span key={i} style={{
              display: 'inline-block',
              padding: '0 28px',
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 22,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.18)',
              lineHeight: 1,
              userSelect: 'none',
            }}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}