import React from "react";
import { DISH_URL } from "../constants/config";
import { useState } from "react";
const DishDetails = ({
  imgUrl,
  isVeg,
  title,
  price,
  avgRating,
  description,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="flex justify-between py-6 border-b border-gray-400">
      <div className="w-10/12">
        <div>{isVeg ? "🟢" : "🔴"}</div>
        <h1>{title}</h1>
        <h1>₹ {price}</h1>
        <p>⭐ {avgRating}</p>
        <div>
          <span>{!showFullDescription ? description.split(" ").slice(0, 25).join(" ") : description}&nbsp;&nbsp;&nbsp;</span>
          {description.length > 50 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "...less" : "...more"}
            </button>
          )}
        </div>
      </div>
      <div>
        <img className="w-36 h-36 object-cover rounded-2xl" src={DISH_URL + imgUrl} />
      </div>
    </div>
  );
};

export default DishDetails;
