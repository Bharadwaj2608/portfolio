import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Resume() {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current.querySelectorAll('.fade-in'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  const styles = {
    block: {
      padding: '24px 28px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: 4,
      marginBottom: 20,
    },
    heading: {
      fontFamily: 'Bebas Neue, cursive',
      fontSize: 22,
      letterSpacing: '0.06em',
      color: '#F8F8FF',
      marginBottom: 4,
    },
    sub: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      color: '#00F5FF',
      marginBottom: 12,
    },
    lbl: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#FF4500',
      marginBottom: 4,
    },
    secTitle: {
      fontFamily: 'Bebas Neue, cursive',
      fontSize: 36,
      letterSpacing: '0.05em',
      color: '#F8F8FF',
      marginBottom: 20,
      paddingBottom: 10,
      borderBottom: '1px solid rgba(255,69,0,0.3)',
    },
    bulletWrap: {
      display: 'flex',
      gap: 10,
      marginBottom: 8,
      alignItems: 'flex-start',
    },
    bulletDot: {
      color: '#FF4500',
      fontSize: 10,
      marginTop: 4,
      flexShrink: 0,
    },
    bulletText: {
      fontSize: 14,
      color: 'rgba(248,248,255,0.55)',
      lineHeight: 1.7,
    },
    downloadBtn: {
      display: 'inline-block',
      padding: '12px 28px',
      background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
      color: '#fff',
      textDecoration: 'none',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: 2,
      marginTop: 16,
    },
  };

  function SkillRow(props) {
    return (
      <div style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#FF4500', minWidth: 120, flexShrink: 0 }}>
          {props.label}
        </span>
        <span style={{ fontSize: 14, color: 'rgba(248,248,255,0.6)', lineHeight: 1.5 }}>
          {props.value}
        </span>
      </div>
    );
  }

  function Bullet(props) {
    return (
      <div style={styles.bulletWrap}>
        <span style={styles.bulletDot}>&#9670;</span>
        <span style={styles.bulletText}>{props.text}</span>
      </div>
    );
  }

  function ProjectBlock(props) {
    return (
      <div style={{ ...styles.block, borderLeft: '3px solid ' + props.color, marginBottom: 20 }}>
        <div style={styles.lbl}>{props.tech}</div>
        <div style={styles.heading}>{props.title}</div>
        {props.bullets.map(function(b, i) {
          return <Bullet key={i} text={b} />;
        })}
      </div>
    );
  }

  return (
    <div ref={pageRef} className="page-content" style={{ paddingTop: 120, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>

        <div className="fade-in" style={{ marginBottom: 48 }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: '#FF4500', textTransform: 'uppercase', marginBottom: 12 }}>
                Resume / CV
              </div>
              <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 80, lineHeight: 0.88, margin: 0 }}>
                BHARADWAJ
              </h1>
              <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 80, lineHeight: 0.88, margin: 0, background: 'linear-gradient(135deg, #FF4500, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PISUPATI
              </h1>
            </div>
            <a href="/Bharadwaj_Resume_TCS.docx" download style={styles.downloadBtn}>
              Download Resume
            </a>

          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 28 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Vadodara, Gujarat</span>
            <a href="tel:+918200343785" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#00F5FF', textDecoration: 'none' }}>+91 8200343785</a>
            <a href="mailto:bharadwajpisupati5@gmail.com" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#00F5FF', textDecoration: 'none' }}>bharadwajpisupati5@gmail.com</a>
            <a href="https://linkedin.com/in/bharadwaj-pisupati-87b516274" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#00F5FF', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://github.com/Bharadwaj2608" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#00F5FF', textDecoration: 'none' }}>GitHub</a>
          </div>

          <div style={{ marginTop: 28, padding: '18px 24px', borderLeft: '3px solid #FF4500', background: 'rgba(255,69,0,0.04)', borderRadius: 2 }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(248,248,255,0.55)', margin: 0 }}>
              Computer Science Engineering student with hands-on experience in web application development, data processing, and backend systems. Skilled in JavaScript ES6+, React.js, and Node.js with practical exposure to REST API development and database management. Experience in data preprocessing, visualization, and workflow automation using Python.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40 }}>

          <div>
            <div className="fade-in" style={{ marginBottom: 40 }}>
              <div style={styles.secTitle}>Skills</div>
              <SkillRow label="Languages" value="Python, JavaScript ES6+" />
              <SkillRow label="AI / ML" value="Machine Learning, Deep Learning, NLP, Computer Vision" />
              <SkillRow label="Frontend" value="React.js, HTML5, CSS3" />
              <SkillRow label="Backend" value="Node.js, Express.js" />
              <SkillRow label="Database" value="MongoDB" />
              <SkillRow label="API and Auth" value="REST APIs, JWT, Bcrypt" />
              <SkillRow label="Tools" value="Git, GitHub, TensorFlow, Keras, Scikit-learn" />
            </div>

            <div className="fade-in">
              <div style={styles.secTitle}>Education</div>
              <div style={{ ...styles.block, borderLeft: '3px solid #FF4500' }}>
                <div style={styles.heading}>B.Tech in Computer Science</div>
                <div style={styles.sub}>GSFC University, Vadodara</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>2022 - 2026</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, padding: '2px 10px', background: 'rgba(255,69,0,0.1)', border: '1px solid rgba(255,69,0,0.2)', borderRadius: 2, color: '#FF6B00' }}>CGPA: 6.71</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, padding: '2px 10px', background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.15)', borderRadius: 2, color: '#00F5FF' }}>No Backlogs</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="fade-in" style={{ marginBottom: 40 }}>
              <div style={styles.secTitle}>Experience</div>

              <div style={{ ...styles.block, borderLeft: '3px solid #FF4500' }}>
                <div style={styles.lbl}>Dec 2023 - Jan 2024</div>
                <div style={styles.heading}>Data Engineering Intern</div>
                <div style={styles.sub}>Brainy Beams Pvt. Ltd.</div>
                <Bullet text="Performed data preprocessing, validation, and visualization to support analytical workflows." />
                <Bullet text="Automated repetitive data-processing tasks using Python, improving efficiency and reliability." />
                <Bullet text="Built predictive models using Scikit-learn, gaining exposure to model testing and evaluation." />
              </div>

              <div style={{ ...styles.block, borderLeft: '3px solid #7B2FFF' }}>
                <div style={styles.lbl}>June 2023</div>
                <div style={styles.heading}>AI and Cybersecurity Intern</div>
                <div style={styles.sub}>In-House Internship</div>
                <Bullet text="Learned core concepts of software security, AI fundamentals, and system reliability." />
                <Bullet text="Gained exposure to secure system thinking and responsible handling of application data." />
              </div>
            </div>

            <div className="fade-in">
              <div style={styles.secTitle}>Projects</div>

              <ProjectBlock
                color="#FF4500"
                tech="MERN Stack - AI - JWT - 2024"
                title="JobTrackr"
                bullets={[
                  'Built a full-stack AI-powered job application tracker using the MERN stack with JWT authentication and secure REST APIs.',
                  'Integrated AI to analyze job descriptions and match them against user profile with actionable insights.',
                  'Implemented kanban-style pipeline with status management and real-time dashboard analytics.',
                ]}
              />

              <ProjectBlock
                color="#00F5FF"
                tech="Python - YOLOv5 - SSD - ResNet - CNN - Team: 4"
                title="AI Pothole Detection Model"
                bullets={[
                  'Built a real-time pothole detection system benchmarking YOLOv5, SSD, ResNet, and CNN for road anomaly detection.',
                  'Contributed to model comparison, evaluation metrics, and result analysis for smart city infrastructure.',
                ]}
              />

              <ProjectBlock
                color="#7B2FFF"
                tech="Python - NLP - TensorFlow - Keras - Team: 4"
                title="AI Doctor Chatbot"
                bullets={[
                  'Developed an AI-powered medical chatbot that analyzes user symptoms and provides preliminary health guidance using NLP.',
                  'Contributed to model training and conversational flow design, reducing dependency on manual consultations.',
                ]}
              />

              <ProjectBlock
                color="#FF6B00"
                tech="Python - Scikit-learn - React - Node.js - Team: 4"
                title="AI Diet and Fitness Planner"
                bullets={[
                  'Designed a personalized AI system generating customized meal and workout plans based on user health data, BMI, and fitness goals.',
                  'Integrated ML algorithms to adapt recommendations dynamically with React UI integration.',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}