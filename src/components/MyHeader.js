import React from "react";
import '../styles/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function MyHeader() {
    return (
        <Router>
            <div>
                <header>
                    <h1>KIRK EVAN THOMAS</h1>
                    <nav>
                        <ul>
                            <li><Link to={"/about"}>About Me</Link></li>&nbsp; | &nbsp;
                            <li><Link to={"/portfolio"}>Portfolio</Link></li> &nbsp; | &nbsp;
                            <li><Link to={"/contact"}>Contact Me</Link></li> &nbsp; | &nbsp;
                            <li><Link to={"/resume"}>Resume</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                        <Route path="/aboutme">
                            <AboutMe />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default MyHeader;
