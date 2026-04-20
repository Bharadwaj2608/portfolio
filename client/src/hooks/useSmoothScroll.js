import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useSmoothScroll() {
  useEffect(() => {
    let lenis;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis');
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      } catch (e) {
        // Lenis not available, fall back to native scroll
        console.warn('Lenis smooth scroll not available, using native scroll');
      }
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
      }
    };
  }, []);
}
