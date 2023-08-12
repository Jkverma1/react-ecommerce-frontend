import React from "react";
import "./Home.css";
import axios from "axios";
import SliderHome from "./Slider";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="home">

        <div className="container d_flex">
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
