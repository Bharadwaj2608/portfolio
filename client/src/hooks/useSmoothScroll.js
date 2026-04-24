import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useSmoothScroll() {
  useEffect(() => {
    let lenisInstance;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis');
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (progress) => Math.min(1, 1.001 - Math.pow(2, -10 * progress)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        lenisInstance.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((timestamp) => {
          lenisInstance.raf(timestamp * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      } catch (error) {
        console.warn('Lenis smooth scroll not available:', error);
      }
    };

    initLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        gsap.ticker.remove(lenisInstance.raf);
      }
    };
  }, []);
}