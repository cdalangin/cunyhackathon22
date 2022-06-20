import React from "react";
import "../styles/Main.css";
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
    <div>
      <div className="main" style={{ minHeight: "100vh" }}>
        <Nav />
        {judgeText.map((judge) => {
          return (
            <div className="judge-box">
              <h3 className="judge-title">{judge.title}</h3>
              <img src={judge.icon} alt={judge.name} className="judge-icon" />
              <p className="judge-desc">{judge.description}</p>
            </div>
          );
        })}
        <Link to="/mentor">
          <img src={applyNow} alt="apply now icon" className="apply-now" />
        </Link>
      </div>
    </div>
  );
}
 

