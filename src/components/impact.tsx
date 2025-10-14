import { Card } from "./../components/ui/card"
import { Users, Heart, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "250,000+",
    label: "Lives Impacted",
    description: "People reached through our programs",
  },
  {
    icon: Heart,
    value: "1,500+",
    label: "Active Projects",
    description: "Ongoing initiatives worldwide",
  },
  {
    icon: Globe,
    value: "45",
    label: "Countries",
    description: "Global presence and partnerships",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {"Our Impact in Numbers"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"See how your donations are creating real, measurable change around the world"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="relative overflow-hidden border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-lg font-semibold text-foreground">{stat.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
