import { Card } from "./../../../ui/card"
import { Button } from "./../../../ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { newsData } from "../../../../data/content"

export function News() {
    // Show only the 3 most recent news items
    const recentNews = newsData.slice(0, 3)

    return (
        <section id="news" className="py-20 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Latest News & Updates
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                        Stay informed about our recent achievements, ongoing initiatives, and community impact stories
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mb-12">
                {recentNews.map((news) => (
                    <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <Link to={`/news/${news.id}`}>
                            <div className="aspect-video overflow-hidden bg-muted">
                                <img
                                    src={news.image || "/placeholder.svg"}
                                    alt={news.title}
                                    className="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        </Link>
                        <div className="p-6">
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
                            <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                {news.category}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2"><Link to={`/news/${news.id}`}>{news.title}</Link></h3>
                            <p className="text-sm leading-relaxed text-muted-foreground mb-4 line-clamp-3">{news.excerpt}</p>
                            <Link to={`/news/${news.id}`}>
                                <Button variant="outline" className="w-full bg-transparent cursor-pointer">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>

                <div className="text-center">
                    <Link to="/news">
                        <Button size="lg" className="gap-2 cursor-pointer">
                            View All News <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
