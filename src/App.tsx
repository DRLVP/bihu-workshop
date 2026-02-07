import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkshopDetails from './components/WorkshopDetails'
import Registration from './components/Registration'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkshopDetails />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default App
