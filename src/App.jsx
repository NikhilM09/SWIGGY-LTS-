import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { Outlet } from "react-router";


const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/> 
     {/* Outlet can take three possible values <Body/>, <About/>, <ContactUs/> */}
      {/* <Footer/> */}
      {/* <Header></Header>
      {Header()} */}
    </div>
  );
};



export default App