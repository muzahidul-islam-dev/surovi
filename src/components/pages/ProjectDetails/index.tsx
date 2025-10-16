"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "../../ui/button"
import { Progress } from "../../ui/progress"
import { ArrowLeft, MapPin, Calendar, Users, CheckCircle } from "lucide-react"

export default function ProjectDetails() {
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
    ]
    const { id } = useParams()
    const project = projects.find((p) => p.title === id)

    if (!project) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <Link to="/">
                    <Button>Return Home</Button>
                </Link>
            </div>
        )
    }

    const progress = (project.raised / project.goal) * 100

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="aspect-video overflow-hidden rounded-lg mb-6">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">{project.title}</h1>

                        <div className="prose prose-lg max-w-none mb-8">
                            <p className="text-lg leading-relaxed text-muted-foreground">{project.description}</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Impact Achieved</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Impact</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Impact</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">Impact</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium">Location</p>
                                            <p className="text-sm text-muted-foreground">{project.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium">Timeline</p>
                                            <p className="text-sm text-muted-foreground">{project.goal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4">Partners</h2>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                                        Partner
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                                        Partner
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                                        Partner
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="font-semibold text-lg mb-4">Funding Progress</h3>
                                <div className="space-y-4">
                                    <Progress value={progress} className="h-3" />
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            <span className="font-semibold text-foreground text-lg">${project.raised.toLocaleString()}</span>{" "}
                                            raised
                                        </span>
                                        <span className="text-muted-foreground">Goal: ${project.goal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Users className="h-4 w-4" />
                                        <span>{project.supporters} supporters</span>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full" size="lg">
                                Support This Project
                            </Button>

                            <div className="rounded-lg border bg-muted/50 p-6">
                                <h3 className="font-semibold mb-2">Share This Project</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Help us reach our goal by sharing this project with your network.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                                        Share
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
