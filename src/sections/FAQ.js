import React, {useState} from "react";
// import ReactHtmlParser from '@hedgedoc/html-to-react';
import "../styles/FAQ.css"
import {questions} from "../assets/Questions"
import Arrow from "../assets/purparrow.png"

export default function FAQ() {
    const [items, setItems] = useState(questions)

    const showQ = (i) => {
        items[i].shown = !items[i].shown
        const newItems = [...items]

        setItems(newItems)
    }

    // TODO: PARSE HTML IN ANSWERS
    return(
        <div id="faq">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-bg">
            {items.map((__, index) => {
                    return (
                        <div className="ques-section">
                            <h5 className="ques" onClick={() => {showQ(index)}}><img src={Arrow} alt="arrow" className="ques-arrow"/>{items[index].ques}</h5>
                            <p className={items[index].shown ? "show-ans ans" : "hide-ans ans"}>{items[index].ans}</p>
                        </div>
                    )
                } )}
                
            </div>
        </div>

    )
}