import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);
  const lineRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(titleRef.current.querySelectorAll('.line'),
      { y: '110%', opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1 }
    )
    .fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4'
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5'
    )
    .fromTo(ctaRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }, '-=0.4'
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }, '-=0.2'
    );

    // Parallax on scroll
    gsap.to(titleRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '0 clamp(24px, 6vw, 100px)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grid decoration */}
      <div className="grid-lines" style={{ opacity: 0.5 }} />

      {/* Side label */}
      <div style={{
        position: 'absolute', left: 40, top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10, letterSpacing: '0.25em',
        color: 'rgba(255,255,255,0.2)',
        whiteSpace: 'nowrap', userSelect: 'none'
      }}>
        FULL STACK DEVELOPER · 2024
      </div>

      <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', paddingTop: 100 }}>

        {/* Badge */}
        <div ref={badgeRef} style={{ marginBottom: 32, opacity: 0 }}>
          <span className="tag" style={{ fontSize: 11 }}>
            ◉ AVAILABLE FOR WORK
          </span>
        </div>

        {/* Main title */}
        <div ref={titleRef} style={{ overflow: 'hidden' }}>
          <div className="line" style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(72px, 13vw, 200px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            color: '#F8F8FF',
            display: 'block'
          }}>
            CRAFTING
          </div>
          <div className="line" style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(72px, 13vw, 200px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            background: 'linear-gradient(135deg, #FF4500, #FF6B00, #7B2FFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block'
          }}>
            DIGITAL
          </div>
          <div className="line" style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(72px, 13vw, 200px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            color: '#F8F8FF',
            display: 'block',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px rgba(248,248,255,0.4)'
          }}>
            EXPERIENCES
          </div>
        </div>

        {/* Divider */}
        <div ref={lineRef} style={{
          height: 1, background: 'linear-gradient(90deg, #FF4500, transparent)',
          width: '40%', marginTop: 40, transformOrigin: 'left'
        }} />

        {/* Sub */}
        <p ref={subRef} style={{
          marginTop: 32, maxWidth: 520,
          fontSize: 16, lineHeight: 1.7,
          color: 'rgba(248,248,255,0.5)',
          fontWeight: 400, opacity: 0
        }}>
          Full-stack developer & AI enthusiast specializing in React, Node.js & MongoDB.
I build scalable web apps and intelligent AI systems — from real-time trackers
to computer vision models.
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{
          marginTop: 48, display: 'flex',
          alignItems: 'center', gap: 20, flexWrap: 'wrap'
        }}>
          <a href="/projects" className="btn-primary">
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a href="/contact" className="btn-outline">
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Tech stack row */}
        <div style={{ marginTop: 72, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          
{['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'TensorFlow'].map((tech, i) => (
            <div key={tech} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 6
            }}>
              <span style={{
                width: 4, height: 4, borderRadius: '50%',
                background: i % 2 === 0 ? '#FF4500' : '#00F5FF',
                display: 'inline-block'
              }} />
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{
        position: 'absolute', bottom: 40, right: 40, opacity: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8
      }}>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)'
        }}>SCROLL</span>
        <div style={{
          width: 1, height: 60,
          background: 'linear-gradient(180deg, rgba(255,69,0,0.6), transparent)'
        }} />
      </div>

      {/* Corner decoration */}
      <div style={{
        position: 'absolute', top: 120, right: 80,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11, color: 'rgba(255,255,255,0.08)',
        lineHeight: 1.8, textAlign: 'right'
      }}>
        <div>React · Node.js · Express</div>
        <div>MongoDB · Three.js · GSAP</div>
        <div>Docker · AWS · PostgreSQL</div>
      </div>
    </section>
  );
}
