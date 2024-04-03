import React from "react";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <Technologies />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
