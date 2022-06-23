import Search from '../components/Search'

const Hero = () => (
  <section className="bg-hero bg-cover rounded-2xl">
    <div className="backdrop-brightness-75 rounded-2xl text-center px-6 pt-6 md:px-12 md:pt-12">
      <h1 className="text-2xl md:text-6xl font-semibold leading-tight md:leading-normal">A Great Way ─ To <br className="hidden md:block" /> Buy And Sell Your Property</h1>
      <p className="text-xs md:text-base my-3 md:my-12">Realm is a Great Way for you to buy, sell, or even rent your <br className="hidden md:block" /> properties without any commisions involved</p>
      <Search />
    </div>
  </section>
)

export default Hero