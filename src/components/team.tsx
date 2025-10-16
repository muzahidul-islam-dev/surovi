import { Link } from "react-router-dom"


const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    image: "/professional-woman-smiling.png",
    bio: "With 15 years of nonprofit experience, Sarah leads our mission to create lasting change in communities worldwide.",
  },
  {
    name: "Michael Chen",
    role: "Director of Programs",
    image: "/professional-man-smiling.png",
    bio: "Michael oversees our global initiatives, ensuring every project delivers measurable impact and sustainable results.",
  },
  {
    name: "Emily Rodriguez",
    role: "Community Outreach Manager",
    image: "/professional-woman-portrait.png",
    bio: "Emily builds bridges between donors and communities, sharing stories that inspire action and foster connection.",
  },
  {
    name: "David Okonkwo",
    role: "Finance Director",
    image: "/professional-man-portrait.png",
    bio: "David ensures transparency and accountability, managing resources to maximize impact for every dollar donated.",
  },
]

export function Team() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Dedicated professionals working together to create positive change in communities around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Link to={`/team/${member.name}`}>
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-lg bg-card transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
