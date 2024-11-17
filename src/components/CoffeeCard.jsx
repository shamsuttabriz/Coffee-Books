import { IoTrash } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function CoffeeCard({ coffee, handleRemoveCoffee }) {
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

  const { pathname } = useLocation();

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
      {pathname === "/dashboard" && (
        <div className="absolute bg-warning rounded-full -top-5 -right-5">
          <button
            onClick={() => handleRemoveCoffee(id)}
            className="text-xl p-4"
          >
            <IoTrash />
          </button>
        </div>
      )}
    </div>
  );
}
