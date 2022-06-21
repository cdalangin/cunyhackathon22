import React from "react";
import "../styles/Main.css";
import "../styles/Judges.css";
import Nav from "../sections/Nav";
import clipboard from "../assets/clipboard.png";
import applyNow from "../assets/applyNow.png";
import { Link } from "react-router-dom";
 
export default function Judges() {
  const judgeText = [
    {
      id: 1,
      name: "judge",
      icon: clipboard,
      description:
        "A judge will review and assess the projects made during the hackathon near the end of the event, tentatively set for 8am - 12pm on Sunday Nov 14, 2021. Judges will use Devpost and the judging criteria and guidelines will be provided to make it as easy and efficient as possible.",
      title: "Judge Application",
    },
  ];
 
  return (
     <div id="judges" className="main">
        <Nav />
        {judgeText.map((mentor) => {
          return (
            <div className="judges-box">
              <div className="judges-text">
              <h3 className="judges-title">{mentor.title}</h3>
              <p className="judges-desc">{mentor.description}</p>
              <Link to="/judges">
                <img src={applyNow} alt="apply now icon" className="apply-now" />
              </Link>
              </div>
            </div>
          );
        })}
        
      </div>
  );
}
 

