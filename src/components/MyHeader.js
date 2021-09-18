import React from "react";
import '../styles/header.css'


function MyHeader({ currentPage, handlePageChange }) {
    return (
        <div>
            <header>
                <h1>KIRK EVAN THOMAS</h1>
                <nav>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="#about-me" onClick={() => handlePageChange('AboutMe')}
                                // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
                                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                            >About Me</a></li>&nbsp;  &nbsp;

                        <li><a href="#my-work" onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >Portfolio</a></li> &nbsp;  &nbsp;

                        <li><a href="#contact-me" onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact Me</a></li> &nbsp;  &nbsp;

                        <li><a href="#resume" onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default MyHeader;
