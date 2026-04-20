import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactAPI } from '../utils/api';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll('.reveal'),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
      }
    );
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      await contactAPI.submit(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      gsap.fromTo(formRef.current,
        { scale: 0.98 },
        { scale: 1, duration: 0.4, ease: 'back.out' }
      );
    } catch (err) {
      setStatus('error');
      setErrMsg(err.message || 'Something went wrong');
    }
  };

  return (
    <section ref={sectionRef} id="contact" style={{ padding: '120px clamp(24px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="section-label reveal" style={{ marginBottom: 16 }}>05 / Contact</div>
            <h2 className="reveal" style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.9
            }}>
              LET'S BUILD<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF4500, #7B2FFF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>TOGETHER</span>
            </h2>

            <p className="reveal" style={{
              marginTop: 32, fontSize: 15, lineHeight: 1.7,
              color: 'rgba(248,248,255,0.45)', maxWidth: 400
            }}>
              Have a project in mind? I'm available for freelance work and
              full-time opportunities. Let's create something extraordinary.
            </p>

            {/* Info cards */}
            <div className="reveal" style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Email', value: 'bharadwajpisupati5@gmail.com', icon: '✉' },
                { label: 'Location', value: 'Vadodara, Gujarat, India', icon: '◉' },
                { label: 'Availability', value: 'Open to opportunities', icon: '◈' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 4
                }}>
                  <span style={{ color: '#FF4500', fontSize: 16 }}>{item.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                      letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)',
                      textTransform: 'uppercase', marginBottom: 2
                    }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: '#F8F8FF', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal" style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              {/* {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                <a key={s} href="#" style={{
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 2, textDecoration: 'none',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                  letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={e => {
                  e.target.style.borderColor = '#FF4500';
                  e.target.style.color = '#FF4500';
                }} onMouseLeave={e => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.target.style.color = 'rgba(255,255,255,0.4)';
                }}>
                  {s} ↗
                </a>
              ))} */}
            </div>
          </div>

          {/* Right - form */}
          <div ref={formRef} className="reveal" style={{
            padding: '40px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 4
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
                <div style={{
                  fontFamily: 'Bebas Neue, cursive', fontSize: 36,
                  letterSpacing: '0.08em', marginBottom: 12,
                  background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                }}>MESSAGE SENT!</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
                  I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline"
                  style={{ marginTop: 32 }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)', marginBottom: 8
                    }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="John Doe" required className="form-input" />
                  </div>
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)', marginBottom: 8
                    }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="bharadwajpisupati5@mail.com" required className="form-input" />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block', fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)', marginBottom: 8
                  }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Project collaboration" required className="form-input" />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{
                    display: 'block', fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)', marginBottom: 8
                  }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..." required rows={5}
                    className="form-input" style={{ resize: 'vertical', minHeight: 130 }} />
                </div>

                {status === 'error' && (
                  <div style={{
                    padding: '12px 16px', marginBottom: 16,
                    background: 'rgba(255,69,0,0.1)',
                    border: '1px solid rgba(255,69,0,0.2)',
                    borderRadius: 2, fontSize: 13, color: '#FF4500'
                  }}>{errMsg}</div>
                )}

                <button type="submit" className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={status === 'loading'}>
                  <span>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  {status !== 'loading' && <span>→</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
