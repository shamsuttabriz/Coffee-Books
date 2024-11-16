import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

export default function Coffees() {
  const coffees = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
}
