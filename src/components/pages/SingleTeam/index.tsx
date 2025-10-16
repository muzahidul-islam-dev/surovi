"use client"

import { Link } from "react-router-dom"
// import { teamData } from "../../../data/content"
import { Button } from "../../ui/button"
import { Mail, Linkedin, ArrowLeft, CheckCircle } from "lucide-react"

export default function SingleTeam() {
//   const { id } = useParams()
  const member = true

  if (!member) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Team Member Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 pt-20">
      <div className="container">

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-square overflow-hidden rounded-lg mb-6">
                <img
                  src={`/community-cleanup-volunteers.png`}
                  alt='image'
                  className="h-full w-full object-cover"
                />
              </div>

              <h1 className="text-3xl font-bold text-foreground mb-2">Rahat Hossain</h1>
              <p className="text-lg text-primary mb-6">MD</p>

              <div className="flex gap-3 mb-6">
                <a href={`mailto:rahat1470.com@gmail.com`}>
                  <Button size="sm" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </a>
                <a href={`https://linkedin.com`} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About Rahat Hossain</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">Software Developer</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Achievement</span>
                    </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">Get in Touch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in learning more about our work or discussing potential collaborations? Feel free to reach
                  out.
                </p>
                <a href={`mailto:rahat1470.com@gmail.com`}>
                  <Button>Contact Rahat Hossain</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
