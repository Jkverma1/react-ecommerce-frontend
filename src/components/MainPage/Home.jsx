import React from "react";
import "./Home.css";
import axios from "axios";
import SliderHome from "./Slider";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState();
  useEffect(() => {
    axios
      .get("https://localhost:8081")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Message);
        }
      })
      .catch((res) => {
        console.log("try again");
      });
  });
  return (
    <>
      <section className="home">
        {auth ? <div>{name}</div> : <div>{message}</div>}

        <div className="container d_flex">
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
