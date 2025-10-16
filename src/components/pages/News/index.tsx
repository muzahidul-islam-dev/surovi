import { Link } from "react-router-dom"
import { newsData } from "../../../data/content"
import { Card } from "../..//ui/card"
import { Button } from "../..//ui/button"
import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react"

export default function News() {
  return (
    <div className="min-h-screen bg-background py-14">
      <div className="container">

        <div className="text-center mb-12">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">All News</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Read all our latest news, impact stories, and updates from the field
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary mb-3">
                  {news.category}
                </span>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{news.author}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{news.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4 line-clamp-3">{news.excerpt}</p>
                <Link to={`/news/${news.id}`}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
