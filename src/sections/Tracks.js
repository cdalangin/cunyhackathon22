import React from "react";
import "../styles/Tracks.css"

import Entertainment from "../assets/entertainment.png"
import Urban from "../assets/urbantech.png"
import Finance from "../assets/finance.png"
import Education from "../assets/education.png"
import Healthcare from "../assets/hospital.png"


export default function Tracks() {

    const allTracks = [
        {
            id: 1,
            name: "Entertainment",
            icon: Entertainment,
            description: "Games, Art, and Music"
        },
        {
            id: 2,
            name: "Urban Tech (For NYC)",
            icon: Urban,
            description: "Environmental Sustainability, GovTech, and Transportation"
        },
        {
            id: 3,
            name: "Finance",
            icon: Finance,
            description: "Personal Finances, Blockchain, and Budgeting"
        },
        {
            id: 4,
            name: "Education",
            icon: Education,
            description: "Productivity, Online, Learning, and College Life"
        },
        {
            id: 5,
            name: "Healthcare",
            icon: Healthcare,
            description: "Physical Health, Mental Health, and Wellness"
        }
    ]

    return (
        <div id="tracks">
            <h1>Tracks</h1>
            <div className="all-tracks">
                {allTracks.map(track => {
                    return (
                        <div className="track-box">
                            <h3 className="track-title">{track.name}</h3>
                            <img src={track.icon} alt={track.name} className="track-icon"/>
                            <p className="track-desc">{track.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}