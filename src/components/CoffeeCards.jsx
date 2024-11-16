import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeCards() {
  const [coffees, setCoffees] = useState([]);

  const data = useLoaderData();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/coffees")}
          className="btn-md btn bg-warning"
        >
          View All
        </button>
      </div>
    </>
  );
}
