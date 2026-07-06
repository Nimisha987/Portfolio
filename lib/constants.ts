export const TOKENS = {
  bg: "#030304",
  panel: "#0C0E13",
  panelBorder: "#1D212B",
  textPrimary: "#F5F6F8",
  textMuted: "#9CA3AF",
  textFaint: "#565D6B",
  accent: "#6C63FF",
  accentSoft: "#B4B6FF",
  green: "#34D399",
  pink: "#F472B6",
};

export const NAV_LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export const BADGES = ["FULL-STACK DEVELOPER", "AI/ML ENTHUSIAST", "RESEARCH INTERN"];
export const TECH_STACK_ROW1 = [
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "Java", slug: "openjdk", color: "ED8B00" },
  { name: "SQL", slug: "postgresql", color: "4169E1" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "FastAPI", slug: "fastapi", color: "009688" },
  { name: "Flask", slug: "flask", color: "FFFFFF" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },
  { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
];

export const TECH_STACK_ROW2 = [
  { name: "OpenCV", slug: "opencv", color: "5C3EE8" },
  { name: "Pandas", slug: "pandas", color: "E2E8F0" },
  { name: "NumPy", slug: "numpy", color: "4D77CF" },
  { name: "LangChain", slug: "langchain", color: "1C3C3C" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Vercel", slug: "vercel", color: "FFFFFF" },
  { name: "Render", slug: "render", color: "46E3B7" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
];
// export const TECH_STACK = [
//   { name: "Python", slug: "python", color: "3776AB" },
//   { name: "C++", slug: "cplusplus", color: "00599C" },
//   { name: "Java", slug: "openjdk", color: "ED8B00" },
//   { name: "SQL", slug: "postgresql", color: "336791" },

//   { name: "React", slug: "react", color: "61DAFB" },
//   { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
//   { name: "FastAPI", slug: "fastapi", color: "009688" },
//   { name: "Flask", slug: "flask", color: "FFFFFF" },
//   { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },

//   { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
//   { name: "OpenCV", slug: "opencv", color: "5C3EE8" },
//   { name: "Pandas", slug: "pandas", color: "150458" },
//   { name: "NumPy", slug: "numpy", color: "013243" },

//   { name: "LangChain", slug: "langchain", color: "1C3C3C" },
// //   { name: "LangGraph", slug: "langgraph", color: "7B61FF" },
// //   { name: "OpenAI", slug: "openai", color: "FFFFFF" },

//   { name: "Git", slug: "git", color: "F05032" },
//   { name: "GitHub", slug: "github", color: "FFFFFF" },
//   { name: "Vercel", slug: "vercel", color: "FFFFFF" },
//   { name: "Render", slug: "render", color: "FFFFFF" },

//   { name: "MongoDB", slug: "mongodb", color: "47A248" },
//   { name: "Firebase", slug: "firebase", color: "FFCA28" },
// ];
export const EXPERIENCE = [
  {
    role: "Research Intern (SPARK Program)",
    org: "CSIR – Fourth Paradigm Institute (CSIR-4PI)",
    period:"May 2026 – Present",
    type: "Part Time",
    desc: "Selected for the prestigious SPARK (Student Programme for Advancement of Research Knowledge) by CSIR. Working on Machine Learning research under the guidance of experienced researchers while gaining hands-on exposure to research methodologies, AI applications, and technical problem-solving.",
    tags:  ["Python", "Machine Learning", "Research", "AI"],
  },
  {
    role: "AIML Intern",
    org: "makewithus",
    period: "May 2026 - Present",
    type: "Part Time",
    desc:  "Developed intelligent customer support chatbots with real-time streaming.Integrated AI APIs, FastAPI backend, and modern web technologies.Worked on automation workflows and AI-powered user experiences.",
     
    tags: ["Openrouter", "NextJs", "Python","FastAPI","LLMs"],
  },
//   {
//     role: "Computer Vision Researcher",
//     org: "Independent research",
//     period: "Recent",
//     type: "Research",
//     desc: "Explored multimodal fusion for a child malnutrition prediction system, combining image encoders with tabular data across the ARAN and Child Growth Monitor datasets.",
//     tags: ["Computer Vision", "MobileNetV3", "Multimodal Fusion"],
//   },
];
export const SOCIALS = {
  github: "https://github.com/Nimisha987",
  linkedin: "https://www.linkedin.com/in/nimishaagrawal15/",
  email: "nimishaagrawal115@gmail.com",
};

export const ACHIEVEMENTS = [
  {
    icon: "cloud",
    tag: "Certification",
    tagColor: "orange",
    title: "AWS Certified Cloud Practitioner",
    desc: "Validated foundational knowledge of AWS Cloud, core services, security, architecture, and cloud best practices.",
  },
//   {
//     icon: "brain",
//     tag: "Hackathon",
//     tagColor: "accent",
//     title: "Built PulseAI in an agentic AI hackathon",
//     desc: "Designed a proactive life-event banking agent using Claude, Kafka, and a React Native front end.",
//   },
  {
    icon: "brain",
    tag: "Certification",
    tagColor: "purple",
    title: "AWS Certified AI Practitioner",
    desc: "Demonstrated expertise in AI/ML fundamentals, Generative AI concepts, responsible AI, and AWS AI services.",
  },
//   {
//     icon: "flask",
//     tag: "Research",
//     tagColor: "green",
//     title: "Researched CV for child malnutrition prediction",
//     desc: "Explored image + tabular fusion architectures as the lead project for AI engineering internship applications.",
//   },
];

export const PROJECTS = [
  {
    title: "Customer Support AI",
    gradient: "linear-gradient(120deg,#C0C0C0,#000000)",
    tag: "Chatbot",
    desc: "Built an intelligent customer support chatbot that delivers real-time, human-like responses using Large Language Models (LLMs). The system integrates Retrieval-Augmented Generation (RAG), voice interaction, and intent detection to provide accurate, context-aware assistance. It supports real-time streaming responses, automatic model fallback, and seamless knowledge retrieval for enhanced user experience.",
    stack: ["Next.js", "React", "FastAPI", "OpenRouter", "LangChain"," Web Speech API"],
    live: "https://customer-support-ai-gilt.vercel.app/",
    github: "https://github.com/Nimisha987/CustomerSupportAI.git",
  },
  {
    title: "Nurse AI",
    gradient: "linear-gradient(120deg, #0F2F2A, #34D399)",
    tag: "Healthcare",
    desc: "NurseAI is an AI-powered post-discharge recovery companion that transforms hospital discharge summaries into personalized recovery plans. The platform uses OCR and Large Language Models (LLMs) to extract medications, diet restrictions, follow-up appointments, and care instructions from medical documents in multiple Indian languages. It provides patients with easy-to-understand recovery guidance, personalized diet recommendations, medication reminders, and recovery tracking to improve post-hospital care and reduce the risk of complications.",
    stack: [" Python", "FastAPI", "OCR", "LLMs", "NLP"],
  },
  {
    title: "Secure Multimodal Child Malnutrition Prediction using Early Fusion Learning",
    gradient: "linear-gradient(120deg, #1A1A2E, #6C63FF)",
    tag: "Research Project",
    desc: "Developed a multimodal AI model for child malnutrition prediction by combining medical tabular data with image embeddings extracted using MobileNetV2 through an Early Fusion approach. Implemented cryptographic techniques to secure sensitive patient data and trained a LightGBM classifier on fused features, achieving improved performance over a tabular-only baseline using ROC-AUC, F1-Score, and Accuracy.",
    stack: [" Python", "TensorFlow"," MobileNetV2","LightGBM", "Scikit-learn", "Pandas", "NumPy"," Cryptography","OpenCV", "PIL"],
    github: "https://github.com/Nimisha987/ChildMalnutrition.git",
  },
//   {
//     title: "Voice & Text Issue Logger",
//     gradient: "linear-gradient(120deg, #2A1A3E, #B4B6FF)",
//     tag: "Production",
//     desc: "Speak or type an issue on the EMS portal — AI parses intent and updates a Google Doc automatically.",
//     stack: ["Groq Whisper", "OpenRouter", "Google Docs API"],
//   },
];