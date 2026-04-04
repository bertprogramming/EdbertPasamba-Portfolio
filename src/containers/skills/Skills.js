import React, { useEffect, useRef } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardAccents = [
  {
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    glow: "rgba(102,126,234,0.5)",
    color: "#b39ddb",
  },
  {
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    glow: "rgba(245,87,108,0.5)",
    color: "#f48fb1",
  },
  {
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    glow: "rgba(79,172,254,0.5)",
    color: "#80d8ff",
  },
  {
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    glow: "rgba(67,233,123,0.5)",
    color: "#a5d6a7",
  },
  {
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    glow: "rgba(250,112,154,0.5)",
    color: "#ffcc80",
  },
];

export default function Skills(props) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const counterRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const dots = dotsRef.current.filter(Boolean);
    if (!section || !cards.length) return;

    const total = cards.length;

    // ── Animate heading in on scroll ──────────────
    gsap.set([headingRef.current, subRef.current], { opacity: 0, y: 36 });
    gsap.to([headingRef.current, subRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // ── Set initial card states ────────────────────
    // Card 0: visible center
    gsap.set(cards[0], { xPercent: 0, opacity: 1, scale: 1 });
    // All others: off to the right, invisible
    if (cards.length > 1) {
      gsap.set(cards.slice(1), { xPercent: 115, opacity: 0, scale: 0.86 });
    }

    // ── Set initial dot states ─────────────────────
    if (dots.length) {
      gsap.set(dots, { width: 8, backgroundColor: "rgba(255,255,255,0.22)" });
      gsap.set(dots[0], { width: 30, backgroundColor: "#b388ff" });
    }

    // ── Counter initial ────────────────────────────
    const pad = (n) => String(n).padStart(2, "0");
    if (counterRef.current) {
      counterRef.current.textContent = `${pad(1)} / ${pad(total)}`;
    }

    // ── Build timeline: one transition per card ────
    const tl = gsap.timeline();

    cards.forEach((card, i) => {
      if (i === total - 1) return;
      const next = cards[i + 1];

      // Slide current out left, next in from right
      tl.to(card, {
        xPercent: -115,
        opacity: 0,
        scale: 0.86,
        duration: 1,
        ease: "power2.inOut",
      }).to(
        next,
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      // Shrink current dot
      if (dots[i]) {
        tl.to(
          dots[i],
          {
            width: 8,
            backgroundColor: "rgba(255,255,255,0.22)",
            duration: 0.35,
            ease: "power2.out",
          },
          "<0.4"
        );
      }
      // Grow next dot
      if (dots[i + 1]) {
        tl.to(
          dots[i + 1],
          {
            width: 30,
            backgroundColor: cardAccents[(i + 1) % cardAccents.length].color,
            duration: 0.35,
            ease: "power2.out",
          },
          "<"
        );
      }

      // Update counter
      if (counterRef.current) {
        const idx = i + 2;
        tl.call(
          () => {
            if (counterRef.current)
              counterRef.current.textContent = `${pad(idx)} / ${pad(total)}`;
          },
          [],
          "<0.5"
        );
      }
    });

    // ── Pin section, drive timeline on scroll ──────
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${total * 850}`,
      pin: true,
      scrub: 1.1,
      animation: tl,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="skills" ref={sectionRef}>
      {/* ── Section Header ── */}
      <div className="skills-header-div">
        <h2 className="skills-header" ref={headingRef}>
          What I Do
        </h2>
        <p className="skills-header-sub" ref={subRef}>
          A snapshot of the skills and technologies I work with every day.
        </p>
      </div>

      {/* ── Carousel Stage ── */}
      <div className="skills-carousel-stage">
        {skills.data.map((skill, i) => {
          const accent = cardAccents[i % cardAccents.length];
          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="skill-card--carousel"
              style={{ "--glow": accent.glow }}
            >
              <div
                className="skill-card-top-bar"
                style={{ background: accent.gradient }}
              />
              <h3 className="skill-card-title">{skill.title}</h3>
              <SoftwareSkill logos={skill.softwareSkills} />
              <ul className="skill-card-bullets">
                {skill.skills.map((s, j) => (
                  <li key={j}>{s.replace(/^- /, "")}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
