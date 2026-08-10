import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode, 
  FaReact, 
  FaServer, 
  FaTools, 
  FaDatabase, 
  FaRobot,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import Suprabh from '../assets/Suprabh.jpeg';

export const assets = {
  profileImg,
  Suprabh,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative Solutions',
    description: 'Developing creative solutions to complex engineering challenges with modern AI and web tech.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Crafting responsive, high-fidelity user experiences with fluid micro-animations.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean & Scalable Code',
    description: 'Writing maintainable, modular, and performant code following industry best practices.',
    color: 'text-blue'
  }
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive, interactive, and modern single-page web applications.',
    tags: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion', 'Vite']
  },
  {
    title: 'Backend & APIs',
    icon: FaServer,
    description: 'Developing RESTful APIs, server logic, and scalable backend microservices.',
    tags: ['Python', 'Flask', 'Django', 'FastAPI', 'Node.js', 'RESTful APIs']
  },
  {
    title: 'GenAI & Deep Learning',
    icon: FaRobot,
    description: 'Building intelligent AI assistants, LLM pipelines, CNNs, and neural networks.',
    tags: ['Generative AI', 'CNNs & ANNs', 'NLP & Transformers', 'TensorFlow / Keras', 'OpenAI API']
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    description: 'Training predictive models, classification, regression, and recommendation engines.',
    tags: ['Scikit-Learn', 'Ensemble Learning', 'Recommendation Systems', 'Feature Engineering']
  },
  {
    title: 'Data Science & Databases',
    icon: FaDatabase,
    description: 'Data preprocessing, exploratory data analysis, and relational/NoSQL databases.',
    tags: ['PostgreSQL', 'MySQL', 'Pandas & NumPy', 'Power BI', 'SQL', 'Data Pipelines']
  },
  {
    title: 'Tools & MLOps',
    icon: FaTools,
    description: 'Model deployment, version control, and modern developer workflow tools.',
    tags: ['Git & GitHub', 'MLOps & Deployment', 'Jupyter Notebook', 'Postman', 'Vercel / Cloud']
  }
];

export const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "Automated real-time attendance management system using OpenCV and facial recognition algorithms for instant student/employee identification and logging.",
    image: projectImg1,
    tech: ["Python", "OpenCV", "Facial Recognition", "Machine Learning", "Flask/SQL"],
    icons: [FaRobot, FaBrain, FaDatabase],
    demo: "https://face-attendance-deepface.onrender.com/", // Replace with your actual live link
  },
  {
    title: "GenAI Assistant",
    description: "Intelligent conversational assistant powered by Large Language Models (LLMs) and prompt engineering to automate workflows and query answering.",
    image: projectImg6,
    tech: ["Python", "Generative AI", "LLMs", "Prompt Engineering", "REST APIs"],
    icons: [FaRobot, FaBrain, FaServer]
  },
  {
    title: "CNN Image Classification",
    description: "Deep learning computer vision system utilizing Convolutional Neural Networks (CNNs) for high-accuracy multi-class image feature extraction.",
    image: projectImg2,
    tech: ["Python", "TensorFlow / Keras", "CNNs", "Deep Learning", "NumPy"],
    icons: [FaBrain, FaRobot, FaServer]
  },
  {
    title: "Customer Behavior Analytics",
    description: "End-to-end data analytics and business intelligence pipeline analyzing purchasing behavior, segmentation, and trends using SQL and Power BI.",
    image: projectImg3,
    tech: ["Python", "PostgreSQL", "Power BI", "Pandas", "EDA"],
    icons: [FaDatabase, FaChartLine, FaServer]
  },
  {
    title: "Insurance Premium Predictor",
    description: "End-to-end predictive machine learning model estimating insurance risk tiers and premium costs with high regression accuracy.",
    image: projectImg5,
    tech: ["Python", "Scikit-Learn", "Regression", "Feature Engineering"],
    icons: [FaBrain, FaChartLine, FaTools]
  },
  {
    title: "Personal Portfolio & Web Apps",
    description: "Modern, responsive developer portfolio and web applications built with React 19, Tailwind CSS, and fluid Framer Motion animations.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
    icons: [FaReact, FaCode, FaTools]
  }
];

export const workData = [
  {
    role: "Software Engineer Trainee",
    company: "Lexcorp Software Pvt. Ltd. • Bareilly",
    duration: "Jul 2026 – Present",
    highlights: [
      "Engineer scalable backend services & RESTful APIs using Python, Flask, and Django for enterprise client modules.",
      "Manage database design and query optimization across PostgreSQL and MySQL for high-throughput workflows.",
      "Collaborate across the complete SDLC — requirement scoping, unit testing, debugging, and cloud production deployments."
    ],
    color: "purple"
  },
  {
    role: "Campus Mantri (Campus Ambassador)",
    company: "GeeksforGeeks • Invertis University",
    duration: "Jun 2026 – Dec 2026",
    highlights: [
      "Official campus lead driving technical student engagement across Data Structures, Algorithms, and software career tracks.",
      "Organized university-wide coding hackathons, technical workshops, and developer competitions in coordination with GFG."
    ],
    color: "pink"
  },
  {
    role: "Data Science Virtual Intern",
    company: "EduSkills Foundation (AICTE)",
    duration: "Apr 2025 – Jun 2025",
    highlights: [
      "Engineered automated ETL data cleaning and feature engineering pipelines using Python (Pandas, NumPy).",
      "Trained and benchmarked supervised machine learning models using Scikit-Learn for structured predictive analytics."
    ],
    color: "blue"
  }
];