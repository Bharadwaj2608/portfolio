import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '../components/Marquee';

gsap.registerPlugin(ScrollTrigger);


// REPLACE timelineData array with:
const timelineData = [
  {
    year: '2023',
    role: 'AI & Cybersecurity Intern',
    company: 'In-House Internship',
    desc: 'Learned core concepts of software security, AI fundamentals, and system reliability. Gained exposure to secure system thinking and responsible handling of application data.',
  },
  {
    year: '2023–24',
    role: 'Data Engineering Intern',
    company: 'Brainy Beams Pvt. Ltd.',
    desc: 'Performed data preprocessing, validation, and visualization to support analytical workflows. Automated repetitive data tasks with Python and built predictive models using Scikit-learn.',
  },
  {
    year: '2024',
    role: 'Full-Stack & AI Projects',
    company: 'GSFC University / Self',
    desc: 'Built JobTrackr (MERN + AI), AI Pothole Detection (YOLOv5/CNN), AI Doctor Chatbot (NLP), and AI Diet & Fitness Planner. Focused on bridging web development with intelligent systems.',
  },
  {
    year: '2026',
    role: 'B.Tech in CSE (Expected)',
    company: 'GSFC University, Vadodara',
    desc: 'Graduating with specialization in full-stack development, machine learning, and computer vision. CGPA: 6.71 | No Backlogs.',
  },
];

const values = [
  { icon: '◈', title: 'Clean Code', desc: 'Code is read more than written. Clarity, consistency, and maintainability are non-negotiable in every PR.' },
  { icon: '◉', title: 'Performance First', desc: 'Every millisecond counts. I obsess over bundle sizes, lazy loading, and database query optimization.' },
  { icon: '✦', title: 'Design Sensibility', desc: 'Technical skill without aesthetic awareness produces tools, not experiences. I care deeply about both.' },
  { icon: '▲', title: 'Continuous Learning', desc: 'The web moves fast. I ship fast, learn fast, and adapt faster. Currently deep-diving ML × web integrations.' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current.querySelectorAll('.hero-reveal'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
    );

    ScrollTrigger.create({
      trigger: '.timeline-wrap',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.timeline-item',
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.14, ease: 'power3.out' }
        );
      }
    });

    ScrollTrigger.create({
      trigger: '.values-wrap',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.value-card',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
        );
      }
    });
  }, []);

  return (
    <div className="page-content" ref={ref} style={{ paddingTop: 120 }}>

      {/* Hero */}
      <section style={{ padding: '60px clamp(24px, 6vw, 100px) 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-reveal section-label" style={{ marginBottom: 16 }}>01 / About Me</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div>
              <h1 className="hero-reveal" style={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: 'clamp(64px, 10vw, 130px)', lineHeight: 0.88
              }}>
                HELLO,<br />I'M A<br />
                <span style={{ background: 'linear-gradient(135deg, #FF4500, #7B2FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MERN Stack Developer</span>
              </h1>
              <p className="hero-reveal" style={{ marginTop: 36, fontSize: 15, lineHeight: 1.85, color: 'rgba(248,248,255,0.5)', maxWidth: 480 }}>
               I'm Bharadwaj Pisupati, a Computer Science Engineering student at GSFC University,
  Vadodara (2022–2026) with hands-on experience in full-stack web development and AI/ML systems.
  I specialize in React.js, Node.js, Express, and MongoDB, with practical exposure to
  Python-based ML pipelines and REST API development.
              </p>
              <p className="hero-reveal" style={{ marginTop: 16, fontSize: 15, lineHeight: 1.85, color: 'rgba(248,248,255,0.5)', maxWidth: 480 }}>
               Outside of shipping features, I build AI-powered apps — from NLP chatbots to computer
  vision models. Currently exploring the intersection of intelligent systems and modern web.

              </p>
              <div className="hero-reveal" style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
                <a href="/contact" className="btn-primary"><span>Work With Me</span><span>→</span></a>
                <a href="/resume.pdf" target="_blank" rel="noopener" className="btn-outline"><span>Download CV</span></a>
              </div>
            </div>

            <div className="hero-reveal" style={{ position: 'relative' }}>
              <div style={{
                width: '100%', paddingBottom: '115%', position: 'relative',
                background: 'linear-gradient(135deg, rgba(255,69,0,0.08), rgba(123,47,255,0.06))',
                border: '1px solid rgba(255,69,0,0.12)', borderRadius: 4, overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', inset: 20, border: '1px solid rgba(255,255,255,0.04)', borderRadius: 2 }} />
                <div style={{ position: 'absolute', top: 36, left: 36, fontFamily: 'Bebas Neue, cursive', fontSize: 56, letterSpacing: '0.05em', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}>DEV</div>
                <div style={{ position: 'absolute', bottom: 36, left: 36, right: 36, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, lineHeight: 1.9, color: 'rgba(255,255,255,0.12)' }}>
                  <div><span style={{ color: 'rgba(123,47,255,0.5)' }}>const</span> <span style={{ color: 'rgba(0,245,255,0.4)' }}>dev</span> = {'{'}</div>
                  <div style={{ paddingLeft: 20 }}>name: <span style={{ color: 'rgba(255,69,0,0.5)' }}>"Your Name"</span>,</div>
                  <div style={{ paddingLeft: 20 }}>stack: <span style={{ color: 'rgba(255,69,0,0.5)' }}>"MERN + Three.js"</span>,</div>
                  <div style={{ paddingLeft: 20 }}>available: <span style={{ color: 'rgba(0,245,255,0.5)' }}>true</span></div>
                  <div>{'}'}</div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: -16, right: -16, padding: '10px 18px', background: 'linear-gradient(135deg, #FF4500, #FF6B00)', borderRadius: 2, fontFamily: 'Bebas Neue, cursive', fontSize: 13, letterSpacing: '0.12em', boxShadow: '0 10px 40px rgba(255,69,0,0.4)' }}>4+ YRS EXP</div>
              <div style={{ position: 'absolute', bottom: 24, left: -16, padding: '10px 18px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(0,245,255,0.2)', borderRadius: 2, backdropFilter: 'blur(12px)', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', color: '#00F5FF' }}>30+ PROJECTS SHIPPED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '4px 0', background: 'rgba(0,0,0,0.2)' }}>
        <Marquee />
        <Marquee reverse />
      </div>

      {/* Values */}
      <section style={{ padding: '120px clamp(24px, 6vw, 100px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>02 / Philosophy</div>
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 0.9, marginBottom: 64 }}>HOW I WORK</h2>
          <div className="values-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} className="value-card" style={{
                padding: '36px 32px', background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, opacity: 0,
                transition: 'border-color 0.3s, background 0.3s', cursor: 'default'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,69,0,0.2)'; e.currentTarget.style.background = 'rgba(255,69,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                <div style={{ fontSize: 28, marginBottom: 20, color: '#FF4500' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 26, letterSpacing: '0.06em', marginBottom: 12, color: '#F8F8FF' }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(248,248,255,0.4)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '0 clamp(24px, 6vw, 100px) 140px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>03 / Experience</div>
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 0.9, marginBottom: 80 }}>MY JOURNEY</h2>
          <div className="timeline-wrap" style={{ position: 'relative', paddingLeft: 140 }}>
            <div style={{ position: 'absolute', left: 92, top: 8, bottom: 8, width: 1, background: 'linear-gradient(180deg, #FF4500, rgba(255,69,0,0.05))' }} />
            {timelineData.map((item, i) => (
              <div key={i} className="timeline-item" style={{ position: 'relative', marginBottom: 56, opacity: 0 }}>
                <div style={{ position: 'absolute', left: -140, fontFamily: 'Bebas Neue, cursive', fontSize: 24, color: '#FF4500', letterSpacing: '0.06em', paddingTop: 6 }}>{item.year}</div>
                <div style={{ position: 'absolute', left: -52, width: 10, height: 10, borderRadius: '50%', background: '#FF4500', marginTop: 10, boxShadow: '0 0 0 4px rgba(255,69,0,0.12), 0 0 20px rgba(255,69,0,0.35)' }} />
                <div style={{ padding: '28px 32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <h3 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 26, letterSpacing: '0.05em', color: '#F8F8FF' }}>{item.role}</h3>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em', color: '#00F5FF', padding: '4px 12px', background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.15)', borderRadius: 2 }}>{item.company}</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(248,248,255,0.45)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '100px clamp(24px, 6vw, 100px)', borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 24 }}>Ready to collaborate?</div>
          <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.9, marginBottom: 32 }}>
            LET'S BUILD<br />
            <span style={{ background: 'linear-gradient(135deg, #FF4500, #7B2FFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SOMETHING</span>
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-primary"><span>Get In Touch</span><span>→</span></a>
            <a href="/projects" className="btn-outline"><span>See My Work</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
