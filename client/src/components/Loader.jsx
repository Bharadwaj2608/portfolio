import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    let count = { val: 0 };

    tl.to(count, {
      val: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) counterRef.current.textContent = Math.round(count.val);
        if (barRef.current) barRef.current.style.width = count.val + '%';
      }
    })
    .to(textRef.current, { opacity: 0, y: -20, duration: 0.4 }, '-=0.2')
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: 'power4.inOut',
      onComplete
    });
  }, []);

  return (
    <div ref={loaderRef} style={{
      position: 'fixed', inset: 0, background: '#050508',
      zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <div ref={textRef} style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Bebas Neue, cursive',
          fontSize: 'clamp(48px, 10vw, 120px)',
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1
        }}>LOADING</div>
        <div style={{
          marginTop: 32,
          width: 300,
          height: 1,
          background: 'rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div ref={barRef} style={{
            position: 'absolute', left: 0, top: 0, height: '100%', width: 0,
            background: 'linear-gradient(90deg, #FF4500, #FF6B00)',
            transition: 'none'
          }} />
        </div>
        <div style={{
          marginTop: 16,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 13,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.1em',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>INITIALIZING</span>
          <span><span ref={counterRef}>0</span>%</span>
        </div>
      </div>
    </div>
  );
}
