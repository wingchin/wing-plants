export default function Card({ id, title, description, price, grid }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full" src={`/uploads/${id}.png`} alt={title} />
      <div className="px-6 py-5">
        <h1 className={`${grid ? 'text-base' : 'text-5xl'} text-gray-800 font-bold mb-2`}>{title}</h1>
        <p>&euro; {price}</p>
        <p className={`${grid ? 'text-sm' : 'text-base'} text-gray-700 font-light`}>{description}</p>
      </div>
    </div>
  )
}
