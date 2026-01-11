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

  useEffect(() => {
    const onDocClick = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
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
      <nav className="flex w-full items-center px-8 py-4">
        
        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="/001.mainlogo-b.png" alt="Tumbletech" className="h-8 w-auto" />
        </div>
    
        {/* CENTER — NAV LINKS */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-8 text-cyan-300">
          <li><a href="#home" className="hover:text-cyan-200">Home</a></li>
          <li className="relative">
            <button className="hover:text-cyan-200">Services ▾</button>
          </li>
          <li><a href="#projects" className="hover:text-cyan-200">Featured Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-200">Contact Us</a></li>
        </ul>
    
        {/* RIGHT — SOCIAL ICONS */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <SocialIcons />
        </div>
    
      </nav>
    </header>

  );
}

/* ===================== SOCIAL ICONS ===================== */
function SocialIcons() {
  return (
    <div className="hidden md:flex items-center gap-4 text-cyan-300">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/tumbletech"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tumbletech on Facebook"
        className="hover:text-cyan-200 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/tumbletech-inc-94787839b"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tumbletech on LinkedIn"
        className="hover:text-cyan-200 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@tumbletech"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tumbletech on YouTube"
        className="hover:text-cyan-200 transition"
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
  const spin = useAnimation();
  const wrapRef = useRef(null);
  const [dims, setDims] = useState({ w: 1920, h: 1080 });

  // spin + staged callouts
  useEffect(() => {
    spin.start({ rotate: 360 }, { repeat: Infinity, ease: "linear", duration: 8 });
    const t = setTimeout(() => setShowCallouts(true), 2000);
    return () => clearTimeout(t);
  }, [spin]);

  // close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (active && !e.target.closest(".card-trigger, .card-panel")) setActive(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [active]);

  // observe container size (so we can scale positions)
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

  const isMobile = dims.w < 768;
  const isTablet = dims.w >= 768 && dims.w < 1280;
  const isDesktop = dims.w >= 1280;

  // FRACTION-BASED layouts (scale with container dims)
  // values are proportions of width/height
  const layoutDesktop = {
    center: { x: 0.5, y: 0.46 },
    boxes: [
      { id: "auto", label: "Automate Your Business", box: { x: 0.083, y: 0.13, w: 0.146, h: 70 } },
      { id: "idea", label: "From Idea to App",       box: { x: 0.083, y: 0.398, w: 0.135, h: 70 } },
      { id: "web",  label: "Web Apps & Websites",    box: { x: 0.615, y: 0.148, w: 0.156, h: 70 } },
      { id: "ai",   label: "AI-Powered Solutions",   box: { x: 0.615, y: 0.565, w: 0.156, h: 70 } },
    ],
  };

  // bring items closer for tablets (fits 1366 × 768 nicely)
  const layoutTablet = {
    center: { x: 0.5, y: 0.48 },
    boxes: [
      { id: "auto", label: "Automate Your Business", box: { x: 0.06,  y: 0.16, w: 0.30, h: 64 } },
      { id: "idea", label: "From Idea to App",       box: { x: 0.06,  y: 0.44, w: 0.28, h: 64 } },
      { id: "web",  label: "Web Apps & Websites",    box: { x: 0.64,  y: 0.20, w: 0.32, h: 64 } },
      { id: "ai",   label: "AI-Powered Solutions",   box: { x: 0.64,  y: 0.60, w: 0.32, h: 64 } },
    ],
  };

  const layout = isDesktop ? layoutDesktop : layoutTablet;

  // narratives
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

  // helpers
  const pxBox = (fb) => ({
    x: fb.x * dims.w,
    y: fb.y * dims.h,
    w: fb.w * dims.w,
    h: fb.h, // keep height in px for consistent text sizing
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

  return (
    <section ref={wrapRef} className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-88px)]">
      {/* center spinning logo */}
      <div className="absolute inset-0 grid place-items-center z-10 pointer-events-none">
        <motion.img
          animate={spin}
          src="/002.favicon-b.png"
          alt="Tumbletech Spinning Logo"
          className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 origin-center"
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* ===== MOBILE: stacked accordions ===== */}
      {isMobile && (
        <div className="px-4 pt-28 space-y-3">
          {["auto", "idea", "web", "ai"].map((id) => (
            <details key={id} className="rounded-lg border border-cyan-400/40 bg-black/60">
              <summary className="list-none px-4 py-3 text-base text-white flex items-center justify-between">
                {id === "auto" && "Automate Your Business"}
                {id === "idea" && "From Idea to App"}
                {id === "web" && "Web Apps & Websites"}
                {id === "ai" && "AI-Powered Solutions"}
                <span className="text-cyan-300">▾</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-cyan-100/90">{narratives[id]}</div>
            </details>
          ))}
        </div>
      )}

      {/* ===== TABLET & DESKTOP: connectors + callouts ===== */}
      {!isMobile && showCallouts && (
        <>
          <svg
            className="absolute inset-0 z-0 pointer-events-none"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            preserveAspectRatio="none"
          >
            {layout.boxes.map((c, i) => {
              const b = pxBox(c.box);
              const start = startPointForBox(b);
              const end = endOnCircle(start);
              return <Connector key={`line-${c.id}`} start={start} end={end} delay={0.15 + i * 0.12} />;
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
              transition: { delay: 0.22 + i * 0.12, type: "spring", stiffness: 240, damping: 24 },
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
              <motion.a key={c.id} href="#services" className={cls} style={style} {...motionProps}>
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
                  className="card-panel absolute z-30 max-w-[420px] rounded-xl border border-cyan-400/40 bg-black/70 backdrop-blur px-5 py-4 leading-relaxed text-cyan-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
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
