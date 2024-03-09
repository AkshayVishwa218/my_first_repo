import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programms from "./Components/Programms/Programms";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/VideoPlayer/Video";

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programms />
        <About setPlayState = {setPlayState}/>
        <Title subTitle="Galellry" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonial />
        <Title subTitle="Contact us" title="Get In Touch" />
        <Contact />
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </>
  );
};

export default App;
