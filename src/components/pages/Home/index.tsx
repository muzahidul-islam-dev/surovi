import { Contact } from '../../contact'
import { DonateSection } from '../../donate-section'
import { Events } from '../../events'
import { Hero } from '../../hero'
import { Impact } from '../../impact'
import { Mission } from '../../mission'
import { NewsTicker } from '../../news-ticker'
import { Notice } from '../../notice'
import { Projects } from '../../projects'
import { Stories } from '../../stories'
import { Team } from '../../team'
import { WaysToHelp } from '../../ways-to-help'
import { News } from './components/news'

function Home() {
  return (
    <>
            <Hero />
            <NewsTicker />
            <Team />
            <Impact />
            <Notice />
            <Mission />
            <Events />
            <Projects />
            <News />
            <WaysToHelp />
            <Stories />
            <Contact />
            <DonateSection />
    </>
  )
}

export default Home
