import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const title = useScrollReveal();
  const left = useScrollReveal();
  const right = useScrollReveal();

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div
          ref={title.ref}
          className={`section-title-wrapper reveal${title.isVisible ? " visible" : ""}`}
        >
          <div className="section-label">Get to know me</div>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-divider" />
        </div>

        <div className="row align-items-center g-5">
          {/* Left: Avatar card */}
          <div
            ref={left.ref}
            className={`col-lg-4 text-center reveal reveal-left${left.isVisible ? " visible" : ""}`}
          >
            <div className="glass-card" style={{ padding: '48px 32px' }}>
              <div style={{
                width: 120, height: 120,
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2.5rem', fontWeight: 900, color: '#fff',
                boxShadow: '0 0 40px rgba(168,85,247,0.4)',
              }}>NK</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>
                P. Nandu Kumar Goud
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 24 }}>
                Application & MERN Stack Developer
              </p>
              <div className="about-stat-badge justify-content-center mb-4">
                <span className="about-stat-num">3+</span>
                <span className="about-stat-text">Years Experience</span>
              </div>
              <a
                href={process.env.PUBLIC_URL + '/Nanduresume-2026.pdf'}
                target="_blank"
                download="Nanduresume-2026"
                rel="noreferrer"
                className="btn-gradient w-100 justify-content-center"
              >
                ↓ Download CV
              </a>
            </div>
          </div>

          {/* Right: Info */}
          <div
            ref={right.ref}
            className={`col-lg-8 reveal reveal-right${right.isVisible ? " visible" : ""}`}
          >
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
              Hello! I'm <strong style={{ color: 'var(--text-primary)' }}>Nandu Kumar</strong>, a passionate web developer
              who loves turning ideas into stunning digital experiences. I thrive on building responsive, performant
              websites and applications that make a real difference.
              <br /><br />
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Looking forward to collaborating and working on new ideas</span> — feel free to reach out!
            </p>

            <div className="glass-card p-4 mb-4">
              <div className="about-info-grid">
                {[
                  { label: 'Name', value: 'P. NanduKumar Goud' },
                  // { label: 'Date of Birth', value: 'March 30, 2001' },
                  { label: 'Location', value: 'Hyderabad, Telangana, India' },
                  { label: 'Zip Code', value: '501218' },
                  { label: 'Email', value: 'nandukumar985@gmail.com' },
                  { label: 'Phone', value: '+91 9010307021' },
                ].map((item) => (
                  <div className="about-info-item" key={item.label}>
                    <span className="about-info-label">{item.label}</span>
                    <span className="about-info-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Bootstrap'].map(tag => (
                <span key={tag} style={{
                  padding: '6px 16px',
                  borderRadius: '100px',
                  background: 'rgba(168,85,247,0.08)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  fontSize: '0.82rem',
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
