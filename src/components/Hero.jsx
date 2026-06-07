import { personal } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">{personal.name}</h1>
        <h2 className="hero-title">{personal.title}</h2>
        <p className="hero-tagline">{personal.tagline}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            Hire Me
          </a>
          <a href="#projects" className="btn-outline" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>
            View Work
          </a>
        </div>
        <div className="hero-socials">
          <a href={personal.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
          <a href={personal.github} target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href={`mailto:${personal.email}`}><FiMail /></a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
