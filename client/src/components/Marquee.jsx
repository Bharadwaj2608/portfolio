import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ITEMS = [
  'React', '✦', 'Node.js', '✦', 'Express', '✦', 'MongoDB', '✦',
  'Three.js', '✦', 'GSAP', '✦', 'TypeScript', '✦', 'Docker', '✦',
  'Redis', '✦', 'GraphQL', '✦', 'AWS', '✦', 'PostgreSQL', '✦',
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
      modifiers: {
        x: gsap.utils.unitize(x =>
          reverse
            ? parseFloat(x) % totalWidth
            : parseFloat(x) % -totalWidth
        )
      }
    });

    const onEnter = () => tweenRef.current.timeScale(0.3);
    const onLeave = () => tweenRef.current.timeScale(1);
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    return () => {
      tweenRef.current?.kill();
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, [reverse]);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ overflow: 'hidden', width: '100%', padding: '20px 0' }}>
      <div ref={trackRef} style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', willChange: 'transform' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'inline-block',
            padding: '0 28px',
            fontFamily: item === '✦' ? 'serif' : 'Bebas Neue, cursive',
            fontSize: item === '✦' ? 12 : 22,
            letterSpacing: item === '✦' ? 0 : '0.15em',
            color: item === '✦' ? '#FF4500' : 'rgba(255,255,255,0.18)',
            lineHeight: 1,
            userSelect: 'none',
            transition: 'color 0.3s',
            cursor: 'default',
          }}
          onMouseEnter={e => e.target.style.color = '#F8F8FF'}
          onMouseLeave={e => e.target.style.color = item === '✦' ? '#FF4500' : 'rgba(255,255,255,0.18)'}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
