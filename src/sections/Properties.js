import Card from '../components/Card'
import properties from '../data/properties'

const Properties = () => {
  return (
    <section className="container border-b border-neutral-800 mx-auto px-6 lg:px-0 py-12 md:py-24">
      <h2 className="text-xl md:text-4xl text-neutral-50 font-medium leading-tight md:leading-snug">Great Property <br /> To ─ Took A Look</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex items-center gap-3 md:gap-6 -mx-2 mt-3 md:mt-6 p-2 overflow-x-auto lg:overflow-x-hidden">
          <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500 rounded-lg md:rounded-xl text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">All Category</button>
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg md:rounded-xl text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">House</button>
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg md:rounded-xl text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">Mansion</button>
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg md:rounded-xl text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">Appartment</button>
        </div>
        <div className="relative mt-3 lg:mt-0">
          <input className="block w-full bg-transparent border border-neutral-800 rounded-lg text-neutral-50 placeholder:text-neutral-500 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-neutral-500 pr-10 px-6 py-2.5" type="text" placeholder="Search for any locations..." />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6" style={{ fill: 'none', stroke: '#737373', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path></svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-y-12 mt-6 md:mt-8">
        { properties.map((property, i) => (
          <Card key={ i } title={ property.title } address={ property.address } image={ property.image } authorTitle={ property.author.title } authorImage={ property.author.image }  />
        )) }
      </div>
      <div className="text-center mt-12">
        <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500 rounded-lg md:rounded-xl text-neutral-50 text-xs md:text-sm font-medium mx-auto px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">Browse All</button>
      </div>
    </section>
  )
}

export default Properties