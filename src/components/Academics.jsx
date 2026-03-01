import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const milestones = [
  {
    year: "2015 – 2016",
    title: "Secondary School (SSC)",
    institution: "Oasis School of Excellence",
    grade: "8.7 CGPA",
  },
  {
    year: "2016 – 2019",
    title: "Diploma in Computer Science",
    institution: "TRR College of Technology",
    grade: "77%",
  },
  {
    year: "2019 – 2022",
    title: "B.Tech – Computer Science Engineering",
    institution: "J.B. Institute of Engineering & Technology",
    grade: "7.4 GPA",
  },
  {
    year: "Aug 2022 – Oct 2022",
    title: "MERN Stack Web Development",
    institution: "Henry Harvin Education",
    grade: "Certified",
  },
];

const Academics = () => {
  const title = useScrollReveal();
  const timeline = useScrollReveal();

  return (
    <section className="section" id="academics" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          ref={title.ref}
          className={`section-title-wrapper reveal${title.isVisible ? " visible" : ""}`}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">My <span className="gradient-text">Academics</span></h2>
          <div className="section-divider" />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div ref={timeline.ref} className="timeline">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`timeline-item reveal${timeline.isVisible ? " visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.13}s` }}
                >
                  <div className="timeline-dot" />
                  <div className="glass-card p-4">
                    <div className="timeline-year">{m.year}</div>
                    <div className="timeline-title">{m.title}</div>
                    <div className="timeline-institution">{m.institution}</div>
                    <span className="timeline-grade">{m.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <a
                href={process.env.PUBLIC_URL + '/Nanduresume-2026.pdf'}
                target="_blank"
                download="Nanduresume-2026"
                rel="noreferrer"
                className="btn-gradient"
              >
                ↓ Download Full CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
