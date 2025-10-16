import { Link } from 'react-router-dom'
import { Button } from "./../components/ui/button"
import { Heart } from "lucide-react"
export function Header() {
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <img src="/logo.jpg" alt="" />
          </div>
          <span className="text-xl font-bold text-red-500">SUROVI IS A FAITH</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="#impact"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Who we are
          </Link>
          <Link
            to="#stories"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            our work
          </Link>
          <Link
            to="#donate"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Project
          </Link>
          <Link
            to="#donate"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="#donate"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Publications
          </Link>
          <Link
            to="#donate"
            className="uppercase text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Career
          </Link>
          <Button asChild className="bg-red-500 text-secondary-foreground hover:bg-secondary/90">
            <Link to="#donate">Donate Now</Link>
          </Button>
        </nav>

      </div>
    </header>
  )
}
