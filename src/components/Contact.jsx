import { useState } from 'react';
import { personal } from '../data/portfolio';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${personal.email}&su=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.open(gmailUrl, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's work together</p>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Open to new opportunities, collaborations, or just a chat about distributed systems and backend engineering.
            </p>
            <div className="contact-links">
              <a href={`https://mail.google.com/mail/?view=cm&to=${personal.email}`} target="_blank" rel="noreferrer" className="contact-link">
                <FiMail /> {personal.email}
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <FiLinkedin /> linkedin.com/in/siddharth2503s
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
                <FiGithub /> GitHub
              </a>
              <div className="contact-link">
                <FiMapPin /> {personal.location}
              </div>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            {sent && <p className="form-success">Opening your email client...</p>}
            <div className="form-row">
              <input
                name="name" type="text" placeholder="Your Name" required
                value={form.name} onChange={handleChange}
              />
              <input
                name="email" type="email" placeholder="Your Email" required
                value={form.email} onChange={handleChange}
              />
            </div>
            <input
              name="subject" type="text" placeholder="Subject" required
              value={form.subject} onChange={handleChange}
            />
            <textarea
              name="message" rows={5} placeholder="Your message..." required
              value={form.message} onChange={handleChange}
            />
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
