import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import About from "./About";
import Academics from "./Academics";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import MySkills from "./MySkills";

const ROLES = [
  "Web Designer",
  "MERN Stack Developer",
  "React Developer",
  "App Developer",
  "Freelancer",
];

/* Orbiting tech tags for the hero visual */
const ORBIT_TAGS = [
  { label: "React", angle: 0 },
  { label: "Node.js", angle: 51 },
  { label: "MongoDB", angle: 103 },
  { label: "Express", angle: 154 },
  { label: "Laravel", angle: 206 },
  { label: "OpenAI", angle: 257 },
  { label: "Photoshop", angle: 309 },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  /* Typing animation */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1600);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <>
      {/* BG Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* ─── HERO ─── */}
      <section className="hero-section" id="home">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center" style={{ minHeight: "100vh" }}>

            {/* LEFT — text */}
            <div className="col-lg-6 anim-fade-up" style={{ paddingBottom: 40 }}>
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-dot" />
                Hello, I'm Nandu Kumar
              </div>

              <h1 className="hero-heading">
                Turning Ideas into<br />
                <span className="gradient-text">Reality</span>
              </h1>

              <div className="hero-typing-wrapper">
                <span className="hero-typing-label">I'm a&nbsp;</span>
                <span className="hero-typing-text">{displayed}</span>
                <span className="hero-cursor" />
              </div>

              <p className="hero-desc">
                Passionate about crafting beautiful, functional websites and
                apps. Specializing in MERN stack development and modern UI
                design.
              </p>

              <div className="hero-cta">
                <a
                  href={process.env.PUBLIC_URL + '/Nanduresume-2026.pdf'}
                  target="_blank"
                  download="Nanduresume-2026"
                  rel="noreferrer"
                  className="btn-gradient"
                >
                  ↓ Download CV
                </a>
                <Link
                  to="https://api.whatsapp.com/send?phone=919010307021&text=Hello I would like to contact!"
                  target="_blank"
                  className="btn-outline-grad"
                >
                  💬 Contact Me
                </Link>
              </div>

              {/* <div className="hero-stats">
                <div>
                  <div className="hero-stat-number">3+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
              </div> */}
            </div>

            {/* RIGHT — orbit visual */}
            <div
              className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center anim-fade-up anim-delay-3"
            >
              <div className="hero-orbit-wrap">
                {/* Center card */}
                <div className="hero-orbit-center">
                  <div className="hero-orbit-avatar">NK</div>
                  <div className="hero-orbit-available">
                    <span className="hero-orbit-dot" />
                    Available
                  </div>
                </div>

                {/* Orbit ring */}
                <div className="hero-orbit-ring hero-orbit-ring-1" />
                <div className="hero-orbit-ring hero-orbit-ring-2" />

                {/* Orbiting tags */}
                {ORBIT_TAGS.map((tag, i) => {
                  const rad = ((tag.angle - 90) * Math.PI) / 180;
                  const r = 170; // orbit radius px
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div
                      key={tag.label}
                      className="hero-orbit-tag"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animationDelay: `${i * 0.18}s`,
                      }}
                    >
                      {tag.label}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ALL SECTIONS */}
      <About />
      <Academics />
      <Services />
      <MySkills />

      {/* HIRE ME BANNER */}
      <section className="hire-banner">
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label mb-3">Open to Opportunities</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            I'm <span className="gradient-text">Available</span> for Freelancing
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: 480,
              margin: "0 auto 32px",
            }}
          >
            Got a project in mind? Let's build something amazing together.
          </p>
          <HashLink
            to="/#Contact"
            className="btn-gradient"
            style={{ fontSize: "1rem", padding: "16px 40px" }}
          >
            Hire Me →
          </HashLink>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
