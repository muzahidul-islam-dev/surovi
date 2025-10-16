
import { useParams, Link } from "react-router-dom"
import { newsData } from "./../../../data/content"
import { Button } from "./../../ui/button"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"

export function NewsDetailPage() {
  const { id } = useParams()
  console.log(newsData, id)
  const news = newsData.find((n) => n.id === id)

  if (!news) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">News Article Not Found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-6">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            {news.category}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground mb-4">{news.title}</h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{news.author}</span>
            </div>
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img src={news.image || "/placeholder.svg"} alt={news.title} className="h-full w-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl leading-relaxed text-muted-foreground mb-6">{news.excerpt}</p>
          <div className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">{news.content}</div>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border bg-muted/50 p-6">
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to our newsletter to receive the latest news and updates about our work.
          </p>
          <Link to="/#contact">
            <Button>Subscribe Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
