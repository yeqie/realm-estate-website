const Search = () => (
  <div className="relative md:translate-y-1/2 mb-12 md:mb-36 lg:mb-48">
    <div className="md:absolute md:flex justify-center w-full top-0 md:-translate-y-full">
      <div className="flex justify-center items-center gap-3 bg-neutral-50 rounded-t-lg lg:rounded-t-2xl p-3">
        <button className="bg-neutral-700 hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 w-full md:w-auto rounded-lg lg:rounded-xl text-xs lg:text-sm text-neutral-50 font-medium px-4 py-1.5 md:px-8 md:py-3">Buy</button>
        <button className="focus:outline-none focus:ring-4 focus:ring-neutral-200 w-full md:w-auto rounded-lg lg:rounded-xl text-xs lg:text-sm text-neutral-800 font-medium px-4 py-1.5 md:px-8 md:py-3">Sell</button>
        <button className="focus:outline-none focus:ring-4 focus:ring-neutral-200 w-full md:w-auto rounded-lg lg:rounded-xl text-xs lg:text-sm text-neutral-800 font-medium px-4 py-1.5 md:px-8 md:py-3">Rent</button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 bg-neutral-50 w-full rounded-lg lg:rounded-2xl rounded-t-none md:rounded-t-lg lg:rounded-t-2xl text-start md:text-center p-6 pt-0 md:p-6 lg:p-12">
      <div className="flex flex-col justify-center items-start gap-1 lg:gap-3">
        <span className="text-neutral-500 text-xs lg:text-sm font-medium">Location</span>
        <span className="text-neutral-900 text-sm lg:text-base font-semibold">Toronto, Canada</span>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 lg:gap-3">
        <span className="text-neutral-500 text-xs lg:text-sm font-medium">Type</span>
        <span className="text-neutral-900 text-sm lg:text-base font-semibold">Urban & Minimalist</span>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 lg:gap-3">
        <span className="text-neutral-500 text-xs lg:text-sm font-medium">Range</span>
        <span className="text-neutral-900 text-sm lg:text-base font-semibold">$12,000 ─ $18,000</span>
      </div>
      <button className="bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500 w-full md:w-auto rounded-lg md:rounded-xl text-xs lg:text-sm text-neutral-50 font-medium px-4 py-2 md:px-8 md:py-4">Search</button>
    </div>
    <div className="md:absolute inset-x-0 mx-auto bottom-0 md:translate-y-full">
      <p className="text-xs lg:text-sm text-neutral-400 font-light py-3 md:py-6">We provides you the best feature from what you are inputing here</p>
    </div>
  </div>
)

export default Search