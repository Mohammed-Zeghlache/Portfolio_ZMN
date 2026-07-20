import { timeline, certifications } from '../data/data';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="sec-header reveal">
          <span className="sec-num">// 03 — learning & achievements</span>
          <h2 className="sec-title">Learning, <em>Building</em> &amp; Growing</h2>
          <p className="sec-subtitle">
            My journey through education, certifications, hackathons, and real-world software projects.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="tl-item reveal">
              <div className="tl-marker"></div>
              <div className="tl-content">
                <span className="tl-year">{item.year}</span>
                <h3 className="tl-title">{item.title}</h3>
                <div className="tl-org">{item.org}</div>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certs-section">
          <h3 className="certs-headline reveal">
            <span className="highlight">◆</span> Certifications &amp; Achievements
          </h3>
          <div className="certs-grid reveal">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-icon">●</div>
                <div className="cert-body">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <div className="cert-name">{cert.name}</div>
                  <span className="cert-tag">{cert.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;