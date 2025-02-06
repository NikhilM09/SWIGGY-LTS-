import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
      {/* <Header></Header>
      {Header()} */}
    </div>
  );
};



export default App
{/* <header></header> This is done
<body>
  <Carousel/>
  <Cardcontainer>
    <SearchBar/>
    <Filter/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
  </Cardcontainer>
</body>
<footer></footer> */} 

{/* <Menu>
  <RestaurantInfo/>
  <MenuContainer>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
  </MenuContainer>
</Menu> */}

{/* <Cart/> */}