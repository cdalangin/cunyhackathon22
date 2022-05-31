import React from "react";
import "../styles/Landing.css"
import LG from "../assets/LandingGraphic.png"
import E from "../assets/E.png"
import Folder from "../assets/FOLDERS.png"
import Computer from "../assets/computer.png"


export default function Landing() {

    return (
        <div id="landing">
            <div className="main-graphic">
                <img src={LG} alt="landing graphic" className="ld-graphic"/>
            </div>
            <div className="sidebar">
                <div class="nav-icons">
                    <img src={Computer} alt="computer icon" className="icons" />
                    <p className="icon-title">MENTOR</p>
                </div>
                <div class="nav-icons">
                    <img src={Folder} alt="folder icon" className="icons" />
                    <p className="icon-title">JUDGES</p>
                </div>
                <div class="nav-icons">
                    <img src={E} alt="internet explorer icon" className="icons" />
                    <p className="icon-title">PARTICIPANTS</p>
                </div>
            </div>
        </div>
    )
}