import { experience, education } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="exp-edu-grid">
          <div>
            <h3 className="timeline-heading">Work Experience</h3>
            <div className="timeline">
              {experience.map((e, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content card">
                    <div className="exp-header">
                      <div>
                        <h4 className="exp-title">{e.title}</h4>
                        <p className="exp-company">{e.company} · {e.location}</p>
                      </div>
                      <span className="exp-period">{e.period}</span>
                    </div>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="timeline-heading">Education</h3>
            <div className="timeline">
              {education.map((ed, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="timeline-content card">
                    <h4 className="exp-title">{ed.degree}</h4>
                    <p className="exp-company">{ed.school}</p>
                    <p className="exp-company">{ed.location}</p>
                    <span className="exp-period">{ed.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
