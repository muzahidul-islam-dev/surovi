import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent } from "./../components/ui/card"

export function Events() {
  const events = [
    {
      title: "Community Clean-Up Drive",
      date: "June 15, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Central Park, Downtown",
      attendees: 45,
      image: "/community-cleanup-volunteers.png",
      description: "Join us for a day of community service as we clean up our local parks and green spaces.",
    },
    {
      title: "Charity Marathon 2025",
      date: "July 4, 2025",
      time: "6:00 AM - 12:00 PM",
      location: "City Stadium",
      attendees: 200,
      image: "/charity-marathon-runners.jpg",
      description: "Run for a cause! All proceeds go directly to our education programs.",
    },
    {
      title: "Annual Fundraising Gala",
      date: "August 20, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Hotel Ballroom",
      attendees: 150,
      image: "/elegant-charity-gala-dinner.jpg",
      description: "An evening of fine dining, entertainment, and fundraising for our global initiatives.",
    },
    {
      title: "Youth Education Workshop",
      date: "September 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center",
      attendees: 60,
      image: "/youth-education-workshop.jpg",
      description: "Interactive workshops teaching valuable skills to underprivileged youth.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events and be part of the change
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                {/* <Button className="w-full bg-primary hover:bg-primary/90">Register Now</Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
