import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const skills = [
  { name: "HTML", percent: 85 },
  { name: "CSS", percent: 65 },
  { name: "JavaScript", percent: 70 },
  { name: "Bootstrap", percent: 75 },
  { name: "React JS", percent: 80 },
  { name: "React Native", percent: 50 },
  { name: "Node JS", percent: 60 },
  { name: "PHP", percent: 40 },
];

const MySkills = () => {
  const title = useScrollReveal();
  const card = useScrollReveal();

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          ref={title.ref}
          className={`section-title-wrapper reveal${title.isVisible ? " visible" : ""}`}
        >
          <div className="section-label">Technical Expertise</div>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <div className="section-divider" />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              ref={card.ref}
              className={`glass-card p-5 reveal${card.isVisible ? " visible" : ""}`}
            >
              <div className="row g-0">
                {skills.map((skill, i) => (
                  <div
                    className="col-md-6 px-3"
                    key={skill.name}
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    <div className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: card.isVisible ? `${skill.percent}%` : '0%' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                borderTop: '1px solid var(--border-glass)',
                marginTop: 32,
                paddingTop: 32,
                textAlign: 'center',
              }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
                  Also familiar with
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                  {['MongoDB', 'Express.js', 'Git & GitHub', 'REST APIs', 'MySQL', 'Laravel', 'OpenAI Tools', 'Photoshop'].map(t => (
                    <span key={t} style={{
                      padding: '5px 14px',
                      borderRadius: '100px',
                      background: 'rgba(6,182,212,0.08)',
                      border: '1px solid rgba(6,182,212,0.2)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
