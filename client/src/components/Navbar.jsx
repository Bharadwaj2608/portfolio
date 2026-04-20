import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '24px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
        transition: 'all 0.4s ease'
      }}>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32,
              background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              flexShrink: 0
            }} />
            <span style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 22, letterSpacing: '0.15em', color: '#F8F8FF'
            }}>BHARADWAJ</span>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {links.map(l => (
            <Link key={l.href} to={l.href} style={{ textDecoration: 'none' }}
              className={'nav-link' + (location.pathname === l.href ? ' active' : '')}>
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, padding: 4
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 1.5,
              background: '#F8F8FF',
              transition: 'all 0.3s ease'
            }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(5,5,8,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 40
        }}>
          {links.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontFamily: 'Bebas Neue, cursive',
                fontSize: 72, letterSpacing: '0.1em',
                color: location.pathname === l.href ? '#FF4500' : '#F8F8FF',
                lineHeight: 1
              }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}