import React from "react";
import "../styles/Mentor.css";
import clipboard from "../assets/clipboard.png";
import Nav from "../sections/Nav";
import { Link } from "react-router-dom";
import applyNow from "../assets/applyNow.png";

export default function Mentor() {
  const mentorText = [
    {
      id: 1,
      name: "mentor",
      icon: clipboard,
      description:
        "A mentor will support student hackers in their project by answering their questions. These questions will range from idea validation, design, programming, pitching, and more. You have the choice of what timeslots you will be available for.",
      title: "Mentor Application",
    },
  ];
  return (
     <div id="mentor" className="main">
     <Nav />
        {mentorText.map((mentor) => {
          return (
            <div className="mentor-box">
              <div className="mentor-text">
              <h3 className="mentor-title">{mentor.title}</h3>
              <p className="mentor-desc">{mentor.description}</p>
              <Link to="/mentor">
                <img src={applyNow} alt="apply now icon" className="apply-now" />
              </Link>
              </div>
            </div>
          );
        })}
        
      </div>
  );
}
