const Jumbotron = () => (
  <section className="container border-b border-neutral-800 mx-auto px-6 lg:px-0 py-12 lg:py-24">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-br from-emerald-500 to-emerald-600 w-full px-6 md:px-12 lg:px-24 py-6 md:py-8 lg:py-12 rounded-lg lg:rounded-2xl">
      <div className="flex flex-col justify-between items-start gap-3 md:gap-4 w-full md:w-1/3">
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium">Are You Ready <br /> To ─ Do Business With Us</h3>
        <p className="text-sm lg:text-base text-neutral-200">We are the best platform for you to sell, buy, and rent a property with the greatest and easiest way to operate</p>
        <a className="inline-block w-full md:w-auto shrink-0 bg-neutral-50 hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-400 rounded-lg text-neutral-900 text-xs lg:text-sm text-center font-semibold px-5 py-2.5" href="/">Get Started</a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full md:w-1/2">
        <div className="flex flex-col justify-between items-start gap-3 md:gap-4">
          <h5 className="text-md lg:text-lg font-medium">Keep All In Track</h5>
          <p className="text-sm lg:text-base text-neutral-200">We also have a system that will track your engagements of your properties.</p>
          <a className="flex items-center gap-2 text-xs lg:text-sm font-medium"  href="/">
            <span>Listing Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M3,12H21m-3,3,3-3L18,9" style={{ fill: 'none', stroke: '#fafafa', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path></svg>
          </a>
        </div>
        <div className="flex flex-col justify-between items-start gap-3 md:gap-4">
          <h5 className="text-md lg:text-lg font-medium">Start The Integration</h5>
          <p className="text-sm lg:text-base text-neutral-200">Learn about our platform, from how to listing the properties and etc.</p>
          <a className="flex items-center gap-2 text-xs lg:text-sm font-medium"  href="/">
            <span>Integration Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M3,12H21m-3,3,3-3L18,9" style={{ fill: 'none', stroke: '#fafafa', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Jumbotron