import { Link } from "react-router-dom";

export default function CoffeeCard({ coffee }) {
  const {
    category,
    description,
    id,
    image,
    name,
    origin,
    popularity,
    rating,
    type,
  } = coffee || {};

  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition duration-500 hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl font-medium">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
        </div>
      </Link>
    </div>
  );
}
