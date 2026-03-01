import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/#home', hash: false },
    { label: 'About', to: '/#about', hash: true },
    { label: 'Academics', to: '/#academics', hash: true },
    { label: 'Services', to: '/#services', hash: true },
    { label: 'Skills', to: '/#skills', hash: true },
    { label: 'Contact', to: '/#Contact', hash: true },
  ];

  return (
    <nav className={`nd-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="nd-brand" to="/">ND</Link>

        {/* Desktop Nav */}
        <ul className="list-unstyled d-none d-lg-flex align-items-center mb-0 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <HashLink className="nd-nav-link nav-link" to={link.to}>
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Hire me CTA */}
        <div className="d-none d-lg-block">
          <HashLink to="/#Contact" className="btn-gradient" style={{ fontSize: '0.85rem', padding: '10px 22px' }}>
            Hire Me
          </HashLink>
        </div>

        {/* Mobile Toggler */}
        <button
          className="d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: '10px',
            padding: '8px 12px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '20px' }}>☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,15,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-glass)',
          padding: '20px 0',
        }}>
          <div className="container">
            {navLinks.map((link) => (
              <HashLink
                key={link.label}
                className="nd-nav-link nav-link d-block py-2"
                to={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </HashLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
