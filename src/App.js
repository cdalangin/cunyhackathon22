import React from "react";
import './styles/Main.css';
import Nav from "./sections/Nav"
import Landing from "./sections/Landing.js"
import Tracks from "./sections/Tracks.js"
import FAQ from './sections/FAQ';
import About from './sections/About';
import TBA from './sections/TBA';
import Sponsors from "./sections/Sponsors.js";
import Organizers from "./sections/Organizers.js";
import Footer from "./sections/Footer.js";

export default function App() {
  return (
    <div className="main">
    {/* <Nav /> */}
      <Landing />
      <About />
      <Tracks />
      <FAQ />
      <TBA />
      {/* <Sponsors /> */}
      {/* <Organizers /> */}
      <Footer />
    </div>
  );
}
