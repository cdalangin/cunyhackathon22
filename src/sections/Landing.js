import React from "react";
import "../styles/Landing.css"

import Nav from "./Nav.js"
import LG from "../assets/LandingGraphic.png"



export default function Landing() {

    return (
        <div id="landing">
            <div className="main-graphic">
                <img src={LG} alt="landing graphic" className="ld-graphic"/>
            </div>
            <Nav />
        </div>
    )
}