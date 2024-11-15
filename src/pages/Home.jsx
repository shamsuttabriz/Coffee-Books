import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

export default function Home() {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee to browser through specific coffees that fit in your taste"
        }
      />
      {/* Categories tab Section */}
      <Categories categories={categories} />
      {/* Dynamic Nested component */}
      <Outlet />
    </div>
  );
}
