import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      padding: '60px clamp(24px, 6vw, 100px) 40px',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      background: 'rgba(0,0,0,0.3)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 60
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Bebas Neue, cursive', fontSize: 32,
              letterSpacing: '0.1em', marginBottom: 12,
              background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Bharadwaj's Portfolio</div>
            <p style={{
              fontSize: 13, color: 'rgba(255,255,255,0.3)',
              maxWidth: 260, lineHeight: 1.6
            }}>
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: 20
              }}>Navigate</div>
              {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Work'], ['/contact', 'Contact']].map(([to, label]) => (
                <div key={to} style={{ marginBottom: 12 }}>
                  <Link to={to} style={{
                    textDecoration: 'none', fontSize: 14,
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'color 0.3s'
                  }} onMouseEnter={e => e.target.style.color = '#F8F8FF'}
                     onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
                    {label}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)', marginBottom: 20
              }}>Connect</div>
              {[
 // REPLACE the social anchors with real URLs:
{ label: 'GitHub',   href: 'https://github.com/Bharadwaj2608' },
{ label: 'LinkedIn', href: 'https://linkedin.com/in/bharadwaj-pisupati-87b516274' },
{ label: 'Email',    href: 'mailto:bharadwajpisupati5@gmail.com' },
].map(s => (
  <div key={s.label} style={{ marginBottom: 12 }}>
    <a href={s.url} target="_blank" rel="noopener" style={{
      textDecoration: 'none', fontSize: 14,
      color: 'rgba(255,255,255,0.4)',
      transition: 'color 0.3s'
    }} onMouseEnter={e => e.target.style.color = '#FF4500'}
       onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
      {s.label} ↗
    </a>
  </div>
))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.04)', flexWrap: 'wrap', gap: 16
        }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em'
          }}>
            © {year} Bharadwaj's Portfolio — ALL RIGHTS RESERVED
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em'
          }}>
            Built with React · Node.js · MongoDB · Three.js
          </span>
        </div>
      </div>
    </footer>
  );
}
