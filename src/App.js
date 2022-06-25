import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Properties from './sections/Properties'
import Feedback from './sections/Feedback'
import Jumbotron from './sections/Jumbotron'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Properties />
      <Feedback />
      <Jumbotron />
    </div>
  )
}

export default App