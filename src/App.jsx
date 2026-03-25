import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

/* ============================= APP ============================= */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <SiteNav />
      <main className="relative w-full overflow-hidden">
        <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
          <HeroWithCallouts />
        </section>

		<AboutSection />  

        <FeaturedProjectsSection />

        <section
          id="contact"
          className="border-t border-cyan-500/10 bg-black px-5 py-20 md:px-8"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-8 text-center md:p-12">
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Contact Us
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
              Let’s talk about your workflow
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cyan-100/70 text-sm md:text-base leading-7">
              Need automation, AI agents, a website, or a SaaS-style build? Reach
              out and let’s discuss the right solution for your business.
            </p>
            <a
              href="mailto:info@tumbletech.dev"
              className="mt-8 inline-flex rounded-xl border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Email Tumbletech
            </a>
          </div>
        </section>
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

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="/001.mainlogo-b.png" alt="Tumbletech" className="h-8 w-auto" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8 text-cyan-300">
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
		        <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" fill="none" />
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

        {/* Desktop social */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <SocialIcons />
        </div>

        {/* Mobile / tablet hamburger */}
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

      {/* Mobile / tablet menu */}
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
    <div className="hidden md:flex items-center gap-4 text-cyan-300">
      <a
        href="https://www.facebook.com/profile.php?id=61585680125154"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-200 transition"
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
        className="hover:text-cyan-200 transition"
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
        className="hover:text-cyan-200 transition"
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
        className="hover:text-cyan-200 transition"
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
        className="hover:text-cyan-200 transition"
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
        className="hover:text-cyan-200 transition"
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
      if (active && !e.target.closest(".card-trigger, .card-panel")) setActive(null);
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
      { id: "auto", label: "Automate Your Business", box: { x: 0.083, y: 0.13, w: 0.146, h: 70 } },
      { id: "idea", label: "From Idea to App", box: { x: 0.083, y: 0.398, w: 0.135, h: 70 } },
      { id: "web", label: "Web Apps & Websites", box: { x: 0.615, y: 0.148, w: 0.156, h: 70 } },
      { id: "ai", label: "AI-Powered Solutions", box: { x: 0.615, y: 0.565, w: 0.156, h: 70 } },
    ],
  };

  const layoutTablet = {
    center: { x: 0.5, y: 0.48 },
    boxes: [
      { id: "auto", label: "Automate Your Business", box: { x: 0.06, y: 0.16, w: 0.30, h: 64 } },
      { id: "idea", label: "From Idea to App", box: { x: 0.06, y: 0.44, w: 0.28, h: 64 } },
      { id: "web", label: "Web Apps & Websites", box: { x: 0.64, y: 0.20, w: 0.32, h: 64 } },
      { id: "ai", label: "AI-Powered Solutions", box: { x: 0.64, y: 0.60, w: 0.32, h: 64 } },
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
          ? "px-4 py-6 h-auto min-h-0 overflow-visible"
          : "h-[calc(100vh-80px)] md:h-[calc(100vh-88px)] overflow-hidden"
      }`}
    >
      {!isMobile && (
        <div className="absolute inset-0 grid place-items-center z-10 pointer-events-none">
          <motion.img
            animate={spin}
            src="/002.favicon-b.png"
            alt="Tumbletech Spinning Logo"
            className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 origin-center"
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

          <div className="flex justify-center pt-4 pb-2">
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
	
	        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
	          About Tumbletech
	        </h2>
	
	        <p className="mt-6 text-cyan-100/80 text-sm md:text-base leading-8">
	          <span className="font-medium text-white">
	            Tumbletech is an automation, AI development, and web development
	            consulting firm operating in the Philippines.
	          </span>{" "}
	          We help businesses, founders, and organizations turn ideas, manual
	          workflows, and operational bottlenecks into working systems.
	        </p>
	
	        <p className="mt-5 text-cyan-100/70 text-sm md:text-base leading-8">
	          From workflow automation and AI-powered solutions to full-stack web
	          applications, our focus is practical technology — tools that reduce
	          friction, improve execution, and move projects forward.
	        </p>
	
	        <p className="mt-5 text-cyan-100/70 text-sm md:text-base leading-8">
	          We don’t build for noise. We build for function, clarity, and
	          real-world use.
	        </p>
	
	        <div className="mt-8 h-[2px] w-16 bg-cyan-400/70" />
	      </div>
	    </section>
	  );
	}

/* ======================= FEATURED PROJECTS / DEMO ======================= */
function FeaturedProjectsSection() {
  const WEBHOOK_URL = "https://tumbletech.app.n8n.cloud/webhook/lead-intake-v1";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    companyWebsite: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    {
      title: "Automation",
      text: "Workflow automation, integrations, reporting systems, lead capture flows, and operational pipelines that reduce manual work.",
    },
    {
      title: "AI Agents Development",
      text: "Custom AI assistants, triage agents, follow-up agents, support agents, and intelligent workflows tailored to business use cases.",
    },
    {
      title: "Websites",
      text: "Business websites, landing pages, showcase sites, portals, and web experiences built for clarity, speed, and credibility.",
    },
    {
      title: "SaaS",
      text: "Internal tools, MVPs, dashboards, subscription-ready systems, and software products designed around real operational problems.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isLikelyJunk = (text) => {
    const trimmed = text.trim().toLowerCase();
    const junkValues = ["test", "asdf", "123", "hello", "hi"];
    return junkValues.includes(trimmed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (formData.companyWebsite) {
      setSubmitStatus({
        type: "error",
        message: "Submission rejected.",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailIsValid) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (formData.message.trim().length < 12) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a more detailed message.",
      });
      return;
    }

    if (isLikelyJunk(formData.message)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a meaningful inquiry.",
      });
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed.");
      }

      setSubmitStatus({
        type: "success",
        message: "Test lead submitted successfully. The system has received your inquiry.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        companyWebsite: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong while submitting the form. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="projects"
      className="bg-black px-5 py-20 md:px-8 border-t border-cyan-500/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Featured Projects
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
            Four lanes of build capability
          </h2>

          <p className="mt-4 text-cyan-100/70 max-w-3xl mx-auto text-sm md:text-base leading-7">
            Tumbletech builds across automation, AI agents, websites, and SaaS.
            Below is a live spotlight from the automation lane.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cyan-100/75">
                {item.text}
              </p>
              <div className="mt-6 h-[2px] w-14 bg-cyan-400/70" />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-6 md:p-8">
          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
            Automation Spotlight
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-white">
            AI Lead Qualification System
          </h3>

          <p className="mt-4 text-sm leading-7 text-cyan-100/75 max-w-3xl">
            A working automation concept that captures inquiries, evaluates buyer
            intent with AI, logs the submission automatically, and helps
            prioritize serious leads faster.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-cyan-500/15 bg-black/60 p-6 md:p-8">
              <div className="mb-4 text-lg font-medium text-cyan-100">
                Try the Demo
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="rounded-xl border border-cyan-500/20 bg-black px-4 py-3 text-white outline-none placeholder:text-cyan-100/35 focus:border-cyan-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="rounded-xl border border-cyan-500/20 bg-black px-4 py-3 text-white outline-none placeholder:text-cyan-100/35 focus:border-cyan-400"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-xl border border-cyan-500/20 bg-black px-4 py-3 text-white outline-none placeholder:text-cyan-100/35 focus:border-cyan-400"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us what you need..."
                  className="rounded-xl border border-cyan-500/20 bg-black px-4 py-3 text-white outline-none placeholder:text-cyan-100/35 focus:border-cyan-400"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Test Lead"}
                </button>
              </form>

              {submitStatus && (
                <div
                  className={`mt-4 rounded-xl border px-4 py-3 text-sm leading-6 ${
                    submitStatus.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <p className="mt-4 text-xs leading-6 text-cyan-100/50">
                Submit a sample inquiry to test how the lead capture flow behaves.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-cyan-500/15 bg-black/60 p-6 md:p-8">
              <div className="text-lg font-medium text-cyan-100">
                What happens after submission
              </div>

              <div className="grid gap-3 text-sm text-cyan-100/80">
                <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">
                  1. The inquiry is captured from the form.
                </div>
                <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">
                  2. AI evaluates urgency, fit, and buyer intent.
                </div>
                <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">
                  3. The lead is logged automatically.
                </div>
                <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">
                  4. Priority is assigned and follow-up is triggered.
                </div>
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04] p-4 text-sm text-cyan-200">
                  This makes the automation lane tangible. It is not just a claim —
                  it is something visitors can interact with.
                </div>
              </div>
            </div>
          </div>
        </div>
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
