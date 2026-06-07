import { projects } from '../data/portfolio';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="card project-card" key={i}>
              <div className="project-header">
                <h3 className="project-name">{p.name}</h3>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                  )}
                </div>
              </div>
              <p className="project-desc">{p.description}</p>
              <ul className="project-bullets">
                {p.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
