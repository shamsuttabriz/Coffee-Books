import Banner from "../components/Banner";
import Heading from "../components/Heading";

export default function Home() {
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
      {/* Dynamic Nested component */}
    </div>
  );
}
