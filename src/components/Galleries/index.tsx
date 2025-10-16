"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "../ui/button"

export function Galleries() {
    const galleryData = [
        {
            id: "marathon-1",
            title: "Charity Marathon Runners",
            category: "Events",
            image: "/charity-marathon-runners.jpg",
            description: "Participants running to raise funds for education programs.",
            location: "Downtown Circuit",
            date: "February 2025",
        },
        {
            id: "gala-1",
            title: "Annual Fundraising Gala",
            category: "Events",
            image: "/elegant-charity-gala-dinner.jpg",
            description: "Elegant evening of dining and fundraising for our humanitarian initiatives.",
            location: "Grand Hotel",
            date: "January 2025",
        },
        {
            id: "workshop-1",
            title: "Youth Leadership Workshop",
            category: "Education",
            image: "/youth-education-workshop.jpg",
            description: "Young leaders developing skills to make a difference in their communities.",
            location: "Community Center",
            date: "March 2025",
        },
        {
            id: "water-village-1",
            title: "Village Water Distribution",
            category: "Water Projects",
            image: "/water-well-in-village.jpg",
            description: "Community members collecting clean water from a newly installed well.",
            location: "Tanzania",
            date: "February 2025",
        },
        {
            id: "children-books-1",
            title: "Children with New Books",
            category: "Education",
            image: "/happy-children-with-books.jpg",
            description: "Students excited to receive new textbooks and learning materials.",
            location: "Cambodia",
            date: "January 2025",
        },
        {
            id: "classroom-study-1",
            title: "Focused Learning Environment",
            category: "Education",
            image: "/children-studying-in-classroom.jpg",
            description: "Students engaged in learning in their newly renovated classroom.",
            location: "Vietnam",
            date: "March 2025",
        },
        {
            id: "team-sarah",
            title: "Executive Director Sarah Johnson",
            category: "Team",
            image: "/professional-woman-smiling.png",
            description: "Our Executive Director leading the organization's mission.",
            location: "Headquarters",
            date: "2024",
        },
        {
            id: "team-michael",
            title: "Director of Programs Michael Chen",
            category: "Team",
            image: "/professional-man-smiling.png",
            description: "Michael overseeing our international development programs.",
            location: "Headquarters",
            date: "2024",
        },
        {
            id: "team-emily",
            title: "Head of Fundraising Emily Rodriguez",
            category: "Team",
            image: "/professional-woman-portrait.png",
            description: "Emily building relationships with donors and partners.",
            location: "Headquarters",
            date: "2024",
        },
        {
            id: "team-david",
            title: "Operations Manager David Osei",
            category: "Team",
            image: "/professional-man-portrait.png",
            description: "David ensuring efficient delivery of aid and resources.",
            location: "Headquarters",
            date: "2024",
        },
    ]
    const [selectedCategory, setSelectedCategory] = useState<string>("All")
    const [lightboxImage, setLightboxImage] = useState<(typeof galleryData)[0] | null>(null)

    const categories = ["All", ...Array.from(new Set(galleryData.map((item) => item.category)))]

    const filteredGallery =
        selectedCategory === "All" ? galleryData : galleryData.filter((item) => item.category === selectedCategory)

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Gallery</h1>
                        <p className="text-lg text-muted-foreground text-pretty">
                            Explore moments of impact, hope, and transformation from our work around the world. Each image tells a
                            story of lives changed and communities empowered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 border-b border-border/40">
                <div className="container">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className="rounded-full"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredGallery.map((item) => (
                            <div
                                key={item.id}
                                className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
                                onClick={() => setLightboxImage(item)}
                            >
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="font-semibold text-sm mb-1 text-balance">{item.title}</h3>
                                        <p className="text-xs text-white/80">{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredGallery.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No images found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        onClick={() => setLightboxImage(null)}
                        aria-label="Close lightbox"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>

                    <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightboxImage.image || "/placeholder.svg"}
                            alt={lightboxImage.title}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />
                        <div className="mt-4 text-white text-center">
                            <h3 className="text-xl font-semibold mb-2">{lightboxImage.title}</h3>
                            <p className="text-white/80 mb-1">{lightboxImage.description}</p>
                            <p className="text-sm text-white/60">
                                {lightboxImage.location} • {lightboxImage.date}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
