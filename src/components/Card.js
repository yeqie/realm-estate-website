const Card = ({ title, address, image, authorTitle, authorImage }) => (
  <div className="flex flex-col gap-2 md:gap-3">
    <img className="w-full h-72 lg:h-96 object-cover rounded-2xl" src={ image } alt={ title } />
    <h4 className="text-lg md:text-2xl font-medium">{ title }</h4>
    <p className="text-xs md:text-sm text-neutral-500">{ address }</p>
    <hr className="border-neutral-800" />
    <div className="flex justify-between items-center gap-2 md:gap-3">
      <img className="w-6 md:w-8 h-6 md:h-8 object-cover rounded-lg" src={ authorImage } alt={ authorTitle } />
      <h6 className="flex-1 text-xs md:text-sm text-neutral-500 font-medium">{ authorTitle }</h6>
      <button className="hover:bg-emerald-500 focus:bg-emerald-500 border border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-400 rounded-lg text-xs md:text-sm text-emerald-500 hover:text-neutral-50 focus:text-neutral-50 font-medium px-3 py-1.5">Contact</button>
    </div>
  </div>
)

export default Card