export type Project = {
    slug: string
    title: string
    image: string
    description: string
    tech: string[]
    link?: string
    role?: string
    timeframe?: string
    problem?: string
    approach?: string
    outcome?: string
    highlights?: string[]
    demo?: string
}

export const projects: Project[] = [
    {
        slug: "project-happycows",
        title: "Project HappyCows",
        image: "/globe.svg",
        description: "Collaborated on a 6-person team to extend and maintain a legacy full-stack codebase. Fixed 20+ React ESLint violations, implemented backend CRUD endpoints with Spring Boot, and strengthened reliability using JaCoCo mutation testing.",
        tech: ["React", "Java", "Spring Boot", "Swagger"],
        link: "https://github.com/Shibainuinuinu",
        role: "Full-stack developer, 6-person team",
        problem: "An existing educational farming-simulation platform had accumulated significant technical debt. The frontend carried dozens of lint violations, and parts of the backend lacked the endpoints needed for new coursework features.",
        approach: "Worked inside an unfamiliar legacy codebase rather than greenfield code: traced existing patterns before changing them, cleared 20+ React ESLint violations without altering behavior, and added backend CRUD endpoints in Spring Boot documented through Swagger.",
        outcome: "Shipped new endpoints against a stable frontend and used JaCoCo mutation testing to verify the test suite actually caught regressions rather than just executing lines.",
        highlights: [
            "Resolved 20+ React ESLint violations across a legacy frontend",
            "Implemented backend CRUD endpoints in Spring Boot",
            "Documented the API surface with Swagger",
            "Used JaCoCo mutation testing to validate test quality, not just coverage",
        ],
    },
    {
        slug: "thinkboard",
        title: "Thinkboard",
        image: "/file.svg",
        description: "Built a full-stack MERN application supporting note creation, editing, and deletion. Implemented RESTful APIs with Node.js and Express, and integrated Upstash Redis for rate limiting to improve app reliability.",
        tech: ["React", "MongoDB", "Express", "Node.js"],
        link: "https://github.com/Shibainuinuinu",
        role: "Solo developer",
        problem: "A note-taking app needs full CRUD over persistent storage, but an unprotected public write API invites abuse and runaway database costs.",
        approach: "Built the full MERN stack end to end — React frontend against RESTful Node/Express endpoints backed by MongoDB — then put Upstash Redis rate limiting in front of the write paths so a single client couldn't flood the API.",
        outcome: "A working notes application with create, edit, and delete flows, hardened against abuse at the API layer. The same rate-limiting approach now protects the contact form on this site.",
        highlights: [
            "Full CRUD notes app on the MERN stack",
            "RESTful API design with Node.js and Express",
            "Upstash Redis rate limiting on write endpoints",
        ],
    },
    {
        slug: "dataorbit-ml-model",
        title: "DataOrbit ML Model",
        image: "/window.svg",
        description: "Winner of the Predictive Modeling Award at UCSB's DataOrbit 2025 hackathon. Built and evaluated a machine learning model to predict outcomes from raw data, using feature engineering and cross-validation to maximize accuracy.",
        tech: ["Python", "scikit-learn", "pandas", "NumPy"],
        link: "https://github.com/Shibainuinuinu",
        role: "Hackathon team, DataOrbit 2025 at UC Santa Barbara",
        timeframe: "2025",
        problem: "A hackathon dataset arrived raw and unmodeled, with a fixed deadline and no guarantee that any signal in it was easy to reach.",
        approach: "Prioritized feature engineering over model complexity — cleaned and reshaped the raw data with pandas and NumPy, then trained and compared scikit-learn models using cross-validation so the reported accuracy reflected generalization rather than a lucky split.",
        outcome: "Won the Predictive Modeling Award at DataOrbit 2025.",
        highlights: [
            "Winner, Predictive Modeling Award at DataOrbit 2025",
            "Feature engineering pipeline built with pandas and NumPy",
            "Cross-validated model selection to avoid overfitting to a single split",
        ],
    },
    {
        slug: "google-help-chatbot",
        title: "Google Help Chatbot",
        image: "/next.svg",
        description: "Designed a chatbot for Google Help using the Dialogflow API, handling 50+ Help pages and 100+ user intents. Built the frontend with HTML, CSS, and Figma, and presented to 100+ people at the Opportunities For All culmination event.",
        tech: ["Dialogflow", "HTML/CSS", "Figma", "JavaScript"],
        link: "https://github.com/Shibainuinuinu",
        role: "Designer and developer, Opportunities For All program",
        problem: "Google Help documentation is spread across many pages, and users asking a question in their own words often can't find the page that answers it.",
        approach: "Mapped 50+ Help pages to over 100 distinct user intents in Dialogflow so natural-language questions would route to the right content. Designed the interface in Figma first, then built it out in HTML, CSS, and JavaScript.",
        outcome: "Delivered a working conversational interface over the Help corpus and presented it to an audience of 100+ at the Opportunities For All culmination event.",
        highlights: [
            "100+ user intents mapped across 50+ Help pages",
            "Figma-first design, implemented in HTML/CSS/JavaScript",
            "Presented to 100+ attendees at the program culmination event",
        ],
    },
    {
        slug: "outfit-recommender",
        title: "Outfit Recommender",
        image: "/globe.svg",
        description: "Built an outfit recommendation program using the Yelp Fusion and OpenWeatherMap APIs to suggest clothing based on weather and location. Won 'Most Technical Project' at Mission Bit Demo Day, presenting to 150+ attendees.",
        tech: ["Python", "Yelp API", "OpenWeather API"],
        link: "https://github.com/Shibainuinuinu",
        role: "Solo developer, Mission Bit program",
        problem: "Deciding what to wear depends on two things people check separately: where they're going and what the weather will be like when they get there.",
        approach: "Combined two third-party APIs into one recommendation — OpenWeatherMap for current conditions and Yelp Fusion to resolve the destination and its context — then mapped the joined signals to clothing suggestions in Python.",
        outcome: "Won 'Most Technical Project' at Mission Bit Demo Day, presented to an audience of 150+.",
        highlights: [
            "Winner, 'Most Technical Project' at Mission Bit Demo Day",
            "Integrated the Yelp Fusion and OpenWeatherMap APIs",
            "Presented to 150+ attendees",
        ],
    },
    {
        slug: "valorant-fan-site",
        title: "Valorant Fan Site",
        image: "/file.svg",
        description: "Created a top-5 award-winning Valorant video game website during the Code Tenderloin program. Designed and built a responsive, interactive fan page using HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Shibainuinuinu",
        role: "Solo developer, Code Tenderloin program",
        problem: "An early project with a deliberately open brief: build something interactive and responsive from scratch, without a framework to lean on.",
        approach: "Built the entire site in vanilla HTML, CSS, and JavaScript — hand-writing the responsive layout and the interactive behavior that a framework would normally abstract away.",
        outcome: "Placed in the top 5 projects in the Code Tenderloin program.",
        highlights: [
            "Top-5 project in the Code Tenderloin program",
            "Responsive layout built without a CSS framework",
            "Interactive behavior in vanilla JavaScript",
        ],
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug)
}
