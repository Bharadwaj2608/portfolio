import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsAPI } from '../utils/api';

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_SKILLS = {
  frontend: [
    { name: 'React', proficiency: 95, color: '#61DAFB' },
    { name: 'JavaScript', proficiency: 88, color: '#3178C6' },
    { name: 'Three.js', proficiency: 80, color: '#00F5FF' },
    { name: 'Next.js', proficiency: 85, color: '#F8F8FF' },
    // { name: 'GSAP', proficiency: 82, color: '#88CE02' },
    // { name: 'Vue.js', proficiency: 75, color: '#4FC08D' },
  ],
  backend: [
    { name: 'Node.js', proficiency: 92, color: '#339933' },
    { name: 'Express', proficiency: 90, color: '#F8F8FF' },
    
    { name: 'REST APIs', proficiency: 95, color: '#FF6B35' },
    { name: 'Python', proficiency: 78, color: '#3776AB' },
  ],
  database: [
    { name: 'MongoDB', proficiency: 88, color: '#47A248' },
    { name: 'MySQL', proficiency: 80, color: '#4479A1' },
  ],
  devops: [
    { name: 'Docker', proficiency: 80, color: '#2496ED' },
    { name: 'Git' , proficiency: 92, color: '#F05032' },
  ],
};

export default function Skills() {
  const [skills, setSkills] = useState(FALLBACK_SKILLS);
  const [activeTab, setActiveTab] = useState('frontend');
  const sectionRef = useRef(null);
  const barsRef = useRef(null);

  useEffect(() => {
    skillsAPI.getAll().then(data => {
      if (data?.grouped && Object.keys(data.grouped).length) {
        setSkills(data.grouped);
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!barsRef.current) return;
    const bars = barsRef.current.querySelectorAll('.skill-bar-fill');
    gsap.fromTo(bars,
      { scaleX: 0 },
      {
        scaleX: 1, duration: 1.2, ease: 'power3.out', stagger: 0.06,
        scrollTrigger: { trigger: barsRef.current, start: 'top 80%', once: false }
      }
    );
  }, [activeTab, skills]);

  const tabs = Object.keys(skills);
  const current = skills[activeTab] || [];

  return (
    <section ref={sectionRef} style={{ padding: '120px clamp(24px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>03 / Expertise</div>
            <h2 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 0.9
            }}>
              MY SKILL<br />
              <span style={{
                background: 'linear-gradient(135deg, #00F5FF, #7B2FFF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>ARSENAL</span>
            </h2>

            <p style={{
              marginTop: 32, fontSize: 15, lineHeight: 1.7,
              color: 'rgba(248,248,255,0.45)', maxWidth: 440
            }}>
              1+ years of hands-on experience building production applications
              across the full stack. Constantly learning, constantly shipping.
            </p>

            {/* Category tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 48 }}>
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  padding: '14px 20px', borderRadius: 2,
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: activeTab === tab ? '#FF4500' : 'rgba(255,255,255,0.3)',
                  background: activeTab === tab ? 'rgba(255,69,0,0.06)' : 'transparent',
                  borderLeft: activeTab === tab ? '2px solid #FF4500' : '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right - skill bars */}
          <div ref={barsRef} style={{ paddingTop: 80 }}>
            {current.map((skill, i) => (
              <div key={skill.name} style={{ marginBottom: 32 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', marginBottom: 10
                }}>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                    fontWeight: 500, color: '#F8F8FF'
                  }}>{skill.name}</span>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                    color: skill.color || '#FF4500'
                  }}>{skill.proficiency}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: skill.proficiency + '%',
                      background: `linear-gradient(90deg, ${skill.color || '#FF4500'}, ${skill.color || '#FF6B00'}88)`,
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Floating tech icons */}
            <div style={{
              marginTop: 48, padding: '24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 4
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)',
                textTransform: 'uppercase', marginBottom: 16
              }}>Also proficient in</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['Figma', 'Nginx', 'Webpack', 'Tailwind'].map(t => (
                  <span key={t} className="tag-cyan" style={{
                    padding: '4px 10px', fontSize: 10,
                    background: 'rgba(0,245,255,0.06)',
                    border: '1px solid rgba(0,245,255,0.12)',
                    borderRadius: 2, fontFamily: 'JetBrains Mono, monospace',
                    color: '#00F5FF'
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
