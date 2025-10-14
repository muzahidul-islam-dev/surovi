"use client"

import { Button } from "./../components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react"

const slides = [
  {
    title: "Together, we can change lives",
    description:
      "Every donation brings hope, education, and opportunity to communities in need. Join us in making a lasting difference.",
    image: "/children-studying-in-classroom.jpg",
    cta: "Start Giving Today",
  },
  {
    title: "Clean water for every community",
    description:
      "Help us bring safe, clean drinking water to families who need it most. Your support saves lives and builds healthier futures.",
    image: "/water-well-in-village.jpg",
    cta: "Donate for Water",
  },
  {
    title: "Education opens doors",
    description:
      "Empower children with the gift of education. Your contribution provides books, supplies, and opportunities for a brighter tomorrow.",
    image: "/happy-children-with-books.jpg",
    cta: "Support Education",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="relative h-[600px] md:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            </div>

            <div className="container relative h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {slide.description}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base"
                  >
                    <Link to="#donate">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base bg-background/50 backdrop-blur-sm">
                    <Link to="#mission">Learn Our Story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-red-500 text-white p-2 backdrop-blur-sm transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-red-500 text-white p-2 backdrop-blur-sm transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
