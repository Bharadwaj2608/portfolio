import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="page-content" style={{ paddingTop: 120 }}>
      <div ref={heroRef} style={{ padding: '60px clamp(24px, 6vw, 100px) 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Portfolio</div>
          <h1 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(64px, 12vw, 160px)', lineHeight: 0.88,
            letterSpacing: '0.01em'
          }}>
            ALL MY<br />
            <span style={{
              background: 'linear-gradient(135deg, #FF4500, #FF6B00, #7B2FFF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>WORK</span>
          </h1>
          <p style={{
            marginTop: 24, fontSize: 15, lineHeight: 1.7,
            color: 'rgba(248,248,255,0.4)', maxWidth: 500
          }}>
            A collection of projects built with passion and precision.
            Each one solving real problems with modern technology.
          </p>
        </div>
      </div>
      <ProjectsGrid showFilter={true} />
    </div>
  );
}
