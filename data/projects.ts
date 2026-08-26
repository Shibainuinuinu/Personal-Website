export type Project = {
    title: string
    image: string
    description: string
    tech: string[]
    link?: string
}
    
export const projects: Project[] = [
    {
        title: "Project 1",
        image: "/globe.svg",
        description: "Project 1 Description",
        tech: ["Tech1", "Tech2", "Tech3"],
        link: "https://sample1.com"
    },
    {
        title: "Project 2",
        image: "/file.svg",
        description: "Project 2 Description",
        tech: ["Tech1", "Tech2", "Tech3"],
        link: "https://sample2.com"
    },
    {
        title: "Project 3",
        image: "/window.svg",
        description: "Project 3 Description",
        tech: ["Tech1", "Tech2", "Tech3"],
        link: "https://sample3.com"
    },
    {
        title: "Project 4",
        image: "/next.svg",
        description: "Project 4 Description",
        tech: ["Tech1", "Tech2", "Tech3"],
        link: "https://sample4.com"
    },
]