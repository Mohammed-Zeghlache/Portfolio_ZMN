export const projects = [
  {
    id: 1,
    title: 'NetGuard DZ — Smart Network Incident Management Platform',
    description: `A full-stack PERN platform designed as a digital solution for Algeria Télécom to modernize
      internet incident reporting and network operations. Customers can report connectivity issues
      remotely through an intuitive dashboard, receive and track support tickets in real time,
      communicate with an AI assistant powered by Google Gemini, and follow the progress of their
      requests without visiting an agency. 

      The administration dashboard provides a centralized control center with live incident
      monitoring, interactive maps of reported outages, ticket management, user management,
      technician availability tracking, network analytics, and real-time operational insights to
      accelerate response times and improve service quality across Algeria.`,
    image: '/Netguardz.png',
    tags: ['🇩🇿 ALGERIA TÉLÉCOM · PROPOSED SOLUTION', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Gemini AI', 'OpenStreetMap'],
    role: 'Solo Full-Stack Developer — Designed and developed the complete PERN architecture, REST APIs, PostgreSQL database, JWT authentication, customer & admin dashboards, AI assistant integration (Google Gemini), interactive OpenStreetMap visualization, ticket management system, and real-time incident monitoring.',
    github: 'https://github.com/Mohammed-Zeghlache/NetGuard-DZ',
    demo: 'https://www.linkedin.com/posts/mohammed-nadhir-zeghlache-9100342b1_netguarddz-pernstack-reactjs-activity-7469429230011834369-u7Lz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEru4xwBG7by05Q1gQ_kpGa92bXGlTgEWtw',
    featured: true,
    // flag: 'FLAGSHIP PROJECT' it css is .project-winner::before 
  },
  {
      id: 2,
    title: 'SafeCity — AI-Powered Public Safety Platform',
    description: `An intelligent platform developed during the Hogwarts Hackathon to simplify public incident
      reporting. Users can report accidents, crimes, or emergencies through an AI chatbot that
      automatically captures location details and forwards reports to an admin dashboard featuring
      live maps, real-time alerts, and risk-zone visualization.`,
    image: '/Safecity.png',
    tags: ['🏆 HOGWARTS HACKATHON · 1ST PLACE', 'React', 'Node.js', 'Express', 'AI Chatbot', 'Live Maps', 'Geolocation'],
    role: 'Frontend developer – Built responsive React interfaces, integrated maps and chatbot UI, and collaborated with the team to deliver the hackathon-winning solution.',
    github: 'https://github.com/DahobachirGhada/HogwartsHack26',
    demo:'https://www.linkedin.com/posts/mohammed-nadhir-zeghlache-9100342b1_hackathonwinner-safecity-binarypatronus-activity-7448753217536122880-w41V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEru4xwBG7by05Q1gQ_kpGa92bXGlTgEWtw',
    featured: true
  },
  {
    id: 3,
    title: 'Galaxy Explorer — Interactive Space Experience',
    description: `An interactive frontend experience that lets users explore the Moon, planets, and the galaxy
      using webcam-based hand gestures. Navigate and interact with immersive 3D objects through
      natural hand movements in a modern, responsive interface.`,
    image: '/Galaxy.png',
    tags: ['🚀 INTERACTIVE EXPERIENCE', 'React', 'JavaScript', 'Three.js', 'Hand Tracking', 'Webcam', '3D'],
    role: 'Frontend developer – Built the interactive UI, integrated webcam hand tracking, developed 3D scene interactions, and optimized the responsive user experience.',
    github: 'https://github.com/Mohammed-Zeghlache/AstroFlow-Front',
    featured: true
  },
  {

     id: 4,
    title: 'GPT-3 Platform — MERN Web Application',
    description: `My first full-stack MERN project, developed as my graduation project at BrainerX.
      A modern web application introducing GPT-3, featuring secure user authentication,
      responsive UI, protected routes, and dedicated pages showcasing AI capabilities
      and platform features.`,
    image: '/Gpt.png',
    tags: ['🎓 BRAINERX · GRADUATION PROJECT', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'GPT-3'],
    role: 'Solo full-stack developer – MERN architecture, JWT authentication, login & signup system, REST APIs, MongoDB integration, and responsive UI development.',
    github: 'https://github.com/Mohammed-Zeghlache/GPT-3-fullstack-demo',
    demo: 'https://www.linkedin.com/posts/mohammed-nadhir-zeghlache-9100342b1_fullstackdevelopment-reactjs-nodejs-activity-7352757864022646784-FHL5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEru4xwBG7by05Q1gQ_kpGa92bXGlTgEWtw',
    featured: true
  },
  {
    id: 5,
    title: 'MediCare — Clinic Management System',
    description: `A React-based clinic management system connecting receptionists and doctors through real-time
      dashboards. Patients are registered at reception, added to the doctor's queue, and receive
      digitally generated prescriptions that can be printed, improving workflow and reducing
      handwritten medication errors.`,
    image: '/Medicar.png',
    tags: ['🏥 CLINIC MANAGEMENT', 'React', 'Dashboard', 'Patient Queue', 'Prescription', 'Healthcare'],
    role: 'Frontend developer – Built responsive React dashboards, patient registration workflow, doctor queue management, prescription interface, and printable medical reports.',
    github: 'https://github.com/Mohammed-Zeghlache/MediCare-Clinic',
    demo:'https://www.linkedin.com/posts/mohammed-nadhir-zeghlache-9100342b1_healthtech-digitalhealth-clinicmanagement-activity-7414318407803731968-4Fa2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEru4xwBG7by05Q1gQ_kpGa92bXGlTgEWtw',
    featured: true
  },
  {
    id: 6,
    title: 'FurniStore — MERN E-Commerce Platform',
    description: `My second full-stack MERN graduation project at BrainerX. A modern e-commerce platform for
      furniture, sofas, bikes, and home products featuring secure authentication, product browsing,
      shopping cart, order management, and a responsive user experience.`,
    image: '/Sofa.png',
    tags: ['🎓 BRAINERX · GRADUATION PROJECT', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'E-Commerce'],
    role: 'Solo full-stack developer – Built the complete MERN architecture, REST APIs, MongoDB database, JWT authentication, shopping cart, product management, and responsive frontend.',
    github: 'https://github.com/Mohammed-Zeghlache/LuxeLiving',
    demo:'https://www.linkedin.com/posts/mohammed-nadhir-zeghlache-9100342b1_webdevelopment-fullstackdeveloper-mernstack-activity-7357097842324168704-7n_D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEru4xwBG7by05Q1gQ_kpGa92bXGlTgEWtw',
    featured: true
  }
];

// ✅ EXPORTS
export const stack = ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Git & GitHub', 'REST APIs', 'JWT Auth', 'MongoDB', 'MySQL', 'AI Integration', 'Docker'];

export const marqueeItems = ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'JavaScript', 'REST APIs', 'JWT Authentication', 'Git', 'GitHub', 'Docker', 'AI', 'Responsive Design', 'Problem Solving'];

export const skills = {
  frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MVC Architecture'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Render', 'Figma', 'AI']
};

export const stats = [
  { number: '15+', label: 'projects shipped' },
  { number: '1ST PLACE', label: 'hackathon winner' },
  { number: '+10', label: 'certifications' }
];

export const timeline = [
  {
    year: '2024 – Present',
    title: 'Computer Science Student',
    org: 'University Of Msila, Algeria',
    desc: 'Studying Computer Science while building practical experience in full-stack development, software engineering, databases, networking, and artificial intelligence through academic and personal projects.'
  },
  {
    year: '2025',
    title: 'Full-Stack Web Development',
    org: 'BrainerX School',
    desc: 'Completed an intensive project-based program covering React.js, Node.js, Express.js, PostgreSQL, REST APIs, authentication, Git, deployment, and modern software development practices.'
  },
  {
    year: '2025 – Present',
    title: 'Full-Stack Developer & AI Enthusiast',
    org: 'Personal & Academic Projects',
    desc: 'Designed and developed intelligent web applications focused on healthcare, smart cities, network management, AI integration, automation, and solving real-world problems using modern web technologies.'
  }
];

export const certifications = [
  { issuer: 'Hogwarts Hack Event 2026', name: '1st Place Winner', tag: 'Achievement' },
  { issuer: 'Project Zero Hackathon 2026', name: 'Participant', tag: 'Hackathon' },
  { issuer: 'BrainerX School', name: 'Full-Stack Web Development', tag: 'Professional' },
  { issuer: 'BrainerX School', name: 'Introduction to Computer Science', tag: 'Professional' },
  { issuer: 'Busuu', name: 'English Language • A1 Certificate 2024', tag: 'Language' },
  { issuer: 'Busuu', name: 'French Language • A2 Certificate 2024', tag: 'Language' },
  { issuer: 'Embassy Education School', name: 'English Language • A2 Certificate 2024', tag: 'Language' },
  { issuer: 'CSE Club', name: 'Python Workshop Certificate 2026', tag: 'Workshop' },
  { issuer: 'CSE Club', name: 'Data Science Workshop Certificate 2025', tag: 'Workshop' }
];

export const contact = {
  email: 'mouhamedzeghlache7@gmail.com',
  whatsapp: '+213655457990',
  linkedin: 'https://www.linkedin.com/in/mohammed-nadhir-zeghlache-9100342b1/',
  github: 'https://github.com/Mohammed-Zeghlache'
};
