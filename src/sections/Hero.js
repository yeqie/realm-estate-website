import Search from '../components/Search'

const Hero = () => (
  <section className="container rounded-2xl mx-auto px-6">
    <div className="bg-hero bg-cover rounded-lg lg:rounded-2xl">
      <div className="backdrop-brightness-75 rounded-lg lg:rounded-2xl text-center px-6 pt-6 lg:px-12 lg:pt-12">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight md:leading-snug lg:leading-normal">A Great Way ─ To <br className="hidden md:block" /> Buy And Sell Your Property</h1>
        <p className="text-xs md:text-base my-3 md:my-6 lg:my-12">Realm is a Great Way for you to buy, sell, or even rent your <br className="hidden md:block" /> properties without any commisions involved</p>
        <Search />
      </div>
    </div>
  </section>
)

export default Hero