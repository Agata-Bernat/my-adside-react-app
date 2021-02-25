import React from 'react';

function Contact() {
    return (
        <div>
            <div>
                <h1>contact me</h1>
                <p>Do you speak Na’vi? It's ok if you don't, I speak English too.</p>
                <a href src="">Like me on Facebook</a>
                <a href src="">Follow me on Twitter</a>
                <a href src="">Follow me on Dribbble</a>
                <a href src="">Connect on LinkedIn</a>
            </div>
            <div>
                <input type="text">Your name</input>
                <input type="text">Your email</input>
                <input type="text">Your message</input>
                <button className="Send">Send email</button>
            </div>
        </div>
    )
}

export default Contact;