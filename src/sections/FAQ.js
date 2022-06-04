import React, {useState} from "react";
// import ReactHtmlParser from '@hedgedoc/html-to-react';
import "../styles/FAQ.css"
import {questions} from "../assets/Questions"

export default function FAQ() {
    const [clicked, onClicked] = useState(false);
    const [items, setItems] = useState(questions)

    const showQ = (index) => {
        onClicked(!clicked)
    }

    // TODO: PARSE HTML IN ANSWERS
    // TODO: make it so it changes on individual level
    return(
        <div id="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-bg">
            {items.map((__, index) => {
                    return (
                        <div className="ques-section">
                            <h5 className="ques" onClick={() => {showQ(index)}}>{items[index].ques}</h5>
                            <p className={clicked ? "show-ans ans" : "hide-ans ans"}>{items[index].ans}</p>
                        </div>
                    )
                } )}
                
            </div>
        </div>

    )
}