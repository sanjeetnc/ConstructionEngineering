import Navbar from "./components/Navbar";
import ScrollVideo from "./components/ScrollVideo";
import SectionReveal from "./components/SectionReveal";

function App() {
  return (
    <main className="min-h-screen bg-[#101820] text-white">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <Navbar />

      {/* =========================================================
          CINEMATIC HERO / SCROLL VIDEO
      ========================================================= */}

      <ScrollVideo />

      {/* =========================================================
          ENGINEERING
      ========================================================= */}

      <SectionReveal
        id="engineering"
        className="relative overflow-hidden bg-[#101820] py-32 md:py-44"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            
            {/* Number */}
            <div data-reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]">
                01 — Engineering
              </p>

              <div className="h-px w-24 bg-white/20" />
            </div>

            {/* Content */}
            <div>
              <h2
                data-reveal
                className="max-w-5xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl"
              >
                PRECISION IN
                <br />
                EVERY DETAIL.
              </h2>

              <p
                data-reveal
                className="mt-10 max-w-2xl text-base leading-7 text-white/60 md:text-lg md:leading-8"
              >
                From planning and design to structural execution, we bring
                engineering expertise to every stage of the project.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div
          data-reveal
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10"
        />
      </SectionReveal>

      {/* =========================================================
          CONSTRUCTION
      ========================================================= */}

      <SectionReveal
        id="construction"
        className="relative overflow-hidden bg-[#17232d] py-32 md:py-44"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* Main heading */}
            <div>
              <p
                data-reveal
                className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]"
              >
                02 — Construction
              </p>

              <h2
                data-reveal
                className="max-w-5xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl"
              >
                BUILT FOR
                <br />
                PERFORMANCE.
              </h2>
            </div>

            {/* Description */}
            <div data-reveal>
              <div className="mb-8 h-px w-20 bg-[#c6a15b]" />

              <p className="max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
                We turn plans into lasting structures through disciplined
                execution, quality materials, and careful attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* Background architectural lines */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] opacity-20">
          <div className="absolute right-[15%] top-0 h-full w-px bg-white/10" />
          <div className="absolute right-[35%] top-0 h-full w-px bg-white/10" />
          <div className="absolute right-[55%] top-0 h-full w-px bg-white/10" />
        </div>
      </SectionReveal>

      {/* =========================================================
          BUILDING TYPES
      ========================================================= */}

      <SectionReveal
        className="relative overflow-hidden bg-[#101820] py-32 md:py-44"
      >
        <div
          id="services"
          className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16"
        >
          <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div data-reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]">
                03 — Building Types
              </p>

              <div className="h-px w-20 bg-white/20" />
            </div>

            <h2
              data-reveal
              className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl"
            >
              BUILDING FOR
              <br />
              EVERY PURPOSE.
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            {/* Residential */}
            <article
              data-reveal
              className="group min-h-[320px] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.03] md:p-10 lg:p-12"
            >
              <div className="mb-20 flex items-center justify-between">
                <span className="text-xs tracking-[0.3em] text-white/30">
                  01
                </span>

                <span className="text-xl text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c6a15b]">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-medium uppercase tracking-tight md:text-3xl">
                Residential
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
                Thoughtful spaces built for modern living.
              </p>
            </article>

            {/* Commercial */}
            <article
              data-reveal
              className="group min-h-[320px] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.03] md:p-10 lg:p-12"
            >
              <div className="mb-20 flex items-center justify-between">
                <span className="text-xs tracking-[0.3em] text-white/30">
                  02
                </span>

                <span className="text-xl text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c6a15b]">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-medium uppercase tracking-tight md:text-3xl">
                Commercial
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
                Functional environments designed for business.
              </p>
            </article>

            {/* Industrial */}
            <article
              data-reveal
              className="group min-h-[320px] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.03] md:p-10 lg:p-12"
            >
              <div className="mb-20 flex items-center justify-between">
                <span className="text-xs tracking-[0.3em] text-white/30">
                  03
                </span>

                <span className="text-xl text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c6a15b]">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-medium uppercase tracking-tight md:text-3xl">
                Industrial
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
                Durable structures built for demanding operations.
              </p>
            </article>
          </div>
        </div>
      </SectionReveal>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <SectionReveal
        id="projects"
        className="relative overflow-hidden bg-[#17232d] py-32 md:py-44"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div data-reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]">
                04 — Projects
              </p>

              <div className="h-px w-20 bg-white/20" />
            </div>

            <div>
              <h2
                data-reveal
                className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl"
              >
                BUILT.
                <br />
                PROVEN.
                <br />
                DELIVERED.
              </h2>

              <p
                data-reveal
                className="mt-10 max-w-2xl text-base leading-7 text-white/60 md:text-lg md:leading-8"
              >
                Explore selected projects that showcase our approach to
                engineering and construction.
              </p>
            </div>
          </div>

          {/* Project cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Project 01 */}
            <article
              data-reveal
              className="group relative min-h-[500px] overflow-hidden border border-white/10 bg-[#101820]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-6xl font-semibold tracking-[-0.06em] text-white/[0.04] md:text-8xl">
                    01
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#c6a15b]">
                    [PROJECT TYPE]
                  </span>

                  <span className="text-white/30 transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>

                <h3 className="text-3xl font-medium uppercase tracking-tight">
                  [PROJECT NAME]
                </h3>

                <p className="mt-2 text-sm text-white/40">
                  [LOCATION]
                </p>
              </div>
            </article>

            {/* Project 02 */}
            <article
              data-reveal
              className="group relative min-h-[500px] overflow-hidden border border-white/10 bg-[#101820]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-6xl font-semibold tracking-[-0.06em] text-white/[0.04] md:text-8xl">
                    02
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#c6a15b]">
                    [PROJECT TYPE]
                  </span>

                  <span className="text-white/30 transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>

                <h3 className="text-3xl font-medium uppercase tracking-tight">
                  [PROJECT NAME]
                </h3>

                <p className="mt-2 text-sm text-white/40">
                  [LOCATION]
                </p>
              </div>
            </article>
          </div>

          {/* Project note */}
          <p
            data-reveal
            className="mt-8 text-xs uppercase tracking-[0.2em] text-white/25"
          >
            Project content will be replaced with verified customer data.
          </p>
        </div>
      </SectionReveal>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <SectionReveal
        id="process"
        className="relative overflow-hidden bg-[#101820] py-32 md:py-44"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          <div className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div data-reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]">
                05 — Process
              </p>

              <div className="h-px w-20 bg-white/20" />
            </div>

            <h2
              data-reveal
              className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl"
            >
              FROM PLAN
              <br />
              TO COMPLETION.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {/* 01 */}
            <div
              data-reveal
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1fr] md:items-center md:py-12"
            >
              <span className="text-xs tracking-[0.3em] text-[#c6a15b]">
                01
              </span>

              <h3 className="text-3xl font-medium uppercase tracking-tight md:text-4xl">
                Plan
              </h3>

              <p className="max-w-md text-sm leading-6 text-white/50">
                Understand the vision and requirements.
              </p>
            </div>

            {/* 02 */}
            <div
              data-reveal
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1fr] md:items-center md:py-12"
            >
              <span className="text-xs tracking-[0.3em] text-[#c6a15b]">
                02
              </span>

              <h3 className="text-3xl font-medium uppercase tracking-tight md:text-4xl">
                Engineer
              </h3>

              <p className="max-w-md text-sm leading-6 text-white/50">
                Develop the right technical solution.
              </p>
            </div>

            {/* 03 */}
            <div
              data-reveal
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1fr] md:items-center md:py-12"
            >
              <span className="text-xs tracking-[0.3em] text-[#c6a15b]">
                03
              </span>

              <h3 className="text-3xl font-medium uppercase tracking-tight md:text-4xl">
                Build
              </h3>

              <p className="max-w-md text-sm leading-6 text-white/50">
                Execute with precision and control.
              </p>
            </div>

            {/* 04 */}
            <div
              data-reveal
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1fr] md:items-center md:py-12"
            >
              <span className="text-xs tracking-[0.3em] text-[#c6a15b]">
                04
              </span>

              <h3 className="text-3xl font-medium uppercase tracking-tight md:text-4xl">
                Deliver
              </h3>

              <p className="max-w-md text-sm leading-6 text-white/50">
                Complete with quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <SectionReveal
        id="about"
        className="relative overflow-hidden bg-[#17232d] py-32 md:py-44"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            <div data-reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]">
                06 — About
              </p>

              <div className="h-px w-20 bg-white/20" />
            </div>

            <div>
              <h2
                data-reveal
                className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl"
              >
                BUILT ON
                <br />
                EXPERTISE.
              </h2>

              <p
                data-reveal
                className="mt-12 max-w-2xl text-base leading-8 text-white/60 md:text-xl md:leading-9"
              >
                We combine engineering knowledge, construction experience,
                and a commitment to quality to deliver projects that stand
                the test of time.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* =========================================================
          CONTACT / CTA
      ========================================================= */}

      <SectionReveal
        id="contact"
        className="relative overflow-hidden bg-[#101820] py-32 md:py-52"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          <div className="border-t border-white/10 pt-16">

            <p
              data-reveal
              className="mb-10 text-xs font-medium uppercase tracking-[0.35em] text-[#c6a15b]"
            >
              07 — Start a Project
            </p>

            <h2
              data-reveal
              className="max-w-6xl text-5xl font-semibold uppercase leading-[0.85] tracking-[-0.05em] md:text-7xl lg:text-[9rem]"
            >
              HAVE A
              <br />
              PROJECT
              <br />
              IN MIND?
            </h2>

            <div
              data-reveal
              className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p className="max-w-xl text-base leading-7 text-white/50 md:text-lg">
                  Let's turn your vision into something real.
                </p>

                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/30">
                  [EMAIL]
                </p>
              </div>

              <button
                type="button"
                className="group flex w-fit items-center gap-5 border-b border-white/30 pb-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:border-[#c6a15b] hover:text-[#c6a15b]"
              >
                Start a Conversation

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/10 bg-[#101820]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              [COMPANY NAME]
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/30">
              Engineering & Construction
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.15em] text-white/25">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;