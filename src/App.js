import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Properties from './sections/Properties'
import Feedback from './sections/Feedback'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Properties />
      <Feedback />
    </div>
  )
}

export default App