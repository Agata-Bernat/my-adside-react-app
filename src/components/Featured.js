import React from 'react';

function Featured() {
    return (
        <div>
            <div>
                <h1>featured in</h1>
                <h2>I've been lucky enough to be featured in publications worldwide.</h2>
                <p>Smashing Book 2, Web Designer Magazine and a bunch of websites including: Web FX, Awwwards, Web Design Ledger, News.com.au, Noupe and Onextrapixel to name a few.</p>
            </div>
            <div>
                <h2>Presented at Design in Motion</h2>
                <p>July 2016</p>
                <p>I spoke at a global design thinking event in Sydney called Design in Motion. I was 1 of 5 designers given the 2 week challenge of rethinking flight search. We each documented our process and presented our concepts on the night. It was a fun challenge and a great night out for all.</p>
                <p>Read the case study</p> {/*need to make it clickable */}
            </div>
            {/*here will be more of an article like the last one - here come REACT, that I know, but how still don't know */}
        </div>
    )
}

export default Featured;
