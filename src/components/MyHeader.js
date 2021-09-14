import React from "react";
import '../header.css'


function MyHeader () {
    return (  
    <div>
    <header>
        <h1>KIRK EVAN THOMAS</h1>
        <nav>
            <ul>
                <li><a href="#about-me">About Me</a></li>&nbsp; | &nbsp;
                <li><a href="#my-work">Portfolio</a></li> &nbsp; | &nbsp;
                <li><a href="#contact-me">Contact Me</a></li> &nbsp; | &nbsp;
                <li><a href="./assets/images/The Resume of Kirk E Thomas.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
    </header>
    </div>
    );
}

export default MyHeader;