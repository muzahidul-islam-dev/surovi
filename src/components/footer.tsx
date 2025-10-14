import {Link} from 'react-router-dom'
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">SUROVI IS A FAITH</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"Building a better tomorrow through compassion, action, and sustainable change."}
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">About</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="#mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Financials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Get Involved</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="#donate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Fundraise
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Corporate Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-muted-foreground">
                123 Hope Street
                <br />
                New York, NY 10001
              </li>
              <li>
                <a
                  href="mailto:info@hopefoundation.org"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@hopefoundation.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SUROVI IS A FAITH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
