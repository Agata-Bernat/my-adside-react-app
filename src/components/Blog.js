import React from 'react';

function Blog() {
    return (
        <div>
            <div>
                <h1>UI design books you should read in 2021</h1>
                <p>By Adham Dannaway on 5 Jan 2021</p>
                {/*place for img with clicked function -> go to article */}
                <p>Contrary to popular belief, user interface design isn’t just about creating pretty pixels on a screen to share on Dribbble (although that can be fun). While UI design is an art form, it’s also a science with a myriad of tools and techniques used to effectively communicate with users. The result is an interface that’s simple, beautiful and easy to use.</p>
                <button className="ReadMore">Read more</button>
            </div>
        </div>
    )
}

export default Blog;
