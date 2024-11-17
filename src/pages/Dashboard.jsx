import { useEffect, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import Heading from "../components/Heading";
import { getAllFavorites, removeCoffee } from "../utils";

export default function Dashboard() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const allLsCoffees = getAllFavorites();
    setCoffees(allLsCoffees);
  }, []);

  const handleRemoveCoffee = (id) => {
    removeCoffee(id);
    const favorites = getAllFavorites();
    setCoffees(favorites);
  };

  console.log(coffees);
  return (
    <div>
      <div>
        <Heading
          title="Welcome to Dashboard"
          subtitle="Manage coffees that you have previously added as favorite. You can view or remove from here"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            handleRemoveCoffee={handleRemoveCoffee}
          />
        ))}
      </div>
    </div>
  );
}
