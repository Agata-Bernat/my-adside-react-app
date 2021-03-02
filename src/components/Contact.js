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
                <input type="text" placeholder= "Your name" />
                <input type="text" placeholder= "Your email" />
                <input type="text" placeholder= "Your message" />
                <button className="Send">Send email</button>
            </div>
        </div>
    )
}

export default Contact;