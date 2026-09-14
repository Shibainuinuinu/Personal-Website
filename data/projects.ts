export type Project = {
    title: string
    image: string
    description: string
    tech: string[]
    link?: string
}
    
export const projects: Project[] = [
    {
        title: "Project HappyCows",
        image: "/globe.svg",
        description: "Collaborated on a 6-person team to extend and maintain a legacy full-stack codebase. Fixed 20+ React ESLint violations, implemented backend CRUD endpoints with Spring Boot, and strengthened reliability using JaCoCo mutation testing.",
        tech: ["React", "Java", "Spring Boot", "Swagger"],
        link: "https://github.com/Shibainuinuinu"
    },
    {
        title: "Thinkboard",
        image: "/file.svg",
        description: "Built a full-stack MERN application supporting note creation, editing, and deletion. Implemented RESTful APIs with Node.js and Express, and integrated Upstash Redis for rate limiting to improve app reliability.",
        tech: ["React", "MongoDB", "Express", "Node.js"],
        link: "https://github.com/Shibainuinuinu"
    },
    {
        title: "DataOrbit ML Model",
        image: "/window.svg",
        description: "Winner of the Predictive Modeling Award at UCSB's DataOrbit 2025 hackathon. Built and evaluated a machine learning model to predict outcomes from raw data, using feature engineering and cross-validation to maximize accuracy.",
        tech: ["Python", "scikit-learn", "pandas", "NumPy"],
        link: "https://github.com/Shibainuinuinu"
    },
    {
        title: "Google Help Chatbot",
        image: "/next.svg",
        description: "Designed a chatbot for Google Help using the Dialogflow API, handling 50+ Help pages and 100+ user intents. Built the frontend with HTML, CSS, and Figma, and presented to 100+ people at the Opportunities For All culmination event.",
        tech: ["Dialogflow", "HTML/CSS", "Figma", "JavaScript"],
        link: "https://github.com/Shibainuinuinu"
    },
    {
        title: "Outfit Recommender",
        image: "/globe.svg",
        description: "Built an outfit recommendation program using the Yelp Fusion and OpenWeatherMap APIs to suggest clothing based on weather and location. Won 'Most Technical Project' at Mission Bit Demo Day, presenting to 150+ attendees.",
        tech: ["Python", "Yelp API", "OpenWeather API"],
        link: "https://github.com/Shibainuinuinu"
    },
    {
        title: "Valorant Fan Site",
        image: "/file.svg",
        description: "Created a top-5 award-winning Valorant video game website during the Code Tenderloin program. Designed and built a responsive, interactive fan page using HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Shibainuinuinu"
    },
]