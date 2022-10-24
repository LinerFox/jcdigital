import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import React from "react";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Brands /> */}
      <About />
      <Skills />
      <Portfolio />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};

export default App;
