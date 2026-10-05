import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  const [videoReady, setVideoReady] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let context: gsap.Context | null = null;

    const createExperience = () => {
      if (!video.duration || !Number.isFinite(video.duration)) {
        return;
      }

      setVideoReady(true);

      /*
       * ==========================================
       * VIDEO INITIALIZATION
       * ==========================================
       */

      video.pause();
      video.currentTime = 0;

      /*
       * ==========================================
       * GSAP CONTEXT
       * ==========================================
       */

      context = gsap.context(() => {
        /*
         * ==========================================
         * INITIAL STATES
         * ==========================================
         */

        gsap.set(
          [
            ".cinematic-eyebrow",
            ".cinematic-title",
            ".cinematic-description",
            ".cinematic-intro",
            ".stage-01",
            ".stage-02",
            ".stage-03",
            ".stage-04",
            ".cinematic-final",
          ],
          {
            willChange: "transform, opacity",
          },
        );

        /*
         * ==========================================
         * MASTER CINEMATIC TIMELINE
         * ==========================================
         *
         * ONE timeline
         * ONE ScrollTrigger
         * ONE pinned section
         *
         * The video is controlled directly by
         * ScrollTrigger progress.
         */

        const timeline = gsap.timeline({
          defaults: {
            ease: "none",
          },

          scrollTrigger: {
            trigger: section,
            start: "top top",

            /*
             * Long enough to create a cinematic
             * scroll experience.
             */
            end: "+=6000",

            pin: true,

            /*
             * IMPORTANT:
             *
             * We already use Lenis for smooth
             * scrolling, so ScrollTrigger should
             * follow the scroll position directly.
             */
            scrub: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              /*
               * ==================================
               * VIDEO SCRUB
               * ==================================
               */

              if (video.readyState < 1 || !video.duration) {
                return;
              }

              const progress = self.progress;

              const targetTime =
                progress * Math.max(video.duration - 0.001, 0);

              /*
               * Avoid repeatedly assigning the
               * exact same timestamp.
               */
              if (Math.abs(video.currentTime - targetTime) > 0.01) {
                video.currentTime = targetTime;
              }

              /*
               * ==================================
               * PROGRESS BAR
               * ==================================
               */

              if (progressBarRef.current) {
                progressBarRef.current.style.transform =
                  `scaleX(${progress})`;
              }

              /*
               * ==================================
               * COUNTER
               * ==================================
               */

              if (counterRef.current) {
                counterRef.current.textContent = Math.round(
                  progress * 100,
                )
                  .toString()
                  .padStart(2, "0");
              }
            },
          },
        });

        /*
         * ==========================================
         * INTRO
         * ==========================================
         */

        timeline

          .fromTo(
            ".cinematic-eyebrow",
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.08,
            },
          )

          .fromTo(
            ".cinematic-title",
            {
              opacity: 0,
              y: 70,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.12,
            },
            "<0.02",
          )

          .fromTo(
            ".cinematic-description",
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.08,
            },
            "<0.02",
          )

          /*
           * ========================================
           * INTRO EXIT
           * ========================================
           */

          .to(
            ".cinematic-intro",
            {
              opacity: 0,
              y: -60,
              duration: 0.08,
            },
            "+=0.10",
          )

          /*
           * ========================================
           * STAGE 01
           * ========================================
           */

          .fromTo(
            ".stage-01",
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.10,
            },
          )

          .to(
            ".stage-01",
            {
              opacity: 0,
              y: -35,
              duration: 0.08,
            },
            "+=0.12",
          )

          /*
           * ========================================
           * STAGE 02
           * ========================================
           */

          .fromTo(
            ".stage-02",
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.10,
            },
          )

          .to(
            ".stage-02",
            {
              opacity: 0,
              y: -35,
              duration: 0.08,
            },
            "+=0.12",
          )

          /*
           * ========================================
           * STAGE 03
           * ========================================
           */

          .fromTo(
            ".stage-03",
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.10,
            },
          )

          .to(
            ".stage-03",
            {
              opacity: 0,
              y: -35,
              duration: 0.08,
            },
            "+=0.12",
          )

          /*
           * ========================================
           * STAGE 04
           * ========================================
           */

          .fromTo(
            ".stage-04",
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.10,
            },
          )

          .to(
            ".stage-04",
            {
              opacity: 0,
              y: -30,
              duration: 0.08,
            },
            "+=0.14",
          )

          /*
           * ========================================
           * FINAL
           * ========================================
           */

          .fromTo(
            ".cinematic-final",
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.12,
            },
            "+=0.04",
          );

        /*
         * ==========================================
         * REFRESH
         * ==========================================
         */

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      }, section);
    };

    /*
     * ============================================
     * VIDEO METADATA
     * ============================================
     */

    if (video.readyState >= 1) {
      createExperience();
    } else {
      video.addEventListener("loadedmetadata", createExperience, {
        once: true,
      });
    }

    /*
     * ============================================
     * CLEANUP
     * ============================================
     */

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        createExperience,
      );

      context?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 h-screen overflow-hidden bg-black"
    >
      {/* ==========================================
          VIDEO
      =========================================== */}

      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover ${
            videoReady
              ? "opacity-100"
              : "opacity-0"
          }`}
          muted
          playsInline
          preload="auto"
          src="/videos/hero-construction-scrub.mp4"
        />

        {/* Cinematic grade */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />

        {/* Bottom cinematic gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* Left cinematic gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
      </div>

      {/* ==========================================
          TOP INFORMATION
      =========================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="container-premium flex items-center justify-between pt-32">
          <div className="cinematic-eyebrow flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--accent)]" />

            <span className="eyebrow text-white/75">
              Construction / Architecture
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/50 md:block">
            Scroll Experience
          </span>
        </div>
      </div>

      {/* ==========================================
          INTRO
      =========================================== */}

      <div className="cinematic-intro pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="container-premium pb-16 md:pb-20">
          <div className="max-w-6xl">
            <p className="cinematic-eyebrow eyebrow mb-6 text-white/60">
              From ground / to vision
            </p>

            <h1 className="cinematic-title display-xl text-white">
              BUILDING
              <br />
              <span className="text-white/85">
                THE FUTURE.
              </span>
            </h1>

            <p className="cinematic-description body-lg mt-8 max-w-xl text-white/70">
              Every structure begins with an idea.
              Every idea becomes real through precision,
              engineering and execution.
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          STAGE 01
      =========================================== */}

      <div className="stage-01 pointer-events-none absolute inset-0 z-20 flex items-center opacity-0">
        <div className="container-premium">
          <div className="max-w-xl">
            <p className="eyebrow mb-5 text-[var(--accent)]">
              01 — Vision
            </p>

            <h2 className="display-md text-white">
              EVERY PROJECT
              <br />
              STARTS HERE.
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          STAGE 02
      =========================================== */}

      <div className="stage-02 pointer-events-none absolute inset-0 z-20 flex items-center opacity-0">
        <div className="container-premium">
          <div className="ml-auto max-w-xl">
            <p className="eyebrow mb-5 text-[var(--accent)]">
              02 — Structure
            </p>

            <h2 className="display-md text-white">
              ENGINEERING
              <br />
              THE IMPOSSIBLE.
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          STAGE 03
      =========================================== */}

      <div className="stage-03 pointer-events-none absolute inset-0 z-20 flex items-center opacity-0">
        <div className="container-premium">
          <div className="max-w-xl">
            <p className="eyebrow mb-5 text-[var(--accent)]">
              03 — Precision
            </p>

            <h2 className="display-md text-white">
              BUILT WITH
              <br />
              PURPOSE.
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          STAGE 04
      =========================================== */}

      <div className="stage-04 pointer-events-none absolute inset-0 z-20 flex items-center opacity-0">
        <div className="container-premium">
          <div className="ml-auto max-w-xl text-right">
            <p className="eyebrow mb-5 text-[var(--accent)]">
              04 — Completion
            </p>

            <h2 className="display-md text-white">
              MADE TO
              <br />
              ENDURE.
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          FINAL STATEMENT
      =========================================== */}

      <div className="cinematic-final pointer-events-none absolute inset-x-0 bottom-0 z-20 opacity-0">
        <div className="container-premium pb-16 md:pb-20">
          <p className="eyebrow mb-5 text-[var(--accent)]">
            Built to last
          </p>

          <p className="max-w-xl text-xl leading-relaxed text-white md:text-2xl">
            From the first line drawn on the ground
            to the final light switched on.
          </p>
        </div>
      </div>

      {/* ==========================================
          PROGRESS
      =========================================== */}

      <div className="pointer-events-none absolute bottom-7 left-0 right-0 z-30">
        <div className="container-premium">
          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
              00
            </span>

            <div className="relative h-px flex-1 overflow-hidden bg-white/20">
              <div
                ref={progressBarRef}
                className="cinematic-progress-bar absolute inset-0 origin-left scale-x-0 bg-white"
              />
            </div>

            <span
              ref={counterRef}
              className="w-5 text-right text-[9px] uppercase tracking-[0.2em] text-white/50"
            >
              00
            </span>
          </div>
        </div>
      </div>

      {/* ==========================================
          LOADING
      =========================================== */}

      {!videoReady && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#151515]">
          <div className="text-center">
            <div className="mx-auto mb-5 h-px w-16 overflow-hidden bg-white/20">
              <div className="h-full w-1/2 animate-pulse bg-white" />
            </div>

            <p className="eyebrow text-white/50">
              Loading experience
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ScrollVideo;