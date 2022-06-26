import React from "react"
import '../styles/Organizers.css'; 

import Huilin from "../assets/organizers/huilin.jpg"
import Ferduse from "../assets/organizers/ferduse.jpg"

export default function TBA() {

  return (
    <div id="tba" className="hvr-hang">
      <div className="org-bg org-top"></div>
      <div className="org-bg org-mid">
        <h2 className="tba-text">More information coming soon!</h2>
        <h4 className="tba-follow" onClick={event =>  {window.open('https://www.instagram.com/cuny.hackathon/', "_blank")}}>Follow us on Instagram</h4>
      </div>
      <div className="org-bg org-bot"></div>
    </div>
  );
}
