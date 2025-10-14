import {Link} from 'react-router-dom'
import { Button } from "./../components/ui/button"
import { Heart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">SUROVI IS A FAITH</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#mission"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Our Mission
          </Link>
          <Link
            to="#impact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Impact
          </Link>
          <Link
            to="#stories"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Stories
          </Link>
          <Link
            to="#donate"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Get Involved
          </Link>
        </nav>

        <Button asChild className="bg-red-500 text-secondary-foreground hover:bg-secondary/90">
          <Link to="#donate">Donate Now</Link>
        </Button>
      </div>
    </header>
  )
}
