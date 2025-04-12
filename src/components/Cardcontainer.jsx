import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../constants/config";
import ShimmerCard from "./ShimmerCard";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

const Cardcontainer = () => {
  const [searchText, setSearchText] = useState("");
  const restaurantData = useRestaurant();
  const {errorMessage, restaurantList, masterList, updateRestaurants} = restaurantData
  console.log("restaurantList from custom hook", restaurantData)

console.log("page rendered");

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

return (
    <>
      <div className="w-11/12 mx-auto py-4">
        
        <SearchBar masterCollection={masterList} 
        updater={updateRestaurants}
        text={searchText}
        updateText={setSearchText}/>
        <div className="flex gap-4  py-4 flex-wrap ">
          {restaurantList.length === 0 ? (
            masterList.length === 0 ? (
              <ShimmerCard />
            ) : (
              <h1>
                There are no restaurants matching{" "}
                <span className="text-red-400">"{searchText}"</span>
              </h1>
            )
          ) : (
            restaurantList.map((restaurant) => {
              return <RestaurantCard  {...restaurant?.info} key={restaurant?.info?.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Cardcontainer;