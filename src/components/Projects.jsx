import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/data';

function Projects() {
  return (
    <section id="projects">
      <div className="sec-header reveal">
        <span className="sec-num">// 02 — projects</span>
        <h2 className="sec-title">Selected <em>work</em></h2>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="project-winner reveal">
          <div className="pw-img">
            <img src={project.image} alt={project.title} />
            <div className="pw-img-overlay" />
          </div>
          <div className="pw-body">
            <div className="pf-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className={`pf-tag ${
                  tag.includes('ALGERIA') || tag.includes('BRAINERX') || tag.includes('HOGWARTS') || 
                  tag.includes('HACKATHON') || tag.includes('GRADUATION') || tag.includes('INTERACTIVE') || 
                  tag.includes('CLINIC') || tag.includes('PROPOSED') ? 'gold' : 
                  tag.includes('Gemini') || tag.includes('Three.js') || tag.includes('AI') || 
                  tag.includes('Hand') || tag.includes('JWT') || tag.includes('Prescription') ? 'blue' : 
                  'pink'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="pf-title">{project.title}</h3>
            {/* Use dangerouslySetInnerHTML to render HTML in description */}
            <p className="pf-desc" dangerouslySetInnerHTML={{ __html: project.description }} />
            <div className="pf-role">
              <span className="pf-role-lbl">ROLE //</span>
              <span className="pf-role-val">{project.role}</span>
            </div>
            <div className="pf-links">
              <a href={project.github} className="pf-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={14} />
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} className="pf-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={12} />
                  LinkedIn Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
