import React from "react";
import { MdDeveloperMode, MdOutlineMonitor } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiTaichigraphics } from "react-icons/si";
import useScrollReveal from "../hooks/useScrollReveal";

const services = [
  {
    icon: <MdOutlineMonitor />,
    title: "Web Design",
    desc: "Creating visually stunning, user-centered interfaces with modern aesthetics and intuitive layouts.",
  },
  {
    icon: <CgWebsite />,
    title: "Web Development",
    desc: "Building robust, scalable web applications with clean code and the latest technologies.",
  },
  {
    icon: <MdDeveloperMode />,
    title: "App Development",
    desc: "Developing cross-platform mobile applications using React Native for seamless user experiences.",
  },
  {
    icon: <SiTaichigraphics />,
    title: "Graphic Design",
    desc: "Crafting compelling visual identities, logos, and brand assets that leave lasting impressions.",
  },
];

const Services = () => {
  const title = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div
          ref={title.ref}
          className={`section-title-wrapper reveal${title.isVisible ? " visible" : ""}`}
        >
          <div className="section-label">What I Offer</div>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <div className="section-divider" />
        </div>

        <div ref={cards.ref} className="row g-4">
          {services.map((s, i) => (
            <div className="col-sm-6 col-lg-3" key={s.title}>
              <div
                className={`glass-card service-card h-100 reveal reveal-scale${cards.isVisible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="service-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
