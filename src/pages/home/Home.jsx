import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Believer from "../../components/Believer";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Believer />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
