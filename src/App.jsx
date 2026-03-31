import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ContactSection from "./components/ContactSection";
import { Routes, Route, Link } from "react-router-dom";
import UserAgreement from "./pages/UserAgreement";
import PrivacyPolicy from "./pages/PrivacyPolicy";

/* ======================= USER AGREEMENT ======================== */
export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user-agreement" element={<UserAgreement />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

/* ============================= APP ============================= */
function Homepage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <SiteNav />
      <main className="relative w-full overflow-hidden">
        <section
          id="home"
          className="relative min-h-[92vh] w-full overflow-hidden"
        >
          <HeroWithCallouts />
        </section>

        <AboutSection />
        <FeaturedProjectsSection />
        <ContactSection />
        <footer className="border-t border-cyan-500/10 bg-black px-5 py-12 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
            {/* Left Side */}
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <img
                  src="/001.mainlogo-b.png"
                  alt="Tumbletech"
                  className="h-8 w-auto"
                />
              </div>

              <p className="mt-5 text-sm leading-7 text-cyan-100/70">
                Tumbletech is an automation, AI development, and web development
                consulting firm operating in the Philippines.
              </p>

              <p className="mt-4 text-sm text-cyan-300">
                admin@tumbletech.dev
              </p>

              <div className="mt-5">
                <SocialIconsMobile />
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-10 text-sm text-cyan-100/75 md:grid-cols-3">
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Navigate
                </div>

                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="transition hover:text-cyan-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="transition hover:text-cyan-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="transition hover:text-cyan-200">
                      Featured Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="transition hover:text-cyan-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Services
                </div>

                <ul className="space-y-2">
                  <li>Automation</li>
                  <li>AI Agents</li>
                  <li>Websites</li>
                  <li>SaaS</li>
                </ul>
              </div>

              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Legal
                </div>

                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="transition hover:text-cyan-200"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user-agreement"
                      className="transition hover:text-cyan-200"
                    >
                      User Agreement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl border-t border-cyan-500/10 pt-6 text-center text-xs text-cyan-100/40">
            © {new Date().getFullYear()} Tumbletech. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ============================= NAV ============================= */
function SiteNav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const services = [
    {
      id: "automation",
      title: "Automate Your Business",
      items: [
        {
          label: "Workflow Automation (n8n / Make / Zapier)",
          href: "#svc-automation",
        },
        {
          label: "System Integration (Sheets, CRMs, APIs)",
          href: "#svc-automation",
        },
        { label: "Dashboards & Reporting", href: "#svc-automation" },
      ],
    },
    {
      id: "idea",
      title: "From Idea to App",
      items: [
        { label: "MVP Strategy & Roadmapping", href: "#svc-idea" },
        { label: "Prototyping (No-code / Low-code)", href: "#svc-idea" },
        { label: "Custom SaaS Build (select scope)", href: "#svc-idea" },
      ],
    },
    {
      id: "web",
      title: "Web Apps & Websites",
      items: [
        { label: "Business Websites & Landing Pages", href: "#svc-web" },
        { label: "Web Applications & Client Portals", href: "#svc-web" },
        { label: "E-commerce & Payments", href: "#svc-web" },
      ],
    },
    {
      id: "ai",
      title: "AI-Powered Solutions",
      items: [
        { label: "Chatbots & Assistants", href: "#svc-ai" },
        { label: "Predictive Insights & Analytics", href: "#svc-ai" },
        { label: "AI-driven Workflow Enhancements", href: "#svc-ai" },
      ],
    },
  ];

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex flex-shrink-0 items-center gap-3">
          <img
            src="/001.mainlogo-b.png"
            alt="Tumbletech"
            className="h-8 w-auto"
          />
        </div>

        <ul className="hidden flex-1 items-center justify-center gap-8 text-cyan-300 lg:flex">
          <li>
            <a href="#home" className="hover:text-cyan-200">
              Home
            </a>
          </li>

          <li
            className="relative"
            ref={menuRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="inline-flex items-center gap-1 hover:text-cyan-200"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                className={`transition ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M5 7l5 6 5-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="absolute left-1/2 z-50 mt-4 w-[720px] -translate-x-1/2 rounded-xl border border-cyan-500/20 bg-black/80 shadow-lg shadow-cyan-900/20 backdrop-blur"
                  role="menu"
                >
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {services.map((group) => (
                      <div
                        key={group.id}
                        className="rounded-lg border border-cyan-500/15 p-3"
                      >
                        <div className="mb-2 font-medium text-cyan-200">
                          {group.title}
                        </div>
                        <ul className="space-y-1.5 text-sm text-cyan-100/90">
                          {group.items.map((it, idx) => (
                            <li key={idx}>
                              <a
                                href={it.href}
                                className="block rounded px-2 py-1 hover:bg-cyan-400/10 hover:text-cyan-100"
                                onClick={() => setServicesOpen(false)}
                              >
                                {it.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-200">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-200">
              Featured Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-200">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="hidden flex-shrink-0 items-center gap-4 lg:flex">
          <SocialIcons />
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/5 text-cyan-200 transition hover:bg-cyan-400/10 lg:hidden"
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-cyan-500/10 bg-black/95 lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 md:px-6">
              <a
                href="#home"
                onClick={closeAllMenus}
                className="rounded-xl px-4 py-3 text-base text-cyan-100/85 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Home
              </a>

              <div className="rounded-xl border border-cyan-500/15 bg-cyan-500/[0.03] p-3">
                <div className="mb-3 px-1 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Services
                </div>
                <div className="space-y-3">
                  {services.map((group) => (
                    <div key={group.id}>
                      <div className="mb-1 px-1 text-sm font-medium text-cyan-200">
                        {group.title}
                      </div>
                      <div className="space-y-1">
                        {group.items.map((it, idx) => (
                          <a
                            key={idx}
                            href={it.href}
                            onClick={closeAllMenus}
                            className="block rounded-lg px-3 py-2 text-sm text-cyan-100/85 transition hover:bg-cyan-400/10 hover:text-cyan-100"
                          >
                            {it.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#about"
                onClick={closeAllMenus}
                className="rounded-xl px-4 py-3 text-base text-cyan-100/85 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={closeAllMenus}
                className="rounded-xl px-4 py-3 text-base text-cyan-100/85 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Featured Projects
              </a>

              <a
                href="#contact"
                onClick={closeAllMenus}
                className="rounded-xl px-4 py-3 text-base text-cyan-100/85 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Contact Us
              </a>

              <div className="pt-2">
                <SocialIconsMobile />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ===================== SOCIAL ICONS ===================== */
function SocialIcons() {
  return (
    <div className="hidden items-center gap-4 text-cyan-300 md:flex">
      <a
        href="https://www.facebook.com/profile.php?id=61585680125154"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-200"
        aria-label="Facebook"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/tumbletech-inc-94787839b"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-200"
        aria-label="LinkedIn"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z" />
        </svg>
      </a>

      <a
        href="http://www.youtube.com/@Tumbletech-k1c"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-200"
        aria-label="YouTube"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17.6 2.8 12 2.8 12 2.8s-5.6 0-8.6.2c-.4 0-1.3.1-2.1.9-.6.7-.8 2.3-.8 2.3S0 8 0 9.9v1.8c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.7.2 7.2.2 7.2.2s5.6 0 8.6-.2c.4 0 1.3-.1 2.1-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7V9.9c0-1.9-.2-3.7-.2-3.7zM9.5 14.6V7.8l6.3 3.4-6.3 3.4z" />
        </svg>
      </a>
    </div>
  );
}

function SocialIconsMobile() {
  return (
    <div className="flex items-center gap-4 px-4 py-2 text-cyan-300">
      <a
        href="https://www.facebook.com/profile.php?id=61585680125154"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-200"
        aria-label="Facebook"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/tumbletech-inc-94787839b"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-200"
        aria-label="LinkedIn"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z" />
        </svg>
      </a>

      <a
        href="http://www.youtube.com/@Tumbletech-k1c"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-200"
        aria-label="YouTube"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17.6 2.8 12 2.8 12 2.8s-5.6 0-8.6.2c-.4 0-1.3.1-2.1.9-.6.7-.8 2.3-.8 2.3S0 8 0 9.9v1.8c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.7.2 7.2.2 7.2.2s5.6 0 8.6-.2c.4 0 1.3-.1 2.1-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7V9.9c0-1.9-.2-3.7-.2-3.7zM9.5 14.6V7.8l6.3 3.4-6.3 3.4z" />
        </svg>
      </a>
    </div>
  );
}

/* ===================== HERO + CALLOUTS (RESPONSIVE) ===================== */
function HeroWithCallouts() {
  const [showCallouts, setShowCallouts] = useState(false);
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState({});
  const spin = useAnimation();
  const wrapRef = useRef(null);
  const [dims, setDims] = useState({ w: 1920, h: 1080 });

  useEffect(() => {
    spin.start({ rotate: 360 }, { repeat: Infinity, ease: "linear", duration: 8 });
    const t = setTimeout(() => setShowCallouts(true), 2000);
    return () => clearTimeout(t);
  }, [spin]);

  useEffect(() => {
    const onDown = (e) => {
      if (active && !e.target.closest(".card-trigger, .card-panel")) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [active]);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDims({ w: width, h: height });
      }
    });
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const isMobile = dims.w < 1024;
  const isDesktop = dims.w >= 1280;

  const layoutDesktop = {
    center: { x: 0.5, y: 0.46 },
    boxes: [
      {
        id: "auto",
        label: "Automate Your Business",
        box: { x: 0.083, y: 0.13, w: 0.146, h: 70 },
      },
      {
        id: "idea",
        label: "From Idea to App",
        box: { x: 0.083, y: 0.398, w: 0.135, h: 70 },
      },
      {
        id: "web",
        label: "Web Apps & Websites",
        box: { x: 0.615, y: 0.148, w: 0.156, h: 70 },
      },
      {
        id: "ai",
        label: "AI-Powered Solutions",
        box: { x: 0.615, y: 0.565, w: 0.156, h: 70 },
      },
    ],
  };

  const layoutTablet = {
    center: { x: 0.5, y: 0.48 },
    boxes: [
      {
        id: "auto",
        label: "Automate Your Business",
        box: { x: 0.06, y: 0.16, w: 0.3, h: 64 },
      },
      {
        id: "idea",
        label: "From Idea to App",
        box: { x: 0.06, y: 0.44, w: 0.28, h: 64 },
      },
      {
        id: "web",
        label: "Web Apps & Websites",
        box: { x: 0.64, y: 0.2, w: 0.32, h: 64 },
      },
      {
        id: "ai",
        label: "AI-Powered Solutions",
        box: { x: 0.64, y: 0.6, w: 0.32, h: 64 },
      },
    ],
  };

  const layout = isDesktop ? layoutDesktop : layoutTablet;

  const narratives = {
    auto:
      "Free your team from repetitive, time-consuming tasks by letting technology handle them for you. From streamlining workflows and integrating apps to setting up smart triggers and dashboards, automation reduces errors, saves time, and lets you focus on growth.",
    idea:
      "Turn your vision into a working product step by step. We help you validate ideas, design user experiences, and build applications that are ready to launch. From concept sketches to deployed solutions, we bring structure and speed to the journey of making your idea real.",
    web:
      "Build fast, secure, and scalable digital experiences tailored to your needs. From sleek landing pages to complex web apps, we design and develop solutions that look great, perform across devices, and grow with your business.",
    ai:
      "Harness the power of artificial intelligence to work smarter, not harder. From chatbots and intelligent assistants to predictive insights and workflow automation, we design AI solutions that adapt to your business needs, streamline operations, and unlock new opportunities.",
  };

  const labels = {
    auto: "Automate Your Business",
    idea: "From Idea to App",
    web: "Web Apps & Websites",
    ai: "AI-Powered Solutions",
  };

  const pxBox = (fb) => ({
    x: fb.x * dims.w,
    y: fb.y * dims.h,
    w: fb.w * dims.w,
    h: fb.h,
  });

  const center = useMemo(
    () => ({ x: layout.center.x * dims.w, y: layout.center.y * dims.h }),
    [layout.center.x, layout.center.y, dims.w, dims.h]
  );

  const startPointForBox = (boxPx) => {
    const isLeft = boxPx.x + boxPx.w / 2 < center.x;
    const inset = 8;
    return {
      x: isLeft ? boxPx.x + boxPx.w - inset : boxPx.x + inset,
      y: boxPx.y + boxPx.h / 2,
    };
  };

  const endOnCircle = (start, r = Math.min(dims.w, dims.h) * 0.045 + 60) => {
    const dx = center.x - start.x;
    const dy = center.y - start.y;
    const mag = Math.hypot(dx, dy) || 1;
    return { x: center.x - (dx / mag) * r, y: center.y - (dy / mag) * r };
  };

  const toggleMobileCard = (id) => {
    setMobileOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      ref={wrapRef}
      className={`relative w-full border-t border-cyan-500/10 ${
        isMobile
          ? "h-auto min-h-0 overflow-visible px-4 py-6"
          : "h-[calc(100vh-80px)] overflow-hidden md:h-[calc(100vh-88px)]"
      }`}
    >
      {!isMobile && (
        <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
          <motion.img
            animate={spin}
            src="/002.favicon-b.png"
            alt="Tumbletech Spinning Logo"
            className="h-28 w-28 origin-center md:h-36 md:w-36 lg:h-40 lg:w-40"
            style={{ transformOrigin: "center" }}
          />
        </div>
      )}

      {isMobile && (
        <div className="mx-auto max-w-5xl space-y-4">
          {["auto", "idea", "web", "ai"].map((id) => (
            <div
              key={id}
              className="overflow-hidden rounded-xl border border-cyan-400/40 bg-black/60"
            >
              <button
                type="button"
                onClick={() => toggleMobileCard(id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-lg text-white"
              >
                <span className="leading-snug">{labels[id]}</span>
                <span
                  className={`shrink-0 text-cyan-300 transition-transform duration-300 ${
                    mobileOpen[id] ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <AnimatePresence initial={false}>
                {mobileOpen[id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 text-base leading-8 text-cyan-100/90">
                      {narratives[id]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="flex justify-center pb-2 pt-4">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
              src="/002.favicon-b.png"
              alt="Tumbletech Spinning Logo"
              className="h-24 w-24 sm:h-28 sm:w-28"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </div>
      )}

      {!isMobile && showCallouts && (
        <>
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            preserveAspectRatio="none"
          >
            {layout.boxes.map((c, i) => {
              const b = pxBox(c.box);
              const start = startPointForBox(b);
              const end = endOnCircle(start);
              return (
                <Connector
                  key={`line-${c.id}`}
                  start={start}
                  end={end}
                  delay={0.15 + i * 0.12}
                />
              );
            })}
          </svg>

          {layout.boxes.map((c, i) => {
            const b = pxBox(c.box);
            const hasCard = narratives[c.id] !== undefined;
            const cls =
              "absolute z-20 flex items-center justify-center rounded-lg border border-cyan-400/60 text-white text-[15px] lg:text-lg tracking-wide shadow-[0_0_0_1px_rgba(56,189,248,0.25)] transition hover:border-cyan-300 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.35)]";
            const style = { left: b.x, top: b.y, width: b.w, height: b.h };

            const motionProps = {
              initial: { opacity: 0, y: 12, scale: 0.98 },
              animate: { opacity: 1, y: 0, scale: 1 },
              transition: {
                delay: 0.22 + i * 0.12,
                type: "spring",
                stiffness: 240,
                damping: 24,
              },
            };

            return hasCard ? (
              <motion.button
                key={c.id}
                type="button"
                onClick={() => setActive(active === c.id ? null : c.id)}
                className={`card-trigger ${cls}`}
                style={style}
                {...motionProps}
              >
                {c.label}
              </motion.button>
            ) : (
              <motion.a
                key={c.id}
                href="#services"
                className={cls}
                style={style}
                {...motionProps}
              >
                {c.label}
              </motion.a>
            );
          })}

          <AnimatePresence>
            {layout.boxes.map((c) => {
              const b = pxBox(c.box);
              if (active !== c.id) return null;

              return (
                <motion.div
                  key={`${c.id}-card`}
                  className="card-panel absolute z-30 max-w-[420px] rounded-xl border border-cyan-400/40 bg-black/70 px-5 py-4 leading-relaxed text-cyan-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur"
                  style={{ left: b.x, top: b.y + b.h + 10 }}
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                >
                  <div className="text-sm">{narratives[c.id]}</div>
                  <div className="mt-3 h-[2px] w-16 bg-cyan-400/70" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </>
      )}
    </section>
  );
}

/* ===================== ABOUT SECTION ===================== */
function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-cyan-500/10 bg-black px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-8 md:p-12">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          About
        </div>

        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          About Tumbletech
        </h2>

        <p className="mt-6 text-sm leading-8 text-cyan-100/80 md:text-base">
          <span className="font-medium text-white">
            Tumbletech is an automation, AI development, and web development
            consulting firm operating in the Philippines.
          </span>{" "}
          We help businesses, founders, and organizations turn ideas, manual
          workflows, and operational bottlenecks into working systems.
        </p>

        <p className="mt-5 text-sm leading-8 text-cyan-100/70 md:text-base">
          From workflow automation and AI-powered solutions to full-stack web
          applications, our focus is practical technology — tools that reduce
          friction, improve execution, and move projects forward.
        </p>

        <div className="mt-8 h-[2px] w-16 bg-cyan-400/70" />
      </div>
    </section>
  );
}

/* ======================= FEATURED PROJECTS ======================= */
  function FeaturedProjectsSection() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = [
      {
        title: "Automation",
        key: "automation",
        text: "Workflow automation, integrations, reporting systems, lead capture flows, and operational pipelines that reduce manual work.",
        projects: [
          {title: "AI Lead Triage & Follow-Up System",
            image: "/projects/automation/ai-lead-triage.jpg",
            video: "https://www.youtube.com/embed/d6ANuYft4u4",
            narrative: [
              "Captures incoming leads and evaluates them based on fit and urgency.",
              "Helps businesses prioritize serious inquiries and avoid slow follow-up.",
              "Built to turn scattered lead handling into a more structured workflow.",
            ],
          },
          {
            title: "Lot Readiness Check",
            image: "/projects/automation/lot-readiness-check.jpg",
            video: "",
            narrative: [
              "A workflow concept designed to assess site readiness before deeper engagement.",
              "Helps surface early red flags that may affect feasibility or buyer decisions.",
              "Built to make pre-checking more systematic and less manual.",
            ],
          },
          {
            title: "Pre-Sales Qualification AI",
            image: "/projects/automation/pre-sales-qualification-ai.jpg",
            video: "https://www.youtube.com/embed/By8R9cPqcPE",
            narrative: [
              "Qualifies prospects before they consume too much sales time.",
              "Supports better screening by identifying fit, readiness, and intent.",
              "Designed to reduce wasted effort and improve response quality.",
            ],
          },
          {
            title: "Proposal Draft Generator",
            image: "/projects/automation/proposal-draft-generator.jpg",
            video: "",
           narrative: [
              "Turns meeting notes and project requirements into a proposal immediately after the discussion ends.",
              "Helps contractors or consultants review, print, or send a proposal while the client is still present.",
              "Reduces forgotten details, incorrect assumptions, and delays between the meeting and the signed proposal.",
            ],
          },
          {
            title: "Employee Attendance Tracker",
            image: "/projects/automation/employee-attendance-tracker.jpg",
            video: "",
            narrative: [
              "Tracks attendance records through a cleaner digital workflow.",
              "Reduces manual monitoring and simplifies review of logged entries.",
              "Built as practical internal operations tool for small teams.",
            ],
          },
        ],
      },
      {
        title: "AI Agents Development",
        key: "ai-agents",
        text: "Custom AI assistants, triage agents, follow-up agents, support agents, and intelligent workflows tailored to business use cases.",
        projects: [],
      },
      {
        title: "Websites",
        key: "websites",
        text: "Business websites, landing pages, showcase sites, portals, and web experiences built for clarity, speed, and credibility.",
        projects: [],
      },
      {
        title: "SaaS",
        key: "saas",
        text: "Internal tools, MVPs, dashboards, subscription-ready systems, and software products designed around real operational problems.",
        projects: [],
      },
    ];

    const handleCategoryClick = (key) => {
      setActiveCategory((prev) => (prev === key ? null : key));
    };

    const activeCategoryData = categories.find(
      (category) => category.key === activeCategory
    );

    return (
      <section
        id="projects"
        className="border-t border-cyan-500/10 bg-black px-5 py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Featured Projects
            </div>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Four lanes of build capability
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-cyan-100/70 md:text-base">
              Tumbletech builds across automation, AI agents, websites, and SaaS.
              Click any of the cards to view our featured projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => {
              const isActive = activeCategory === item.key;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleCategoryClick(item.key)}
                  className={`group block rounded-2xl border bg-cyan-500/[0.03] p-6 text-left transition-all duration-200 ${
                    isActive
                      ? "border-cyan-300 bg-cyan-500/[0.08] shadow-[0_0_30px_rgba(34,199,218,0.12)]"
                      : "border-cyan-500/15 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-500/[0.08] hover:shadow-[0_0_30px_rgba(34,199,218,0.12)]"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-cyan-100/75 transition group-hover:text-cyan-100/90">
                    {item.text}
                  </p>

                  <div
                    className={`mt-6 h-[2px] bg-cyan-400/70 transition-all duration-200 ${
                      isActive ? "w-20 bg-cyan-300" : "w-14 group-hover:w-20 group-hover:bg-cyan-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeCategoryData && activeCategoryData.projects.length > 0 && (
              <motion.div
                key={activeCategoryData.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-10 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-6 md:p-8"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Featured {activeCategoryData.title} Projects
                </div>

                <div className="mt-6 space-y-4">
                  {activeCategoryData.projects.map((project, index) => (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex w-full items-center justify-between rounded-xl border border-cyan-500/15 bg-black/40 px-5 py-4 text-left transition hover:border-cyan-300 hover:bg-cyan-500/[0.06]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 text-sm font-medium text-cyan-300">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium text-cyan-100 md:text-base">
                          {project.title}
                        </span>
                      </div>

                      <span className="text-cyan-300 transition group-hover:text-cyan-200">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-cyan-400/30 bg-black p-6 shadow-[0_0_40px_rgba(34,199,218,0.12)] md:p-8"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 rounded-lg border border-cyan-400/20 px-3 py-1 text-sm text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/10"
                  >
                    Close
                  </button>

                  <div className="pr-16">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                      Project Details
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {selectedProject.image && (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="mt-6 w-full rounded-xl border border-cyan-500/15 object-cover"
                    />
                  )}

                  {selectedProject.narrative?.length > 0 && (
                    <div className="mt-6 space-y-3">
                      {selectedProject.narrative.map((item, idx) => (
                        <p
                          key={idx}
                          className="text-sm leading-7 text-cyan-100/80 md:text-base"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  )}

                  {selectedProject.video && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-cyan-500/15">
                      <div className="aspect-video w-full">
                        <iframe
                          src={selectedProject.video}
                          title={selectedProject.title}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    );
  }

/* ======================= CONNECTOR ======================= */
function Connector({ start, end, delay = 0 }) {
  return (
    <motion.line
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
      stroke="#22c7da"
      strokeWidth={2.2}
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeInOut" }}
      vectorEffect="non-scaling-stroke"
    />
  );
}