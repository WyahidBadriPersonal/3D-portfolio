import React from "react";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Resume from "./components/services/Resume";

function App() {
  return (
    <div className="#container">
      <section id="hero">
        <Hero />
      </section>
      <section id="#resume">
        <Resume />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
