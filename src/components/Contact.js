import React, { useState } from 'react';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendData () {
        console.log(name, email, message);
    }
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
                <input type="text" placeholder= "Your name" onChange = {(e) => setName(e.target.value)} />
                <input type="text" placeholder= "Your email" onChange = {(e) => setEmail(e.target.value)} />
                <input type="text" placeholder= "Your message" onChange = {(e) => setMessage(e.target.value)} />
                <button className="Send" onClick={sendData} >Send email</button>
            </div>
        </div>
    )
}

export default Contact;