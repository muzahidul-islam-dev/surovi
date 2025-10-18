import { Link } from "react-router-dom"


const teamMembers = [
  {
    name: "Syeda Iqbal Mand Banu",
    role: "Founder Chairperson",
    image: "/founder.jpg",
    bio: "পিতা মরহুম সৈয়াদ নুরুল আবসার ছিলেন একজন বিশিষ্ট ব্যবসায়ী। সৈয়দা ইকবাল মান্দ বানু শৈশবকাল থেকেই নিপীড়িত, অসহায় মানুষের সেবা করে যাচ্ছেন। বাংলাদেশের আনাচে কানাচে ৬৮ হাজার গ্রামের গ্রামান্তরে, শহরের বহু হাসপাতালে, পথে প্রান্তরে ছড়িয়ে আছে তার সাহায্যের ছোয়া।"
  },
  {
    name: "Md. Abu Taher",
    role: "Director of Programs",
    image: "/director.jpg",
    bio: "Md. Abu Taher has been working with SUROVI since 1981. He has a total of 43 years’ professional experience of which 43 years in senior management positions in development sector including organizational development, project planning and management",
  }
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
