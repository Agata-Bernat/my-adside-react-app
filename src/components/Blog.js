import React from 'react';

function Blog(props) {
    return (
        <div>
            <div>
                <h1>UI design books you should read in 2021</h1>
                <p>By Adham Dannaway on 5 Jan 2021</p>
                {/*place for img with clicked function -> go to article */}
                <p>{props.content && props.content.text}</p>
                <button className="ReadMore">Read more</button>
            </div>
        </div>
    )
}

export default Blog;
