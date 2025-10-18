import { Link } from "react-router-dom"
import { Button } from "../../ui/button"
import { Card } from "../../ui/card"
import { ArrowRight, Heart, Users, Target, Globe } from "lucide-react"

export default function About() {
    const coreValues = [
        {
            icon: Heart,
            title: "Compassion",
            description: "We approach every challenge with empathy and genuine care for those we serve.",
        },
        {
            icon: Users,
            title: "Community",
            description: "We believe in the power of communities to drive sustainable change.",
        },
        {
            icon: Target,
            title: "Impact",
            description: "We measure success by the real, measurable difference we make in people's lives.",
        },
        {
            icon: Globe,
            title: "Sustainability",
            description: "We build programs designed to create lasting change, not temporary relief.",
        },
    ]

    const milestones = [
        { year: "2015", event: "Organization founded with a vision to create global change" },
        { year: "2018", event: "Launched Education for All program, reaching 1,000 students" },
        { year: "2020", event: "Expanded to 12 countries with Clean Water Initiative" },
        { year: "2023", event: "Reached 500,000+ people across 25 countries" },
        { year: "2025", event: "Opened regional office in Southeast Asia, doubled annual impact" },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">About Us</h1>
                        <p className="text-lg text-muted-foreground text-pretty">
                            Explore moments of impact, hope, and transformation from our work around the world. Each image tells a
                            story of lives changed and communities empowered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="p-8 border-l-4 border-l-primary">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To empower communities in developing regions through sustainable programs in education, healthcare,
                                clean water access, and economic development. We believe that every person deserves the opportunity to
                                reach their full potential, regardless of their economic circumstances.
                            </p>
                        </Card>
                        <Card className="p-8 border-l-4 border-l-secondary">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A world where poverty is eliminated, every child has access to quality education, communities have clean
                                water and healthcare, and people have the tools and opportunities to build prosperous, sustainable
                                lives. We envision a future where global inequality is significantly reduced.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 px-4 bg-accent/5">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {coreValues.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <Card key={index} className="p-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Hope Foundation was founded in 2015 by a group of passionate individuals who witnessed the transformative
                            power of education and access to basic services. What started as a small initiative to provide school
                            supplies to underprivileged children has grown into a global organization serving over 500,000 people
                            across 25 countries.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Our journey has been marked by continuous learning, adaptation, and a deep commitment to the communities
                            we serve. We've learned that sustainable change requires more than charity—it requires partnership,
                            respect for local knowledge, and investment in long-term solutions.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Today, we operate comprehensive programs in education, healthcare, clean water access, and sustainable
                            agriculture. Our team of dedicated professionals and thousands of volunteers work tirelessly to create
                            opportunities and improve lives. We remain committed to our founding principles while continuously
                            innovating to address emerging challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="py-16 px-4 bg-accent/5">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                        {milestone.year.slice(-2)}
                                    </div>
                                </div>
                                <div className="flex-grow pt-2">
                                    <p className="text-sm font-semibold text-primary mb-1">{milestone.year}</p>
                                    <p className="text-muted-foreground">{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Impact Statistics */}
            <section className="py-16 px-4 bg-primary/5">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Card className="p-6 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">500K+</p>
                            <p className="text-sm text-muted-foreground">People Served</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">25</p>
                            <p className="text-sm text-muted-foreground">Countries</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">$100M+</p>
                            <p className="text-sm text-muted-foreground">Invested in Programs</p>
                        </Card>
                        <Card className="p-6 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">95%</p>
                            <p className="text-sm text-muted-foreground">Program Efficiency</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4">
                <div className="container max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Mission</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Whether through donations, volunteering, or spreading awareness, you can be part of creating lasting change
                        in communities around the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link to="/donate">
                                Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
