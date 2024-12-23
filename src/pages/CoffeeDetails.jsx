import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutrition from "../assets/nutrition.png";
import { addFavorite, getAllFavorites } from "../utils";

export default function CoffeeDetails() {
  const [coffee, setCoffee] = useState({});
  const [btnDisable, setBtnDisable] = useState(false);

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const actualData = data.find((coffee) => coffee.id === parseInt(id));
    setCoffee(actualData);
    // Button disable or not disable checking
    const favorites = getAllFavorites();
    const isExits = favorites.find((favorite) => favorite.id === actualData.id);
    if (isExits) {
      setBtnDisable(true);
    }
  }, [data, id]);

  const handleFavorite = (coffee) => {
    addFavorite(coffee);
    setBtnDisable(true);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-3xl font-light my-5 leading-tight">
          {coffee.description}
        </h1>
        <div className="h-[400px] md:h-[450px] rounded-xl border-2 p-3">
          <img
            className="w-full h-full rounded-lg object-cover object-right"
            src={coffee.image}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-6">
          <div>
            <h2 className="text-2xl font-thin mb-2">{coffee.name}</h2>
            <p className="font-medium tracking-wider text-base text-gray-700">
              Popularity: {coffee.popularity}
            </p>
            <p className="font-medium tracking-wider text-base text-gray-700">
              Rating: {coffee.rating}
            </p>
          </div>
          <div>
            <button
              disabled={btnDisable}
              onClick={() => handleFavorite(coffee)}
              className="btn btn-warning"
            >
              Add Favorite
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between my-8">
          <div className="flex-1">
            <div className="my-10">
              <h1 className="text-2xl font-thin mb-2">Making Process</h1>
              <p className="font-medium tracking-wider text-base text-gray-700">
                {coffee.making_process}
              </p>
            </div>
            <div className="my-10">
              <h1 className="text-2xl font-thin mb-2">Ingredients</h1>
              {coffee?.ingredients?.map((ingredient) => (
                <p
                  className="font-medium tracking-wider text-base text-gray-700"
                  key={ingredient}
                >
                  {ingredient}
                </p>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-thin mb-2">Nutrition Info</h1>
              <ul className="list-disc pl-5">
                <li className="font-medium tracking-wider text-base text-gray-700">
                  Calories: {coffee?.nutrition_info?.calories}
                </li>
                <li className="font-medium tracking-wider text-base text-gray-700">
                  Fat: {coffee?.nutrition_info?.fat}
                </li>
                <li className="font-medium tracking-wider text-base text-gray-700">
                  Carbohydrates: {coffee?.nutrition_info?.carbohydrates}
                </li>
                <li className="font-medium tracking-wider text-base text-gray-700">
                  Protein: {coffee?.nutrition_info?.protein}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <img src={nutrition} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
