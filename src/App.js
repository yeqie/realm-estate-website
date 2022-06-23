import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'

const App = () => {
  return (
    <div className="container mx-auto px-6 md:px-0">
      <Navbar />
      <Hero />
      <About />
      <Stats />
    </div>
  )
}

export default App