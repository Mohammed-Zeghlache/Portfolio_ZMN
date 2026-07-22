import { stack } from '../data/data';
import { contact } from '../data/data';


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">Full-Stack Web Developer · Computer Science Student</div>
        <h1 className="hero-name">
          Building<br/>
          <span className="italic">AI-powered</span> web applications<br/>
          <span className="outline">that solve real-world problems.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            I'm a <strong>Computer Science Student</strong> (3rd year)
            passionate about AI, building scalable web applications, and solving real-world problems
          </p>
          <div className="hero-right">
            <div className="hero-actions">
              <a href="#projects" className="btn btn-solid">
                View Work
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={`mailto:${contact.email}`} className="btn btn-ghost">Get in touch</a>
            </div>
            <div className="hero-stack">
              {stack.map((tech, i) => (
                <span key={i} className={`stack-pill ${['React.js', 'Node.js', 'Express.js', 'PostgreSQL'].includes(tech) ? 'on' : ''}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
