const Stats = () => (
  <section className="flex justify-between md:justify-center items-start md:items-center gap-6 md:gap-24 border-b border-neutral-800 py-12 md:py-24">
    <div className="flex flex-col gap-2">
      <span className="text-2xl md:text-6xl font-medium">8.93%</span>
      <span className="text-xs md:text-base text-neutral-500">Profit Return Rate</span>
    </div>
    <span className="hidden md:block w-px h-6 bg-neutral-500"></span>
    <div className="flex flex-col gap-2">
      <span className="text-2xl md:text-6xl font-medium">12K+</span>
      <span className="text-xs md:text-base text-neutral-500">Property In Sale & Rent</span>
    </div>
    <span className="hidden md:block w-px h-6 bg-neutral-500"></span>
    <div className="flex flex-col gap-2">
      <span className="text-2xl md:text-6xl font-medium">20K+</span>
      <span className="text-xs md:text-base text-neutral-500">Customers</span>
    </div>
  </section>
)

export default Stats