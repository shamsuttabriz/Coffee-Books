import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeCards() {
  const [coffees, setCoffees] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data);
    }
  }, [category, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}
