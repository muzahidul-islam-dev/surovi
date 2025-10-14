import { Bell, AlertCircle, Calendar, Megaphone } from "lucide-react"
import { Card, CardContent } from "./../components/ui/card"

export function Notice() {
  const notices = [
    {
      icon: AlertCircle,
      title: "Emergency Relief Fund",
      description:
        "Urgent support needed for flood victims in Southeast Asia. Your donation can provide immediate relief.",
      date: "Posted 2 days ago",
      priority: "high",
    },
    {
      icon: Calendar,
      title: "Annual Fundraising Gala",
      description: "Join us for our biggest fundraising event of the year. Save the date: August 20th, 2025.",
      date: "Posted 1 week ago",
      priority: "medium",
    },
    {
      icon: Megaphone,
      title: "Volunteer Orientation",
      description:
        "New volunteer orientation sessions every Saturday. Learn how you can make a difference in your community.",
      date: "Posted 2 weeks ago",
      priority: "medium",
    },
    {
      icon: Bell,
      title: "Monthly Newsletter",
      description: "Subscribe to our newsletter for updates on our projects, success stories, and upcoming events.",
      date: "Posted 3 weeks ago",
      priority: "low",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Important Notices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest announcements and important information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {notices.map((notice, index) => {
            const Icon = notice.icon
            return (
              <Card
                key={index}
                className={`border-l-4 ${
                  notice.priority === "high"
                    ? "border-l-accent"
                    : notice.priority === "medium"
                      ? "border-l-primary"
                      : "border-l-muted"
                } hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${notice.priority === "high" ? "bg-accent/10" : "bg-primary/10"}`}>
                      <Icon className={`w-6 h-6 ${notice.priority === "high" ? "text-accent" : "text-primary"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{notice.title}</h3>
                      <p className="text-muted-foreground mb-3">{notice.description}</p>
                      <p className="text-sm text-muted-foreground/70">{notice.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
