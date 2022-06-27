const Comment = ({ title, content, image }) => (
  <div className="flex gap-3 lg:gap-4 w-full sm:w-1/2 lg:w-1/5 shrink-0 bg-neutral-800 rounded-lg lg:rounded-xl p-4">
    <img className="w-8 lg:w-12 h-8 lg:h-12 rounded-md lg:rounded-xl" src={ image } alt={ title } />
    <div>
      <h5 className="text-sm lg:text-lg font-medium mb-1 line-clamp-1">{ title }</h5>
      <p className="text-xs lg:text-sm text-neutral-500 font-base line-clamp-2">{ content }</p>
    </div>
  </div>
)

export default Comment