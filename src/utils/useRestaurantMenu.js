import { useState, useEffect } from "react";
import { generateMenuURL } from "../constants/config";

const useRestaurantMenu = (id) => {
  const MENU_API_URL = generateMenuURL(id);
  const [resInfo, setResInfo]=useState([])
  const [menu, setMenu] = useState([]);
  const [filteredNormalData, setFilteredNormalData] = useState([])
  const [filteredNestedData, setFilteredNestedData] = useState([])

  const getMenuData = async () => {
    try {
      const data = await fetch(MENU_API_URL);
      const json = await data.json();
      console.log("data", json?.data?.cards);
      console.log("title", json?.data?.cards[2]?.card?.card?.info?.name);
      console.log("res info", json?.data?.cards[2]?.card?.card?.info);
      setResInfo(json?.data?.cards[2]?.card?.card?.info)
      const resData =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      console.log("raw data", resData);

setFilteredNormalData(resData.filter(resItem => resItem?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
      setFilteredNestedData(resData.filter(resItem => resItem?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))
      console.log("filtered normal menu", filteredNormalData)
      console.log('filtered nested menu', filteredNestedData)
      setMenu(json?.data?.cards);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getMenuData();
  }, []);

  const menuObject = {
    title : resInfo,
    normalMenu : filteredNormalData,
    nestedMenu : filteredNestedData
  }
  return menuObject;
};

export default useRestaurantMenu;
