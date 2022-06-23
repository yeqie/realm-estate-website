import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Properties from './sections/Properties'

const App = () => {
  return (
    <div className="container mx-auto px-6 md:px-0">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Properties />
    </div>
  )
}

export default App