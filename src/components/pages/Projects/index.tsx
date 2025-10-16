import { Link } from "react-router-dom"
import { Card, CardContent } from "../../ui/card"

function Projects() {
    const projects = [
        {
            title: "Clean Water Initiative",
            location: "East Africa",
            description: "Building wells and water filtration systems to provide clean drinking water to rural communities.",
            image: "/water-well-construction-africa.jpg",
            raised: 75000,
            goal: 100000,
            supporters: 1250,
        },
        {
            title: "Education for All",
            location: "Southeast Asia",
            description: "Constructing schools and providing educational materials to children in underserved areas.",
            image: "/school-construction-children-learning.jpg",
            raised: 45000,
            goal: 80000,
            supporters: 890,
        },
        {
            title: "Healthcare Access Program",
            location: "South America",
            description: "Mobile health clinics bringing medical care to remote villages and communities.",
            image: "/mobile-health-clinic-medical-care.jpg",
            raised: 62000,
            goal: 90000,
            supporters: 1100,
        },
        {
            title: "Sustainable Agriculture",
            location: "Central Africa",
            description: "Teaching sustainable farming techniques and providing tools to improve food security.",
            image: "/sustainable-farming-agriculture-training.jpg",
            raised: 38000,
            goal: 60000,
            supporters: 720,
        },
        {
            title: "Sustainable Agriculture",
            location: "Central Africa",
            description: "Teaching sustainable farming techniques and providing tools to improve food security.",
            image: "/sustainable-farming-agriculture-training.jpg",
            raised: 38000,
            goal: 60000,
            supporters: 720,
        },
        {
            title: "Sustainable Agriculture",
            location: "Central Africa",
            description: "Teaching sustainable farming techniques and providing tools to improve food security.",
            image: "/sustainable-farming-agriculture-training.jpg",
            raised: 38000,
            goal: 60000,
            supporters: 720,
        },
        {
            title: "Sustainable Agriculture",
            location: "Central Africa",
            description: "Teaching sustainable farming techniques and providing tools to improve food security.",
            image: "/sustainable-farming-agriculture-training.jpg",
            raised: 38000,
            goal: 60000,
            supporters: 720,
        },
        {
            title: "Sustainable Agriculture",
            location: "Central Africa",
            description: "Teaching sustainable farming techniques and providing tools to improve food security.",
            image: "/sustainable-farming-agriculture-training.jpg",
            raised: 38000,
            goal: 60000,
            supporters: 720,
        },
        {
            title: "Sustainable Agriculture",
            location: "Central Africa",
            description: "Teaching sustainable farming techniques and providing tools to improve food security.",
            image: "/sustainable-farming-agriculture-training.jpg",
            raised: 38000,
            goal: 60000,
            supporters: 720,
        },
    ]

    return (
        <div>
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Projects</h1>
                        <p className="text-lg text-muted-foreground text-pretty">
                            Explore moments of impact, hope, and transformation from our work around the world. Each image tells a
                            story of lives changed and communities empowered.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">

                    <div className="grid md:grid-cols-4 gap-8 mx-auto">
                        {projects.map((project, index) => {
                            return (
                                <Link to={`/project/${project.title}`}>
                                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-56 object-cover"
                                        />
                                        <CardContent className="">
                                            <div className="mb-2">
                                                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                    {project.location}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>

                                            <p className="text-muted-foreground mb-6">{project.description}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
