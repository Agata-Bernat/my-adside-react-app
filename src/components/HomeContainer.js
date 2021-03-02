import React from 'react';
import { Link } from 'react-router-dom';
 
function HomeContainer() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to = "/About">About</Link></li>
                    <li><Link to = "/Featured">Featured</Link></li>
                    <li><Link to = "/Portfolio">Portfolio</Link></li>
                    <li><Link to = "/Blog">Blog</Link></li>
                    <li><Link to = "/Contact">Contact</Link></li>
                </ul>
{/* place for photo, I am thinking what kind of big container it should be. */}
                <h1>some of latest work</h1>
{/* place for 3 cards */}
            </nav>
        </div>
    )
}




export default HomeContainer;