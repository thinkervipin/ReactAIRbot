import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/home.svg"
import Common from "./Common";

const Home = () => {
  return (
    <>
     <Common
     
     name='Welcome to Home page' 
     imgsrc={web} 
     visit='/service' 
     btname="Learn more"
     />
    </>
  );
};

export default Home;
