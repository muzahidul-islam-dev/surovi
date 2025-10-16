import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'

function FrontEndLayout() {
    return (
        <div>
            <main className="min-h-screen">
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default FrontEndLayout
