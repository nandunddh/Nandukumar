import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import useScrollReveal from "../hooks/useScrollReveal";

const contactInfo = [
  {
    icon: <FaMapLocationDot />,
    title: "Address",
    value: "Hyderabad, Telangana, India",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+91 9010307021",
    href: "tel:+919010307021",
  },
  {
    icon: <AiFillMail />,
    title: "Email",
    value: "nandukumar985@gmail.com",
    href: "mailto:nandukumar985@gmail.com",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", botInput: "" });
  const [isSending, setIsSending] = useState(false);
  const [mailStatus, setMailStatus] = useState(null); // 'success' or 'error'
  const formRef = useRef(null);
  const title = useScrollReveal();
  const infoRow = useScrollReveal();
  const formCard = useScrollReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMailStatus(null);

    // Bot prevention (Honeypot) - bots typically fill all fields, even hidden ones.
    if (form.botInput) {
      setIsSending(false);
      setMailStatus('success'); // pretend it succeeded
      setForm({ name: "", email: "", subject: "", message: "", botInput: "" });
      setTimeout(() => setMailStatus(null), 5000);
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS keys are missing in .env");
      setMailStatus('error');
      setIsSending(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject || "No Subject",
          message: form.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      )
      .then(
        () => {
          setIsSending(false);
          setMailStatus('success');
          setForm({ name: "", email: "", subject: "", message: "", botInput: "" });
          // Clear success message after 5 seconds
          setTimeout(() => setMailStatus(null), 5000);
        },
        (error) => {
          console.error(error);
          setIsSending(false);
          setMailStatus('error');
          // Clear error message after 5 seconds
          setTimeout(() => setMailStatus(null), 5000);
        }
      );
  };

  return (
    <section className="section contact-section-bg" id="Contact">
      <div className="container">
        {/* Header */}
        <div
          ref={title.ref}
          className={`section-title-wrapper reveal${title.isVisible ? " visible" : ""}`}
        >
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
          <div className="section-divider" />
        </div>

        {/* Info cards row */}
        <div ref={infoRow.ref} className="row g-3 mb-5">
          {contactInfo.map((item, i) => (
            <div className="col-sm-6 col-lg-4" key={item.title}>
              <div
                className={`glass-card contact-info-card reveal${infoRow.isVisible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="contact-icon-box">{item.icon}</div>
                <div>
                  <div className="contact-info-title">{item.title}</div>
                  {item.href ? (
                    <Link to={item.href} className="contact-info-value" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </Link>
                  ) : (
                    <div className="contact-info-value">{item.value}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              ref={formCard.ref}
              className={`glass-card contact-form-wrap reveal${formCard.isVisible ? " visible" : ""}`}
            >
              <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 28 }}>
                Got a question or proposal? Don't hesitate to reach out.
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Honeypot field for bot prevention */}
                <input
                  type="text"
                  name="botInput"
                  value={form.botInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <input
                      className="nd-input"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      className="nd-input"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    className="nd-input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="nd-input nd-textarea"
                    name="message"
                    placeholder="Your Message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>

                {mailStatus === 'success' && (
                  <div style={{ padding: '12px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80', borderRadius: '8px', marginBottom: '16px', fontSize: '0.9rem', textAlign: 'center' }}>
                    ✅ Message sent successfully! I will get back to you soon.
                  </div>
                )}
                {mailStatus === 'error' && (
                  <div style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', borderRadius: '8px', marginBottom: '16px', fontSize: '0.9rem', textAlign: 'center' }}>
                    ❌ Failed to send message. Please ensure your .env keys are correct or try again later.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-gradient w-100 justify-content-center"
                  style={{ fontSize: '1rem', padding: '16px', opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
