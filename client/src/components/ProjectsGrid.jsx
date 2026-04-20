import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsAPI } from '../utils/api';

gsap.registerPlugin(ScrollTrigger);

const FALLBACK = [
  {
    _id: '1', title: 'JobTrackr', category: 'fullstack', featured: true,
    description: 'AI-powered MERN job application tracker with smart status management and application analytics.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'JWT'],
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9ifGVufDB8MHwwfHx8MA%3D%3D',
    githubUrl: 'https://github.com/Bharadwaj2608/JobTracker'
  },
  {
    _id: '2', title: 'AI Pothole Detection', category: 'aiml', featured: true,
    description: 'Real-time road anomaly detection benchmarking YOLOv5, SSD, ResNet & CNN for smart city infrastructure.',
    techStack: ['Python', 'YOLOv5', 'TensorFlow', 'OpenCV', 'Scikit-learn'],
    thumbnail: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800',
    githubUrl: 'https://github.com/Bharadwaj2608'
  },
  {
    _id: '3', title: 'AI Doctor Chatbot', category: 'aiml', featured: true,
    description: 'NLP-powered medical chatbot that analyzes symptoms and provides preliminary health guidance.',
    techStack: ['Python', 'NLP', 'TensorFlow', 'Keras'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    githubUrl: 'https://github.com/Bharadwaj2608'
  },
  {
    _id: '4', title: 'AI Diet & Fitness Planner', category: 'fullstack', featured: false,
    description: 'Personalized AI system generating custom meal & workout plans from user BMI and fitness goals.',
    techStack: ['Python', 'Scikit-learn', 'React', 'Node.js', 'MongoDB'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    githubUrl: 'https://github.com/Bharadwaj2608'
  },
  {
    _id: '5', title: 'Farmer-MarketPlace', category: 'fullstack', featured: false,
    description: 'Personalized AI system which allows farmers to list their produce and connect with local buyers, optimizing supply chains and reducing waste.',
    techStack: [ 'React', 'Node.js', 'MongoDB','Gen-AI'],
    thumbnail: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhcm1lcnxlbnwwfDB8MHx8fDA%3D',
    githubUrl: 'https://github.com/Bharadwaj2608/Farmer-Market'
  }
];
const CATS = ['all', 'fullstack', 'aiml', 'frontend', 'backend', 'mobile', 'design'];

export default function ProjectsGrid({ limit, showFilter = true }) {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    projectsAPI.getAll({ limit: limit || 20 })
      .then(data => setProjects(data.projects?.length ? data.projects : FALLBACK))
      .catch(() => setProjects(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!gridRef.current || loading) return;
    gsap.fromTo(gridRef.current.querySelectorAll('.project-card'),
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true }
      }
    );
  }, [loading, filter]);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section ref={sectionRef} style={{ padding: '120px clamp(24px, 6vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>02 / Selected Work</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.9, letterSpacing: '0.01em'
            }}>
              MY PROJECTS
            </h2>
            {!limit && (
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                <span className="btn-outline" style={{ padding: '8px 20px', fontSize: 12 }}>
                  View All →
                </span>
              </Link>
            )}
          </div>
        </div>

        {/* Filter tabs */}
        {showFilter && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
            {CATS.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: '8px 20px', border: 'none', cursor: 'pointer', borderRadius: 2,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                background: filter === cat ? 'linear-gradient(135deg, #FF4500, #FF6B00)' : 'rgba(255,255,255,0.04)',
                color: filter === cat ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease',
                border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.06)'
              }}>
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: 24
        }}>
          {displayed.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);

  const onEnter = () => {
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.4 });
  };

  const onLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: 'power2.out' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.4 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card card-hover"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 4, overflow: 'hidden',
        opacity: 0
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src={project.thumbnail}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Overlay */}
        <div ref={overlayRef} style={{
          position: 'absolute', inset: 0, opacity: 0,
          background: 'linear-gradient(135deg, rgba(255,69,0,0.8), rgba(123,47,255,0.6))',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16
        }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener"
              style={{
                padding: '10px 20px', background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', textDecoration: 'none', borderRadius: 2,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.1em'
              }}>
              LIVE ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener"
              style={{
                padding: '10px 20px', background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', textDecoration: 'none', borderRadius: 2,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.1em'
              }}>
              CODE ↗
            </a>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: 'absolute', top: 16, left: 16,
            padding: '4px 10px', background: 'linear-gradient(135deg, #FF4500, #FF6B00)',
            borderRadius: 2, fontFamily: 'JetBrains Mono, monospace',
            fontSize: 9, letterSpacing: '0.15em', color: '#fff', textTransform: 'uppercase'
          }}>
            Featured
          </div>
        )}

        {/* Category */}
        <div style={{
          position: 'absolute', top: 16, right: 16,
          padding: '4px 10px', background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(10px)', borderRadius: 2,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)'
        }}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <h3 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 28, letterSpacing: '0.05em', color: '#F8F8FF'
          }}>{project.title}</h3>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em'
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(248,248,255,0.45)', marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.techStack?.slice(0, 4).map(tech => (
            <span key={tech} className="tag" style={{ fontSize: 10 }}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
