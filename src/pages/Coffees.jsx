import { useState } from "react";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

export default function Coffees() {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortType) => {
    if (sortType === "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortType === "rating") {
      const sorted = [...data].sort((a, b) => a.rating - b.rating);
      setCoffees(sorted);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center py-4">
        <div className="text-2xl md:text-3xl font-thin mb-4 md:mb-0">
          Sort Coffee's By Popularity & Rating
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => handleSort("popularity")}
            className="flex gap-1 items-center bg-warning hover:bg-yellow-500 px-4 py-2 rounded-lg font-medium cursor-pointer duration-200"
          >
            <span>Sort By Popularity</span>
            <span>
              <FaSortAmountDown />
            </span>
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="flex gap-1 items-center bg-warning hover:bg-yellow-500 px-4 py-2 rounded-lg font-medium cursor-pointer duration-200"
          >
            <span>Sort By Rating</span>
            <span>
              <FaSortAmountDownAlt />
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
