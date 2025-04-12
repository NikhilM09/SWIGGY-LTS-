import React from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import RestaurantDetail from "./RestaurantDetail";
import CategoryContainer from "./CategoryContainer";

const Menu = () => {
  const params = useParams();
  const data = useRestaurantMenu(params?.id);
  console.log("menu API data", data);
  console.log("params", params);
  const { title, normalMenu, nestedMenu } = data;
  return (
    <div className="w-10/12 mx-auto max-w-[800px]">
      <RestaurantBanner title={title?.name} padding={"py-6"}/>
      <RestaurantDetail />
      {normalMenu.map((category) => {
        return (
          <CategoryContainer
            categoryTitle={category?.card?.card?.title}
            count={category?.card?.card?.itemCards.length}
            collection={category?.card?.card?.itemCards}
            marginTop={"mt-5"}
          />
        );
      })}
      {nestedMenu.map((mainCategory) => (
        <>
          <RestaurantBanner title={mainCategory?.card?.card?.title} />
          {mainCategory?.card?.card?.categories.map((subCategory) => (
            <CategoryContainer
            categoryTitle={subCategory?.title}
            count={subCategory?.itemCards.length}
            collection={subCategory?.itemCards}
            />
          ))}
        </>
      ))}
      {/* <CategoryContainer categoryTitle = {}, count, collection/> */}
    </div>
  );
};

export default Menu;
