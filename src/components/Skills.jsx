import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="card skills-card" key={category}>
              <h3 className="skills-category">{category}</h3>
              <div className="skills-tags">
                {items.map((item) => (
                  <span className="badge" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
