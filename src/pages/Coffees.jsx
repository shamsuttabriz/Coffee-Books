import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

export default function Coffees() {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortType) => {
    if (sortType === "popularity") {
      console.log(sortType);
    } else if (sortType === "rating") {
      console.log(sortType);
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
            className="flex gap-1 items-center bg-warning px-4 py-2 rounded-lg font-medium cursor-pointer"
          >
            <span>Sort By Popularity</span>
            <span>
              <FaSortAmountDown />
            </span>
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="flex gap-1 items-center bg-warning px-4 py-2 rounded-lg font-medium cursor-pointer"
          >
            <span>Sort By Rating</span>
            <span>
              <FaSortAmountDown />
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {data.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
