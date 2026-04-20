require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Seed Projects
    const projects = [
  {
    title: 'JobTrackr',
    description: 'AI-powered MERN job application tracker with smart status management, resume parsing, and application analytics.',
    longDescription: 'A full-stack job hunting companion built on the MERN stack. Features AI-powered job description analysis, resume-to-job match scoring, kanban-style application pipeline, email reminders, and a dashboard with application funnel analytics.',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'JWT'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Bharadwaj2608',
    featured: true,
    order: 1,
    year: 2024,
    status: 'completed'
  },
  {
    title: 'AI Pothole Detection',
    description: 'Real-time road anomaly detection system benchmarking YOLOv5, SSD, ResNet & CNN for smart city infrastructure.',
    longDescription: 'A computer vision system that detects potholes in real time by benchmarking four deep learning architectures — YOLOv5, SSD, ResNet, and CNN — to identify the highest accuracy model for road safety monitoring.',
    thumbnail: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800',
    techStack: ['Python', 'YOLOv5', 'TensorFlow', 'OpenCV', 'Scikit-learn'],
    category: 'other',
    githubUrl: 'https://github.com/Bharadwaj2608',
    featured: true,
    order: 2,
    year: 2024,
    status: 'completed'
  },
  {
    title: 'AI Doctor Chatbot',
    description: 'NLP-powered medical chatbot that analyzes symptoms and provides preliminary health guidance via human-like conversations.',
    longDescription: 'An AI healthcare assistant built with NLP to understand user symptoms and return preliminary health guidance. Trained on medical Q&A datasets with a conversational flow designed for accessibility and reliability.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    techStack: ['Python', 'NLP', 'TensorFlow', 'Keras', 'React'],
    category: 'other',
    githubUrl: 'https://github.com/Bharadwaj2608',
    featured: true,
    order: 3,
    year: 2024,
    status: 'completed'
  },
  {
    title: 'AI Diet & Fitness Planner',
    description: 'Personalized AI system generating custom meal & workout plans from user BMI, health data, and fitness goals.',
    longDescription: 'A health-tech platform that uses ML algorithms to dynamically generate and adapt personalized diet and fitness plans. Integrates a recommendation engine with a clean React UI for real-time plan updates.',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    techStack: ['Python', 'Scikit-learn', 'React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Bharadwaj2608',
    featured: false,
    order: 4,
    year: 2024,
    status: 'completed'
  },
];

    // Seed Skills
    const skills = [
      // Frontend
      { name: 'React', category: 'frontend', proficiency: 95, color: '#61DAFB', order: 1 },
      { name: 'TypeScript', category: 'frontend', proficiency: 88, color: '#3178C6', order: 2 },
      { name: 'Three.js', category: 'frontend', proficiency: 80, color: '#000000', order: 3 },
      { name: 'Next.js', category: 'frontend', proficiency: 85, color: '#000000', order: 4 },
      { name: 'Vue.js', category: 'frontend', proficiency: 75, color: '#4FC08D', order: 5 },
      { name: 'GSAP', category: 'frontend', proficiency: 82, color: '#88CE02', order: 6 },
      // Backend
      { name: 'Node.js', category: 'backend', proficiency: 92, color: '#339933', order: 1 },
      { name: 'Express', category: 'backend', proficiency: 90, color: '#000000', order: 2 },
      { name: 'Python', category: 'backend', proficiency: 78, color: '#3776AB', order: 3 },
      { name: 'GraphQL', category: 'backend', proficiency: 80, color: '#E10098', order: 4 },
      { name: 'REST APIs', category: 'backend', proficiency: 95, color: '#FF6B35', order: 5 },
      // Database
      { name: 'MongoDB', category: 'database', proficiency: 88, color: '#47A248', order: 1 },
      { name: 'PostgreSQL', category: 'database', proficiency: 82, color: '#336791', order: 2 },
      { name: 'Redis', category: 'database', proficiency: 75, color: '#DC382D', order: 3 },
      { name: 'MySQL', category: 'database', proficiency: 80, color: '#4479A1', order: 4 },
      // DevOps
      { name: 'Docker', category: 'devops', proficiency: 80, color: '#2496ED', order: 1 },
      { name: 'AWS', category: 'devops', proficiency: 72, color: '#FF9900', order: 2 },
      { name: 'CI/CD', category: 'devops', proficiency: 75, color: '#FC6D26', order: 3 },
      { name: 'Kubernetes', category: 'devops', proficiency: 65, color: '#326CE5', order: 4 },
      // Tools
      { name: 'Git', category: 'tools', proficiency: 92, color: '#F05032', order: 1 },
      { name: 'Figma', category: 'tools', proficiency: 85, color: '#F24E1E', order: 2 },
      { name: 'VS Code', category: 'tools', proficiency: 95, color: '#007ACC', order: 3 },
    ];

    await Project.insertMany(projects);
    await Skill.insertMany(skills);

    console.log(`✅ Seeded ${projects.length} projects and ${skills.length} skills`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
};

seedData();
