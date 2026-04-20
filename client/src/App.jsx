import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';
import Resume from './pages/Resume';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  useSmoothScroll();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <div className="noise" style={{ minHeight: '100vh', background: '#050508' }}>
        <Cursor />
        <ThreeBackground />
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
        {loaded && <AppContent />}
      </div>
    </BrowserRouter>
  );
}
