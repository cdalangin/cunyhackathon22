import React from "react"
import "../styles/About.css"
import Globe from "../assets/globe.png"

export default function About() {

    return(
        <div id="about">
            <h1 className="about-title">About</h1>
            <div className="text-section">
                {/* <div className="text-box"> */}
                <img src={Globe} alt="globe" className="about-img"/>
                    <p className="about-txt txt1">CUNY Hackathon, NYC's largest collegiate hackathon with nearly 
                    900 attendees in its 6th iteration this fall, with this being 
                    the 3rd  time it's virtual and the 4th time it's student-run. 
                    We welcome all  CUNY students and recent grads (within a year 
                    off graduating)  regardless of major, skill level, and background.</p>
                    
                    

                    <p className="about-txt txt2">With the goal of bringing together
                    students in software development,
                    design, marketing and entrepreneurship to build solutions for 
                    problems unique to the New York 
                    City community, this 36-hour event
                    will see students create projects
                    and learn from workshops and
                    activities.</p>
                {/* </div> */}
                
                
                
            </div>
        </div>
    )
}