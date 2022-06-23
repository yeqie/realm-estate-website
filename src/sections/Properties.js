const properties = [{
  title: 'Lunik Laurent',
  address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
  image: 'https://source.unsplash.com/pPxhM0CRzl4',
  author: {
    title: 'Shapeline Agency',
    image: 'https://source.unsplash.com/akj4oRw8E04'
  }
}, {
  title: 'Orange Pulse',
  address: '4517 Washington Ave. Manchester, Kentucky 39495',
  image: 'https://source.unsplash.com/sBdwF4-rLmU',
  author: {
    title: 'Marco Rodrigo',
    image: 'https://source.unsplash.com/tidSLv-UaNs'
  }
}, {
  title: 'Reppeat Appartment',
  address: '4140 Parker Rd. Allentown, New Mexico 31134',
  image: 'https://source.unsplash.com/alWN2IQIqYc',
  author: {
    title: 'Benjamin Dos Santos',
    image: 'https://source.unsplash.com/ViyA5myhBVw'
  }
}, {
  title: 'Tube Container',
  address: '3891 Ranchview Dr. Richardson, California 62639',
  image: 'https://source.unsplash.com/KsL8WZJ0CLA',
  author: {
    title: 'Monica Bell',
    image: 'https://source.unsplash.com/CpFmlPdNIDw'
  }
}, {
  title: 'Nuc`Meal Home',
  address: '4140 Parker Rd. Allentown, New Mexico 31134',
  image: 'https://source.unsplash.com/f6eWKcd8_dA',
  author: {
    title: 'Sam Paullain',
    image: 'https://source.unsplash.com/iEEBWgY_6lA'
  }
}, {
  title: 'Urbannish Palle',
  address: '3517 W. Gray St. Utica, Pennsylvania 57867',
  image: 'https://source.unsplash.com/Z-hiM9VFak0',
  author: {
    title: 'Marian Clloel',
    image: 'https://source.unsplash.com/B3VWevRn1oU'
  }
}, {
  title: 'Ol`Classic House',
  address: '6391 Elgin St. Celina, Delaware 10299',
  image: 'https://source.unsplash.com/xmQBaCtgUP4',
  author: {
    title: 'Victor Graccia',
    image: 'https://source.unsplash.com/W0i1N6FdCWA'
  }
}, {
  title: 'Pacte De Huse',
  address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
  image: 'https://source.unsplash.com/u01ya3giO0Q',
  author: {
    title: 'Deconovo',
    image: 'https://source.unsplash.com/aLLHmLMdHrM'
  }
}, ]

const Properties = () => {
  return (
    <section className="border-b border-neutral-800 py-12 md:py-24">
      <h2 className="text-xl md:text-4xl text-neutral-50 font-medium leading-tight md:leading-snug">Great Property <br /> To ─ Took A Look</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-3 md:gap-6 -mx-2 mt-3 md:mt-6 p-2 overflow-x-auto md:overflow-x-hidden">
          <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500 rounded-lg md:rounded-xl text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">All Category</button>
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg md:rounded-xl text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">House</button>
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg md:rounded-xl text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">Mansion</button>
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg md:rounded-xl text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 text-xs md:text-sm font-medium px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">Appartment</button>
        </div>
        <div className="relative mt-3 md:mt-0">
          <input className="block w-full bg-transparent border border-neutral-800 rounded-lg text-neutral-50 placeholder:text-neutral-500 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-neutral-500 pr-10 px-6 py-2.5" type="text" placeholder="Search for any locations..." />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6" style={{ fill: 'none', stroke: '#737373', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path></svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-y-12 mt-6 md:mt-8">
        { properties.map((property, i) => (
          <div key={ i } className="flex flex-col gap-2 md:gap-3">
            <img className="w-full h-72 md:h-96 object-cover rounded-2xl" src={ property.image } alt={ property.title } />
            <h4 className="text-lg md:text-2xl font-medium">{ property.title }</h4>
            <p className="text-xs md:text-sm text-neutral-500">{ property.address }</p>
            <hr className="border-neutral-800" />
            <div className="flex justify-between items-center gap-2 md:gap-3">
              <img className="w-6 md:w-8 h-6 md:h-8 object-cover rounded-lg" src={ property.author.image } alt={ property.author.title } />
              <h6 className="flex-1 text-xs md:text-sm text-neutral-500 font-medium">{ property.author.title }</h6>
              <button className="hover:bg-emerald-500 focus:bg-emerald-500 border border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-400 rounded-lg text-xs md:text-sm text-emerald-500 hover:text-neutral-50 focus:text-neutral-50 font-medium px-3 py-1.5">Contact</button>
            </div>
          </div>
        )) }
      </div>
      <div className="text-center mt-12">
        <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500 rounded-lg md:rounded-xl text-neutral-50 text-xs md:text-sm font-medium mx-auto px-4 py-2 md:px-6 md:py-2.5 whitespace-nowrap">Browse All</button>
      </div>
    </section>
  )
}

export default Properties