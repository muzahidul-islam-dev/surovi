import { Header } from "./../components/header"
import { Hero } from "./../components/hero"
import { NewsTicker } from "./../components/news-ticker"
import { Impact } from "./../components/impact"
import { Notice } from "./../components/notice"
import { Mission } from "./../components/mission"
import { Events } from "./../components/events"
import { Projects } from "./../components/projects"
import { WaysToHelp } from "./../components/ways-to-help"
import { Stories } from "./../components/stories"
import { Team } from "./../components/team"
import { Contact } from "./../components/contact"
import { DonateSection } from "./../components/donate-section"
import { Footer } from "./../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NewsTicker />
      <Impact />
      <Notice />
      <Mission />
      <Events />
      <Projects />
      <WaysToHelp />
      <Stories />
      <Team />
      <Contact />
      <DonateSection />
      <Footer />
    </main>
  )
}
