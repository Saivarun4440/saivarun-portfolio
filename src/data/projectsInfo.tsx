// src/app/data/projectsInfo.tsx

export interface ProjectInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  gitLink: string;
  liveLink: string;
  skills: string[];
}

export const projectsInfo: ProjectInfo[] = [
  {
    id: 1,
    title: "Health Coverage Projection",
    description:
      "A Streamlit app that predicts insurance premiums using machine learning and exploratory data analysis techniques.",
    image: "/uploads/HealthCoverageProjection.png",
    gitLink: "https://github.com/Saivarun4440/HealthCoverageProjection",
    liveLink: "", // Add deployment link if available
    skills: ["Python", "Streamlit", "Machine Learning"],
  },
  {
    id: 2,
    title: "Music Recommendation System",
    description:
      "A content-based recommender system built with Spotify API and Streamlit for personalized music suggestions.",
    image: "/uploads/MusicRecommendationSystem.png",
    gitLink: "https://github.com/Saivarun4440/MusicRecommendationSystem",
    liveLink: "", // Add deployment link if available
    skills: ["Python", "Streamlit", "Spotify API"],
  },
  {
    id: 3,
    title: "Automotive Scenario Dashboard",
    description:
      "An interactive dashboard analyzing car brand performance across India using Tableau and Excel data sources.",
    image: "/uploads/AutomotiveScenarioDashboard.png",
    gitLink: "https://github.com/Saivarun4440/AutomotiveScenarioDashboard",
    liveLink: "", // Add Tableau public link if published
    skills: ["Tableau", "Excel", "SQL"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This website you're browsing! A responsive and fast developer portfolio built with Next.js and TailwindCSS.",
    image: "/uploads/PortfolioImage.png",
    gitLink: "https://github.com/Saivarun4440/portfolio", // replace with your actual portfolio repo
    liveLink: "https://saivarun-portfolio.vercel.app/",
    skills: ["Next.js", "React", "TailwindCSS", "TypeScript"],
  },
];
