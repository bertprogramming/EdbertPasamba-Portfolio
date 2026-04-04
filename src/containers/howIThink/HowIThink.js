import React, { useEffect, useRef } from "react";
import "./HowIThink.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isMobile = () => window.innerWidth <= 768;

const principles = [
  {
    code: "D",
    label: "Define",
    color: "#b388ff",
    glow: "rgba(179,136,255,0.35)",
    title: "Define the Problem",
    body:
      "Before writing a single line of code or running a query, I start by clearly defining what problem we're solving, who it affects, and what success looks like. Ambiguity is the enemy of good software.",
    icon: "◈",
  },
  {
    code: "M",
    label: "Measure",
    color: "#4facfe",
    glow: "rgba(79,172,254,0.35)",
    title: "Measure What Matters",
    body:
      "I rely on data, not instinct. Whether it's pipeline latency, error rates, or user drop-off — I track the right metrics to understand the current baseline before proposing any change.",
    icon: "◉",
  },
  {
    code: "A",
    label: "Analyze",
    color: "#43e97b",
    glow: "rgba(67,233,123,0.35)",
    title: "Analyze Root Causes",
    body:
      "Symptoms are not root causes. I dig into logs, data flows, and system behavior to find where the real breakdown is — not just where it surfaces. Fix the source, not the symptom.",
    icon: "◎",
  },
  {
    code: "I",
    label: "Improve",
    color: "#f5576c",
    glow: "rgba(245,87,108,0.35)",
    title: "Improve Deliberately",
    body:
      "Improvements are intentional and tested — not guesswork. I build solutions that are scalable, maintainable, and grounded in the root cause analysis. Ship it when it's proven, not just when it's done.",
    icon: "◆",
  },
  {
    code: "C",
    label: "Control",
    color: "#fee140",
    glow: "rgba(254,225,64,0.35)",
    title: "Control & Sustain",
    body:
      "Good work doesn't stop at deployment. I monitor, document, and build in safeguards so improvements last. Automation, alerts, and clean handoffs keep systems running long after I'm done.",
    icon: "◇",
  },
];

export default function HowIThink() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const codeLettersRef = useRef([]);
  const connectorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ── Mobile: skip all GSAP, just show everything ─
    if (isMobile()) return;

    const ctx = gsap.context(() => {
      // ── 1. Heading wipe-in ──────────────────────────
      gsap.set([headingRef.current, taglineRef.current], { opacity: 0, y: 40 });
      gsap.to([headingRef.current, taglineRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ── 2. Connector line draws itself ──────────────
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: connectorRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── 3. DMAIC letters bounce in ──────────────────
      gsap.set(codeLettersRef.current, { opacity: 0, scale: 0.2, y: 24 });
      gsap.to(codeLettersRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.55,
        ease: "back.out(2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: connectorRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── 4. Cards slide in alternating sides ─────────
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const fromLeft = i % 2 === 0;
        gsap.set(card, { opacity: 0, x: fromLeft ? -60 : 60 });
        gsap.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-i-think" ref={sectionRef}>
      {/* ── Heading ── */}
      <div className="hit-heading-wrap">
        <h2 className="hit-heading" ref={headingRef}>
          How I Think
        </h2>
        <p className="hit-tagline" ref={taglineRef}>
          My approach to every problem is grounded in{" "}
          <span className="hit-highlight">Lean Six Sigma</span> — a discipline
          of clarity, measurement, and deliberate improvement.
        </p>
      </div>

      {/* ── DMAIC connector bar ── */}
      <div className="hit-dmaic-wrap" ref={connectorRef}>
        <div className="hit-dmaic-track">
          <div className="hit-dmaic-line" ref={lineRef} />
          {principles.map((p, i) => (
            <div
              key={i}
              className="hit-dmaic-node"
              style={{ "--color": p.color, "--glow": p.glow }}
            >
              <div
                className="hit-dmaic-letter"
                ref={(el) => (codeLettersRef.current[i] = el)}
              >
                {p.code}
              </div>
              <span className="hit-dmaic-label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Principle cards ── */}
      <div className="hit-cards">
        {principles.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="hit-card"
            style={{ "--color": p.color, "--glow": p.glow }}
          >
            {/* Left accent stripe */}
            <div className="hit-card-stripe" />

            <div className="hit-card-inner">
              {/* Icon + code */}
              <div className="hit-card-meta">
                <span className="hit-card-icon" style={{ color: p.color }}>
                  {p.icon}
                </span>
                <span className="hit-card-code" style={{ color: p.color }}>
                  {p.code} — {p.label}
                </span>
              </div>

              <h3 className="hit-card-title">{p.title}</h3>
              <p className="hit-card-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
