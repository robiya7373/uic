import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Believer from "../components/home/Believer";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import Portfolio from "../components/home/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Believer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
