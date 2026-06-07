import { useState, useEffect, useRef } from 'react';
import { personal } from '../data/portfolio';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import './About.css';

function AnimatedCount({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(end / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 5, label: 'Years Experience', suffix: '+' },
  { value: 3, label: 'Companies', suffix: '' },
  { value: 10, label: 'Projects Delivered', suffix: '+' },
  { value: 3, label: 'Cloud Certifications', suffix: '' },
];

export default function About() {

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A bit about who I am and what I do</p>

        <div className="about-grid">
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <span>SS</span>
            </div>
            <div className="about-glow" />
          </div>

          <div className="about-text">
            <p>{personal.summary}</p>
            <div className="about-info">
              <div className="info-item"><FiMapPin /> {personal.location}</div>
              <div className="info-item"><FiMail /> <a href={`mailto:${personal.email}`}>{personal.email}</a></div>
              <div className="info-item"><FiPhone /> {personal.phone}</div>
            </div>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-primary">
              View LinkedIn
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">
                <AnimatedCount end={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
