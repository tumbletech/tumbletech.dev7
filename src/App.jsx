import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

/* ============================= APP ============================= */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <SiteNav />
      <main id="home" className="relative min-h-[92vh] w-full overflow-hidden">
        <HeroWithCallouts />
      </main>
    </div>
  );
}

/* ============================= NAV ============================= */
function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const services = [
    {
      id: "automation",
      title: "Automate Your Business",
      items: [
        { label: "Workflow Automation (n8n / Make / Zapier)", href: "#svc-automation" },
        { label: "System Integration (Sheets, CRMs, APIs)", href: "#svc-automation" },
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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 select-none">
          <img src="/001.mainlogo-b.png" alt="Tumbletech" className="h-8 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-cyan-300">
          <li><a href="#home" className="hover:text-cyan-200">Home</a></li>

          {/* SERVICES + DROPDOWN */}
          <li
            className="relative"
            ref={menuRef}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-cyan-200"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Services
              <svg width="14" height="14" viewBox="0 0 20 20" className={`transition ${open ? "rotate-180" : ""}`}>
                <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="absolute right-0 mt-3 w-[520px] rounded-xl border border-cyan-500/20 bg-black/80 backdrop-blur shadow-lg shadow-cyan-900/20"
                  role="menu"
                >
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {services.map((group) => (
                      <div key={group.id} className="rounded-lg border border-cyan-500/15 p-3">
                        <div className="mb-2 text-cyan-200 font-medium">{group.title}</div>
                        <ul className="space-y-1.5 text-sm text-cyan-100/90">
                          {group.items.map((it, idx) => (
                            <li key={idx}>
                              <a
                                href={it.href}
                                className="block rounded px-2 py-1 hover:bg-cyan-400/10 hover:text-cyan-100"
                                onClick={() => setOpen(false)}
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

          <li><a href="#projects" className="hover:text-cyan-200">Featured Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-200">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

/* ===================== HERO + CALLOUTS ===================== */
function HeroWithCallouts() {
  const [showCallouts, setShowCallouts] = useState(false);
  const [active, setActive] = useState(null); // which card is open
  const spin = useAnimation();

  useEffect(() => {
    spin.start({ rotate: 360 }, { repeat: Infinity, ease: "linear", duration: 8 });
    const t = setTimeout(() => setShowCallouts(true), 2000);
    return () => clearTimeout(t);
  }, [spin]);

  // Close open card on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (active && !e.target.closest(".card-trigger, .card-panel")) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  // Logo virtual center
  const center = useMemo(() => ({ x: 960, y: 460 }), []);

  // Callout boxes
  const callouts = [
    { id: "auto", label: "Automate Your Business", box: { x: 160, y: 140, w: 280, h: 70 } },
    { id: "idea", label: "From Idea to App",       box: { x: 160, y: 430, w: 260, h: 70 } },
    { id: "web",  label: "Web Apps & Websites",    box: { x: 1180, y: 160, w: 300, h: 70 } },
    { id: "ai",   label: "AI-Powered Solutions",   box: { x: 1180, y: 610, w: 300, h: 70 } },
  ];

  // Narratives (all four)
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

  // Helpers for connectors
  const startPointForBox = (box) => {
    const isLeft = box.x + box.w / 2 < center.x;
    const inset = 8;
    return {
      x: isLeft ? box.x + box.w - inset : box.x + inset,
      y: box.y + box.h / 2,
    };
  };

  const endOnCircle = (start, r = 95) => {
    const dx = center.x - start.x;
    const dy = center.y - start.y;
    const mag = Math.hypot(dx, dy) || 1;
    return {
      x: center.x - (dx / mag) * r,
      y: center.y - (dy / mag) * r,
    };
  };

  return (
    <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-88px)]">
      {/* center spinning logo */}
      <div className="absolute inset-0 grid place-items-center z-10">
        <motion.img
          animate={spin}
          src="/002.favicon-b.png"
          alt="Tumbletech Spinning Logo"
          className="h-40 w-40 origin-center"
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Desktop: connectors + callouts */}
      <div className="hidden md:block">
        {showCallouts && (
          <>
            <svg
              className="absolute inset-0 z-0 pointer-events-none"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="none"
            >
              {callouts.map((c, i) => {
                const start = startPointForBox(c.box);
                const end = endOnCircle(start, 95);
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

            {/* Callout boxes */}
            {callouts.map((c, i) => {
              const hasCard = narratives[c.id] !== undefined;
              const commonClass =
                "absolute z-20 flex items-center justify-center rounded-lg border border-cyan-400/60 text-white text-lg tracking-wide shadow-[0_0_0_1px_rgba(56,189,248,0.25)] transition hover:border-cyan-300 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.35)]";
              const style = { left: c.box.x, top: c.box.y, width: c.box.w, height: c.box.h };

              const motionProps = {
                initial: { opacity: 0, y: 12, scale: 0.98 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { delay: 0.22 + i * 0.12, type: "spring", stiffness: 240, damping: 24 },
              };

              if (hasCard) {
                return (
                  <motion.button
                    key={c.id}
                    type="button"
                    onClick={() => setActive(active === c.id ? null : c.id)}
                    className={`card-trigger ${commonClass}`}
                    style={style}
                    {...motionProps}
                  >
                    {c.label}
                  </motion.button>
                );
              }

              return (
                <motion.a key={c.id} href="#services" className={commonClass} style={style} {...motionProps}>
                  {c.label}
                </motion.a>
              );
            })}

            {/* Narrative cards */}
            <AnimatePresence>
              {Object.entries(narratives).map(([id, text]) => {
                const box = callouts.find((c) => c.id === id)?.box;
                if (!box || active !== id) return null;
                return (
                  <motion.div
                    key={`${id}-card`}
                    className="card-panel absolute z-30 max-w-[420px] rounded-xl border border-cyan-400/40 bg-black/70 backdrop-blur px-5 py-4 leading-relaxed text-cyan-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    style={{ left: box.x, top: box.y + box.h + 10 }}
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  >
                    <div className="text-sm">{text}</div>
                    <div className="mt-3 h-[2px] w-16 bg-cyan-400/70" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </>
        )}
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
