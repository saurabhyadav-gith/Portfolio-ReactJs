import React from 'react'
import "./contact.scss"
export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src = "assets/shake.svg" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="" onSubmit = {handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type = "submit">Send</button>
                </form>
            </div>
        </div>
    )
}

