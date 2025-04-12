import React from "react";
import DishDetails from "./DishDetails";

const CategoryContainer = ({ categoryTitle, count, collection, marginTop }) => {
  return (
    <>
      <h1 className={`font-bold ${marginTop} text-2xl`} >
        {categoryTitle} ({count})
      </h1>
      {collection.map((fooditem) => {
        return (
          <DishDetails
            key={fooditem?.id}
            imgUrl={fooditem?.card?.info?.imageId}
            isVeg={fooditem?.card?.info?.isVeg}
            title={fooditem?.card?.info?.name}
            price={
              fooditem?.card?.info?.defaultPrice
                ? fooditem?.card?.info?.defaultPrice / 100
                : fooditem?.card?.info?.price / 100
            }
            avgRating={fooditem?.card?.info?.ratings?.aggregatedRating?.rating || "Be the first one to try & review"}
            description={fooditem?.card?.info?.description}
          />
        );
      })}
    </>
  );
};

export default CategoryContainer;
