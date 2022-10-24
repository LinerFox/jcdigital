import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React from "react";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default App;
