import React from "react"
import Landing from "../sections/Landing.js"
import Tracks from "../sections/Tracks.js"
import FAQ from '../sections/FAQ';
import '../styles/Main.css';
import About from '../sections/About';


export default function Main() {
  return (
    <div className="main">
      <Landing />
      <About />
      <Tracks />
      <FAQ />
    </div>
  );
}
