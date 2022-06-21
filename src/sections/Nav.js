import React from "react"
import Sticky from 'react-sticky-el';
import '../styles/Nav.css'; 
import { Outlet, Link } from "react-router-dom";
import E from "../assets/E.png"
import Folder from "../assets/FOLDERS.png"
import Computer from "../assets/computer.png"


export default function Nav() {

    return (
        // TODO: Highlight Active page
        // <Sticky>
        <div className="sidebar">
            <Link to="/mentor" className="nav-icons">
                <img src={Computer} alt="computer icon" className="icons" />
                <p className="icon-title">MENTOR</p>
            </Link>
            <Link to="/judges" className="nav-icons">
                <img src={Folder} alt="folder icon" className="icons" />
                <p className="icon-title">JUDGES</p>
            </Link>
            <div className="nav-icons">
                <img src={E} alt="internet explorer icon" className="icons" />
                <p className="icon-title">PARTICIPANTS</p>
            </div>
        </div>
        // </Sticky>
    )
}