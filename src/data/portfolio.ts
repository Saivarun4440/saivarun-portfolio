export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string;
  category: string;
  transformValue: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Health Coverage Projection",
    description:
      "Built a Streamlit app to predict health insurance premiums with ML models, performing EDA and feature engineering on demographic data.",
    slug: "health-coverage-projection",
    image: "/uploads/HealthCoverageProjection.png",
    category: "Data Science",
    transformValue: "translate-x-0",
  },
  {
    id: 2,
    title: "Music Recommendation System",
    description:
      "Developed a content-based recommendation engine in Streamlit using Spotify API, delivering personalized song suggestions.",
    slug: "music-recommendation-system",
    image: "/uploads/MusicRecommendationSystem.png",
    category: "Machine Learning",
    transformValue: "translate-x-0",
  },
  {
    id: 3,
    title: "Automotive Scenario Dashboard",
    description:
      "Created interactive Tableau & D3.js dashboard analyzing Indian car brand performance with real-time and historical data visualizations.",
    slug: "automotive-scenario-dashboard",
    image: "/uploads/AutomotiveScenarioDashboard.png",
    category: "Data Visualization",
    transformValue: "translate-x-0",
  },
];
