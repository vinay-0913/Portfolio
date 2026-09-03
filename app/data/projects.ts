export interface Project {
  id: number;
  slug: string;
  title: string;
  categories: string[];
  link: string;
  date: string;
  client: string;
  desc: string;
  overviewParagraphs: string[];
  gradient: string;
  images: string[];
  techNames: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "instaqrcode",
    title: "Instaqrcode.com",
    categories: ["SaaS", "Full Stack"],
    link: "https://www.instaqrcode.com/",
    date: "2026",
    client: "InstaQRCode SaaS",
    desc: "InstaQRCode is a full-stack QR Code Generator SaaS platform that enables users to create, customize, and manage dynamic QR codes with real-time scan analytics. The platform features secure authentication with Google OAuth, subscription management through Razorpay, and an interactive dashboard for tracking QR code performance. Built with Next.js, React, TypeScript, Node.js, and MongoDB, InstaQRCode helps businesses and individuals create branded QR experiences while gaining valuable insights from scan data.",
    overviewParagraphs: [
      "InstaQRCode is a modern, high-performance SaaS platform built for creators, businesses, and agencies who require dynamic, customizable QR code solutions with real-time scan analytics.",
      "The platform features an intuitive live customizer for QR styles, colors, and embedded logos, coupled with a robust analytics dashboard tracking scan counts, geographic locations, device breakdown, and peak engagement times.",
      "Engineered with Next.js, TypeScript, Node.js, and MongoDB, InstaQRCode incorporates enterprise-grade security, Google OAuth authentication, and automated billing via Razorpay.",
    ],
    gradient: "from-red-500 to-red-700",
    images: [
      "/projects/qrcode1.png",
      "/projects/qrcode2.png",
      "/projects/qrcode3.png",

    ],
    techNames: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Razorpay",
      "Google OAuth",
      "JWT",
    ],
  },
  {
    id: 2,
    slug: "jobs-hive",
    title: "Jobs Hive",
    categories: ["Full Stack", "Job Platform"],
    link: "https://www.jobshive.in/",
    date: "2025",
    client: "Jobs Hive Platform",
    desc: "Jobs Hive is a job search and application management platform designed to simplify the job-hunting process. It aggregates job listings from multiple sources, helping users discover relevant opportunities quickly and efficiently. The platform includes a smart job-matching system, application tracking dashboard, and automated job data management using Cron Jobs, reducing API costs while ensuring up-to-date listings. Built with React, Node.js, Express.js, MongoDB, Clerk Authentication, and JSearch API, Jobs Hive provides a seamless experience for finding, tracking, and managing career opportunities.",
    overviewParagraphs: [
      "Jobs Hive is a comprehensive career platform designed to remove friction from the job hunt by aggregating openings across major boards into a single streamlined workspace.",
      "The system features an automated job sync pipeline powered by scheduled Cron Jobs and caching, paired with an application status tracker and customized filter alerts.",
      "Developed using React, Node.js, Express.js, Supabase(Postgres), Clerk Authentication, jobshive.in offers unmatched speed and organized career management.",
    ],
    gradient: "from-yellow-500 to-orange-500",
    images: [
      "/projects/Job1.png",
      "/projects/Job2.png",
      "/projects/Job3.png",
    ],
    techNames: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Supabase",
      "Clerk"
    ],
  },
  {
    id: 3,
    slug: "interview-mentor-ai",
    title: "Interview Mentor AI",
    categories: ["AI / ML", "Web App"],
    link: "https://www.interviewmentor.in/",
    date: "2026",
    client: "Interview Mentor AI",
    desc: "Interview Mentor AI is an AI-powered mock interview platform that helps users prepare for Technical, HR, and Behavioral interviews through personalized practice sessions. Using advanced LLM technology, it generates adaptive questions, provides real-time feedback, and tailors interview experiences based on the user's responses. Built with React.js, Node.js, Express.js, and Gemini LLM, the platform enables candidates to improve their communication, problem-solving, and interview skills in a realistic interview environment.",
    overviewParagraphs: [
      "Interview Mentor AI revolutionizes job preparation by delivering realistic, adaptive mock interviews powered by the Gemini Large Language Model.",
      "Candidates can practice Technical, HR, and Behavioral interview tracks with real-time AI feedback on communication clarity, answer structure, and technical depth.",
      "Built with React.js, Node.js, Express.js, and Tailwind CSS, the platform ensures low latency, realistic conversational flow, and detailed performance scorecards after every session.",
    ],
    gradient: "from-blue-500 to-blue-700",
    images: [
      "/projects/AI3.png",
      "/projects/AI.png",
      "/projects/AI2.png",
    ],
    techNames: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Gemini LLM",
      "REST APIs",
    ],
  },
  {
    id: 4,
    slug: "news-now",
    title: "News Now",
    categories: ["AI / ML", "News Platform"],
    link: "https://news-now-nine.vercel.app/",
    date: "2025",
    client: "News Now Platform",
    desc: "News Now is an intelligent news aggregation platform that delivers real-time news from multiple sources in a personalized and user-friendly interface. The platform enables category-based browsing, country-specific filtering, and AI-powered article recommendations to help users discover relevant content effortlessly. By leveraging NLP techniques such as tokenization, stopword removal, and lemmatization, along with TF-IDF and cosine similarity algorithms, News Now analyzes article content and recommends related news stories based on user interests. Built with Python, Flask, Scikit-learn, NLTK, and NewsData.io API, News Now provides a smarter and more personalized news-reading experience.",
    overviewParagraphs: [
      "News Now is an intelligent news aggregation engine that delivers real-time curated stories tailored to reader preferences.",
      "Powered by Natural Language Processing (NLP) models utilizing TF-IDF vectorization and cosine similarity, the recommendation engine analyzes article topics to suggest relevant stories.",
      "Engineered with Python, Flask, Scikit-learn, NLTK, React, and Tailwind CSS, News Now delivers a clean, ad-free, high-speed reading experience.",
    ],
    gradient: "from-purple-500 to-indigo-600",
    images: [
      "/projects/News.png",
      "/projects/News2.png",
      "/projects/News3.png",
    ],
    techNames: [
      "Python",
      "Flask",
      "Scikit-learn",
      "NLTK",
      "React",
      "Tailwind CSS",
      "NewsData API",
    ],
  },
  {
    id: 5,
    slug: "resume-scan",
    title: "Resume Scan",
    categories: ["Gen AI", "Resume Matching"],
    link: "https://resume-scan-delta.vercel.app/",
    date: "2026",
    client: "Resume Scan Platform",
    desc: "**Resume Scan** is an AI-powered resume analysis and optimization platform that helps job seekers improve their resumes for better hiring outcomes. The platform provides recruiter-style evaluations, including skill gap analysis, impact scoring, clarity assessment, and shortlist probability predictions. It also features an end-to-end resume tailoring workflow that parses uploaded resumes, generates STAR-method improvement suggestions, and creates job-specific optimized resumes. Built with React, TypeScript, Tailwind CSS, and Gemini LLM, Resume Scan enables candidates to enhance their resumes and increase their chances of landing interviews.",
    overviewParagraphs: [
      "Resume Scan is an AI-powered platform that transforms resume evaluation from manual review into an automated, analytics-driven process.",
      "Using Gemini LLM, the system analyzes uploaded resumes to assess clarity, impact, and keyword alignment, generating scores and actionable improvement recommendations.",
      "Engineered with React, TypeScript, Tailwind CSS, and Gemini LLM, Resume Scan delivers precise, instant feedback that helps candidates optimize their resumes for ATS compatibility and recruiter preferences.",
    ],
    gradient: "from-purple-500 to-indigo-600",
    images: [
      "/projects/RS1.png",
      "/projects/RS2.png",
      "/projects/RS3.png",
    ],
    techNames: [

      "React",
      "Tailwind CSS",
      "TypeScript",
      "Gemini LLM"
    ],
  },
  {
    id: 6,
    slug: "Sensor-Anomaly-Detection",
    title: "Sensor Anomaly Detection",
    categories: ["Machine Learning", "Sensor-data"],
    link: "https://github.com/vinay-0913/Anomaly-Detection",
    date: "2026",
    client: "ML Project",
    desc: "**Sensor Anomaly Detection** is a machine learning project designed to identify abnormal patterns in large-scale industrial sensor data for predictive maintenance and fault detection. The system processes and analyzes over 1.6 million sensor records, leveraging advanced feature engineering and data preprocessing techniques to uncover hidden anomalies. By combining temporal and interaction-based features with a LightGBM model, the solution achieved high recall while significantly reducing false negatives in critical fault detection scenarios. Built using Python, Pandas, NumPy, Scikit-learn, TensorFlow, and LightGBM, the project demonstrates the application of AI and predictive analytics to improve operational reliability and data-driven decision-making.",
    overviewParagraphs: [
      "Sensor Anomaly Detection is an end-to-end machine learning pipeline engineered to detect critical anomalies in high-volume industrial sensor data.",
      "The system preprocesses and analyzes over 1.6 million sensor records, applying advanced feature engineering and data preprocessing techniques to uncover hidden anomalies that standard methods miss.",
      "A hybrid modeling approach combining temporal features, interaction-based metrics, and LightGBM machine learning models achieves high recall with significantly reduced false positives, critical for time-sensitive fault detection.",
    ],
    gradient: "from-purple-500 to-indigo-600",
    images: [
      "/projects/SA1.png",
      "/projects/SA2.png",
      "/projects/SA3.png",
    ],
    techNames: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
      "Pandas",
      "NumPy",
    ],
  },
];
