import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      autoRaf: false,
    });

    /*
     * ==========================================
     * LENIS → SCROLLTRIGGER
     * ==========================================
     *
     * Whenever Lenis updates the scroll position,
     * tell ScrollTrigger immediately.
     */

    lenis.on("scroll", ScrollTrigger.update);

    /*
     * ==========================================
     * GSAP TICKER
     * ==========================================
     *
     * Lenis runs from GSAP's ticker instead of
     * using its own animation loop.
     *
     * This keeps:
     *
     * Scroll
     *   ↓
     * Lenis
     *   ↓
     * GSAP
     *   ↓
     * ScrollTrigger
     *   ↓
     * Video
     *
     * inside one animation loop.
     */

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    /*
     * Prevent GSAP from artificially slowing down
     * after a dropped frame.
     */

    gsap.ticker.lagSmoothing(0);

    /*
     * ==========================================
     * CLEANUP
     * ==========================================
     */

    return () => {
      lenis.off("scroll", ScrollTrigger.update);

      gsap.ticker.remove(update);

      lenis.destroy();
    };
  }, []);
}

export default useLenis;