import { Card } from "./../components/ui/card"


const stories = [
  {
    image: "/smiling-woman-at-water-well-in-african-village.jpg",
    title: "Clean Water Changes Everything",
    location: "Kenya",
    description:
      "After receiving a new well in her village, Maria now spends her time in school instead of walking hours for water.",
  },
  {
    image: "/young-student-studying-with-books-in-bright-classr.jpg",
    title: "Education Opens Doors",
    location: "Guatemala",
    description: "With access to educational resources, Carlos became the first in his family to attend university.",
  },
  {
    image: "/woman-entrepreneur-at-small-business-market-stall.jpg",
    title: "Economic Empowerment",
    location: "India",
    description: "Through our microfinance program, Priya started her own business and now employs five others.",
  },
]

export function Stories() {
  return (
    <section id="stories" className="bg-muted/50 py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {"Stories of Hope"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Real people, real change. See how your support transforms lives"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.title} className="overflow-hidden border-border bg-card">
              <div className="relative h-64 w-full">
                <img src={story.image || "/placeholder.svg"} alt={story.title} className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-primary">{story.location}</div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{story.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
