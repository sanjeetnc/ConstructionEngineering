import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Engineering",
    href: "#engineering",
    id: "engineering",
  },
  {
    label: "Construction",
    href: "#construction",
    id: "construction",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Process",
    href: "#process",
    id: "process",
  },
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
       * ==========================================
       * NAVBAR ALWAYS VISIBLE
       * ==========================================
       */

      setScrolled(currentScrollY > 40);

      /*
       * ==========================================
       * ACTIVE SECTION
       * ==========================================
       */

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let currentSection = "";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom >= window.innerHeight * 0.35
        ) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ==========================================
   * NAVIGATION
   * ==========================================
   */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          FIXED NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[9999]
          px-4
          pt-4
          md:px-6
          md:pt-5
        "
      >
        <nav
          className={`
            mx-auto
            flex
            h-[64px]
            max-w-[1500px]
            items-center
            justify-between
            rounded-full
            border
            px-3
            transition-all
            duration-500
            md:h-[70px]
            md:px-4
            ${
              scrolled
                ? "border-white/10 bg-[#101820]/90 shadow-2xl backdrop-blur-2xl"
                : "border-white/20 bg-[#101820]/60 backdrop-blur-xl"
            }
          `}
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <a
            href="#top"
            onClick={(event) =>
              handleNavigation(event, "#top")
            }
            className="group flex items-center gap-3 pl-1"
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                transition-all
                duration-300
                group-hover:border-white/50
              "
            >
              <span className="text-lg font-light text-white">
                +
              </span>
            </span>

            <span
              className="
                hidden
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white
                sm:block
              "
            >
              [COMPANY NAME]
            </span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      item.href,
                    )
                  }
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {/* Active indicator */}

                  <span
                    className={`
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[var(--accent)]
                      transition-all
                      duration-300
                      ${
                        active
                          ? "w-3 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(event) =>
                handleNavigation(
                  event,
                  "#contact",
                )
              }
              className="
                hidden
                items-center
                gap-2
                pr-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
                transition-opacity
                hover:opacity-60
                lg:flex
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

              Start a Project
            </a>

            {/* Mobile menu */}

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              onClick={() =>
                setMenuOpen((open) => !open)
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                md:hidden
              "
            >
              <span className="relative block h-4 w-4">
                <span
                  className={`
                    absolute
                    left-0
                    top-1/2
                    h-px
                    w-4
                    bg-white
                    transition-transform
                    duration-300
                    ${
                      menuOpen
                        ? "rotate-45"
                        : "-translate-y-[3px]"
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    left-0
                    top-1/2
                    h-px
                    w-4
                    bg-white
                    transition-transform
                    duration-300
                    ${
                      menuOpen
                        ? "-rotate-45"
                        : "translate-y-[3px]"
                    }
                  `}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[9998]
          bg-[#101820]
          transition-all
          duration-500
          md:hidden
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div
          className={`
            flex
            h-full
            flex-col
            justify-center
            px-8
            transition-transform
            duration-500
            ${
              menuOpen
                ? "translate-y-0"
                : "translate-y-8"
            }
          `}
        >
          <div className="mb-10">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Navigation
            </p>
          </div>

          <div>
            {navItems.map((item, index) => {
              const active =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      item.href,
                    )
                  }
                  className="group flex items-center border-b border-white/10 py-5"
                >
                  <span
                    className={`
                      mr-5
                      text-[9px]
                      ${
                        active
                          ? "text-[var(--accent)]"
                          : "text-white/25"
                      }
                    `}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={`
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      transition-all
                      duration-300
                      ${
                        active
                          ? "translate-x-2 text-white"
                          : "text-white/60 group-hover:translate-x-2 group-hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={(event) =>
              handleNavigation(
                event,
                "#contact",
              )
            }
            className="
              mt-10
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-white
            "
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

            Start a Project
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;