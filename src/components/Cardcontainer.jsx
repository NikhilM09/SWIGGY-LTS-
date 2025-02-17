import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import {  API_URL } from '../constants/config'

const Cardcontainer = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [searchText, setSearchText] = useState("");


  const handleSearchText = (val) =>{
    setSearchText(val)
  }

  

 const handleRating = () => {
  const filteredData = restaurantList.filter((restaurant)=>{
    return (restaurant.rating>=4.5)
  }
  )
  setRestaurantList(filteredData)
  console.log("filteredData", restaurantList)
 } 

 useEffect(()=>{
  const getRestaurantData = async() =>{
    try{
      const response = await fetch(API_URL);
      const data = await response.json()
      console.log("carousel data",data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info )
      console.log("restaurant list",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]) 
      setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(error){
      console.log("error", error)
    }
  }
  getRestaurantData();
 }, [])

console.log("page rendered")
  return (
    <>
    {/* <div>This is Cardcontainer component</div> */}
    <button className="bg-gray-300 p-2 rounded-md shadow-md hover:bg-gray-400" onClick={()=>handleRating()}>Top rated restaurants</button>
    <input className="border-2 border-black" type="text" value={searchText} onChange={(e)=>handleSearchText(e.target.value)}/>
    <h1>{searchText}</h1>
    <div className="flex gap-4 px-4 py-4 flex-wrap justify-center">
        {
        restaurantList.map((restaurant)=>{
            return <RestaurantCard
            // rating={restaurant["rating"]}
            // deliveryTime={restaurant.deliveryTime}
            // name={restaurant.name}
            //   cuisines={restaurant.cuisines}
            //   location={restaurant.location}
            {...restaurant?.info}
            />
          })
        }
    </div>
    </>
  )
}

export default Cardcontainer