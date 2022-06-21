import React from "react"
import '../styles/Organizers.css'; 

import Huilin from "../assets/organizers/huilin.jpg"
import Ferduse from "../assets/organizers/ferduse.jpg"

export default function Organizers() {
  const orgInfo = [
    {
      id: 1,
      name: "Huilin Zou (she/her)",
      team: "Marketing and Outreach",
      linkedin: "https://www.linkedin.com/in/huilin-zou/",
      image: Huilin
    },
    {
      id: 2,
      name: "Ferduse Rahman (she/her)",
      team: "Marketing and Outreach",
      linkedin: "http://linkedin.com/in/ferduserahman",
      image: Ferduse
    }
  ]

  return (
    <div id="org">
      <h1 className="org-title">Organizers</h1>
      <div className="org-bg org-top"></div>
      <div className="org-bg org-mid">
        <div className="org-all">
        {
          orgInfo.map((info) => {
            return (
              <div id={info.id} className="org-box">
                <a href={info.linkedin}>
                  <img src={info.image} alt={info.name} className="org-img" />
                </a>
                <h2 className="org-name">{info.name}</h2>
              </div>
            )
          })
        }
        </div>

      </div>
      <div className="org-bg org-bot"></div>
    </div>
  );
}
