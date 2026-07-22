import { stats, skills } from '../data/data';

function About() {
  return (
    <section id="about">
      <div className="sec-header reveal">
        <span className="sec-num">// 01 — about</span>
        <h2 className="sec-title">Developer by passion,<br/><em>problem solver</em> by nature</h2>
      </div>
      <div className="about-layout">
        <div className="about-left reveal">
          <div className="about-bio">
            <p>
              I'm a <strong>Computer Science student at University of Msila (Algeria)</strong> and <strong>Full-Stack Developer</strong>, with additional training in <strong>Full-Stack Web Development from BrainerX School</strong>. I'm passionate about AI and building scalable web applications that solve real-world problems.
            </p>
            <p>I enjoy turning ideas into real products, from designing intuitive user interfaces to developing secure APIs, databases, and deploying complete applications. I'm always learning new technologies and solving real-world problems through software <strong>Development</strong>.</p>
          </div>
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat">
                <span className="stat-num">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-right reveal" style={{ transitionDelay: '0.15s' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-category">
              <div className="skills-cat-title">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
              <div className="skills-tags">
                {items.map((skill, i) => (
                  <span key={i} className={`skill-tag ${['React.js', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL'].includes(skill) ? 'primary' : ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
