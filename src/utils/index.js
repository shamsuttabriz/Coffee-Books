import { toast } from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
    const allData = localStorage.getItem('favorite');

    if (allData) {
        const allFavorites = JSON.parse(allData);
        console.log(allFavorites);
        return allFavorites;
    }
    else {
        console.log([]);
        return [];
    }
}

// Add a coffee to local storage
const addFavorite = coffee => {
    // get all previously saved coffee data
    const favorites = getAllFavorites();

    const isExits = favorites.find(favorite => favorite.id === coffee.id);
    if (isExits) {
        toast.error('Item Already Added');
    }
    else {
        toast.success('Item Successfully Added');
        favorites.push(coffee);
        localStorage.setItem('favorite', JSON.stringify(favorites));
    }
}

// Remove a coffee form local storage
const removeCoffee = (id) => {
    const allCoffees = getAllFavorites();
    const remaining = allCoffees.filter(coffee => coffee.id !== id);
    const favorites = getAllFavorites();
    localStorage.setItem('favorite', JSON.stringify(remaining));
}


export { addFavorite, getAllFavorites, removeCoffee };

