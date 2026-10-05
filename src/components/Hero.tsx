import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const video = videoRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!hero || !content || !video || !scrollIndicator) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          video,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 2.2,
            ease: "power2.out",
          },
          0,
        )
        .fromTo(
          ".hero-eyebrow",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          0.4,
        )
        .fromTo(
          ".hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
          },
          0.55,
        )
        .fromTo(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          1,
        )
        .fromTo(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          1.1,
        )
        .fromTo(
          scrollIndicator,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          1.25,
        );

      gsap.to(content, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(video, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-[#080808]"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover brightness-[1.08] contrast-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/videos/hero-construction.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/5" />
      </div>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="container-premium relative z-10 w-full pb-12 pt-40 md:pb-16 lg:pb-20"
      >
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="hero-eyebrow mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--accent)]" />

              <p className="eyebrow text-white/70">
                Architecture / Engineering / Construction
              </p>
            </div>

            <div className="overflow-hidden">
              <h1 className="display-xl max-w-7xl">
                <span className="hero-title-line block">
                  BUILDING
                </span>

                <span className="hero-title-line block text-white/80">
                  THE FUTURE.
                </span>
              </h1>
            </div>

            <div className="hero-description mt-8 max-w-xl">
              <p className="body-lg text-white/70">
                We create enduring spaces through precision,
                engineering and uncompromising construction quality.
              </p>
            </div>

            <div className="hero-actions mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary">
                Explore Projects
              </a>

              <a
                href="#contact"
                className="button-secondary border-white/25"
              >
                Start a Project
              </a>
            </div>
          </div>

          {/* Hero Metadata */}
          <div className="hidden min-w-[220px] border-l border-white/15 pl-6 lg:block">
            <p className="eyebrow text-white/40">Current Focus</p>

            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Building spaces that combine architectural intent
              with structural precision.
            </p>

            <div className="mt-7 h-px w-full bg-white/15" />

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                Scroll
              </span>

              <span className="text-[10px] text-white/40">
                01 — 04
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
          Scroll to explore
        </span>

        <span className="relative h-12 w-px overflow-hidden bg-white/20">
          <span className="absolute left-0 top-0 h-5 w-full animate-pulse bg-white" />
        </span>
      </div>

      {/* Mobile bottom marker */}
      <div className="absolute bottom-6 left-5 z-20 flex items-center gap-3 md:hidden">
        <span className="h-px w-8 bg-[var(--accent)]" />

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
          Scroll
        </span>
      </div>
    </section>
  );
}

export default Hero;