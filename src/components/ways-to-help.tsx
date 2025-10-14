import { Card } from "./../components/ui/card"
import { Button } from "./../components/ui/button"
import { DollarSign, Calendar, Users, Briefcase } from "lucide-react"
import {Link} from 'react-router-dom'

const ways = [
  {
    icon: DollarSign,
    title: "One-Time Donation",
    description: "Make an immediate impact with a single contribution to support our ongoing projects.",
    cta: "Donate Now",
  },
  {
    icon: Calendar,
    title: "Monthly Giving",
    description: "Become a sustaining partner with recurring donations that provide reliable support.",
    cta: "Start Monthly",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Share your time and skills to directly help communities and support our mission.",
    cta: "Get Involved",
  },
  {
    icon: Briefcase,
    title: "Corporate Partnership",
    description: "Partner with us to create meaningful CSR programs and employee engagement.",
    cta: "Learn More",
  },
]

export function WaysToHelp() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {"Ways to Make a Difference"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Choose how you want to contribute and join our community of changemakers"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ways.map((way) => {
            const Icon = way.icon
            return (
              <Card key={way.title} className="flex flex-col border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{way.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{way.description}</p>
                <Button asChild variant="outline" className="mt-6 w-full bg-transparent">
                  <Link to="#donate">{way.cta}</Link>
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
