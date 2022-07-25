import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Desc from "./Desc";
import Menu from "./Menu";
import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [check, setCheck] = useState(false);

  function toggleMenu() {
    setCheck((prevCheck) => !prevCheck);
    console.log(check);
  }

  return (
    <div className="App">
      <Navbar menu={toggleMenu} />
      <div
        className={
          check
            ? "translate-x-0 z-50 duration-300 ease-in-out absolute top-6 bg-white h-screen w-40 pl-4"
            : "absolute translate-x-[-100%] z-50 duration-300 h-screen"
        }
      >
        <Menu closeMenu={toggleMenu} />
      </div>
      <Hero />
      <Desc />
    </div>
  );
}

export default App;
