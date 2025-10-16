"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "../../ui/button"
import { Calendar, Clock, MapPin, Users, Mail } from "lucide-react"
import { useEffect, useState } from "react"

interface Event {
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  contact: string;
  organizer: string;
}

export function EventDetailPage() {
  const { id } = useParams()

  const [event, setEvent] = useState<Event | null>(null);
  useEffect(() => {
    fetch('/events.json').then(res => res.json()).then(response => {
        const data = response?.filter((item:any) => item.title == id);
        setEvent(data && data.length > 0 ? data[0] : null)
    })
  },[])


  if (!event) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="h-full w-full object-cover" />
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">{event.title}</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">{event.description}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold text-lg mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Attendees</p>
                      <p className="text-sm text-muted-foreground">{event.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">{event.contact}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Register for Event
              </Button>

              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">Organized by</h3>
                <p className="text-sm text-muted-foreground">{event.organizer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
