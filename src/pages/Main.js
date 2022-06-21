import React from "react"
import Sticky from 'react-sticky-el';
import Nav from "../sections/Nav"
import Landing from "../sections/Landing.js"
import Tracks from "../sections/Tracks.js"
import FAQ from '../sections/FAQ';
import '../styles/Main.css';
import About from '../sections/About';
import Sponsors from "../sections/Sponsors.js";
import Organizers from "../sections/Organizers.js";


export default function Main() {
  return (
    <div className="main">
      {/* <Sticky> */}
        <Nav/>
      {/* </Sticky> */}
      
      <Landing />
      <About />
      <Tracks />
      <FAQ />
      <Sponsors />
      <Organizers />
    </div>
  );
}
