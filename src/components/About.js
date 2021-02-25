import React from 'react';

function About() {
    return (
        <div>
            <div>
                <h1>About me</h1>
                <h2>I'm a UI/UX product designer based in sunny Sydney, Australia.</h2>
                <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll find me cooking, gardening or working out in the park.</p>
                <button className="faceLike">Like it!</button>
                <button className="tweetFollow">Follow @AD</button>
            </div>
            <div>
                <h2>Part designer</h2>
                <ul>
                    <li>UX design</li>
                    <li>UI design</li>
                    <li>Design Systems</li>
                    <li>Interaction design</li>
                    <li>Making it "pop"</li>
                </ul>
                


                <h2>Part coder</h2>
                <ul>
                    <li>Front-end development</li>
                    <li>HTML / CSS</li>
                    <li>JavaScript (I try)</li>
                    <li>Eating pizza</li>
                    <li>Swearing at computer</li>
                </ul>
            </div>
        </div>
        
    )
}

export default About;