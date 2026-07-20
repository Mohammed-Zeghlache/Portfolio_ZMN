import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contact } from '../data/data';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner reveal">
        <div className="sec-header">
          <span className="sec-num">// 04 — contact</span>
          <h2 className="sec-title">Let's build <em>together</em></h2>
        </div>
        <p className="contact-sub">Open for Frontend roles, freelance, or technical collaborations.</p>
        <div className="contact-links">
          <a href={`https://wa.me/${contact.whatsapp}`} className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
          <a href={`mailto:${contact.email}`} className="contact-link">
            <FaEnvelope size={16} />
            Email
          </a>
          <a href={contact.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={17} />
            LinkedIn
          </a>
          <a href={contact.github} className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaGithub size={17} />
            GitHub
          </a>
        </div>
        <div className="contact-availability">
          <span className="avail-dot"></span> Open to work · immediate
        </div>
      </div>
    </section>
  );
}

export default Contact;