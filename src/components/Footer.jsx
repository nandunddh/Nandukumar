import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const services = ["Web Design", "Web Development", "App Development", "Graphic Design"];

  return (
    <footer className="nd-footer">
      <div className="container">
        <div className="row g-5 mb-4">
          {/* Brand Col */}
          <div className="col-lg-4">
            <div className="footer-brand">ND</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: 24, maxWidth: 300 }}>
              Passionate web developer turning ideas into stunning digital experiences. Let's build something amazing together.
            </p>
            <div>
              <a href="https://www.linkedin.com/in/pulimamidinandukumar" target="_blank" rel="noreferrer" className="footer-social-btn">
                <FaLinkedin />
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn">
                <FaInstagram />
              </a> */}
              <a href="https://github.com/nandunddh" target="_blank" rel="noreferrer" className="footer-social-btn">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-sm-6 col-lg-4">
            <div className="footer-heading">Services</div>
            {services.map((s) => (
              <span key={s} className="footer-link-item d-block">{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <div className="footer-heading">Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:+919010307021" className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                📞 +91 9010307021
              </a>
              <a href="mailto:nandukumar985@gmail.com" className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                ✉️ nandukumar985@gmail.com
              </a>
              <span className="footer-link-item" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                📍 Hyderabad, Telangana
              </span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="footer-copyright mb-0">
            © 2026 Nandu Kumar. All rights reserved.
          </p>
          <p className="footer-copyright mb-0">
            Designed & Built with <span style={{ color: 'var(--accent-purple)' }}>♥</span> by Nandu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
