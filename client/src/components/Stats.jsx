import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { statsAPI } from '../utils/api';

gsap.registerPlugin(ScrollTrigger);

const defaultStats = [
  { label: 'Projects Shipped', value: 30, suffix: '+' },
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Happy Clients', value: 20, suffix: '+' },
  { label: 'GitHub Stars', value: 500, suffix: '+' },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const [stats, setStats] = useState(defaultStats);
  const countersRef = useRef([]);
  const animated = useRef(false);

  useEffect(() => {
    statsAPI.get().then(data => {
      if (data) {
        setStats([
          { label: 'Projects Shipped', value: data.projects || 30, suffix: '+' },
          { label: 'Years Experience', value: data.yearsExperience || 4, suffix: '+' },
          { label: 'Messages Received', value: data.contacts || 20, suffix: '+' },
          { label: 'Skills Mastered', value: data.skills || 22, suffix: '' },
        ]);
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!countersRef.current.length) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        if (animated.current) return;
        animated.current = true;

        stats.forEach((stat, i) => {
          const el = countersRef.current[i];
          if (!el) return;
          gsap.fromTo({ val: 0 }, { val: stat.value }, {
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              el.textContent = Math.round(this.targets()[0].val) + stat.suffix;
            }
          });
        });

        gsap.fromTo(sectionRef.current.querySelectorAll('.stat-item'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
        );
      }
    });
  }, [stats]);

  return (
    <section ref={sectionRef} style={{
      padding: '80px clamp(24px, 6vw, 100px)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 60
      }}>
        {stats.map((stat, i) => (
          <div key={stat.label} className="stat-item" style={{ opacity: 0 }}>
            <div style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(56px, 8vw, 96px)',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <span ref={el => countersRef.current[i] = el}>0</span>
            </div>
            <div style={{
              marginTop: 8,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase'
            }}>{stat.label}</div>
            <div style={{
              marginTop: 12, width: 30, height: 1,
              background: 'linear-gradient(90deg, #FF4500, transparent)'
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}
