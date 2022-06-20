import React from "react"
import '../styles/Sponsors.css'; 
import Google from "../assets/sponsors/google.png"

export default function Sponsors() {
  return (
    <div id="spon">
      <h1 className="spon-title">Sponsors</h1>
      <div className="spon-bg spon-top"></div>
      <div className="spon-bg spon-mid">
        <img src={Google} alt="Google logo" className="spon-logo"/>
      </div>
      <div className="spon-bg spon-bot"></div>
    </div>
  );
}
