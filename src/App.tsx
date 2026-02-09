import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Curriculum from './components/Curriculum'
import Gallery from './components/Gallery'
import Rules from './components/Rules'
import Registration from './components/Registration'
import Footer from './components/Footer'
import './index.css'

// remove workshop details

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Gallery />
        <Rules />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default App
