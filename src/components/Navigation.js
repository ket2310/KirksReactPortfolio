import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume  from './Resume';

// Here we destructure our props into their own distinct variables
export default function Navigation(props) {
    const currPg = props.currentPg;
    console.log(currPg)
    if (currPg === "AboutMe") {
        return (
            <AboutMe />            
       )
    }else if(currPg === "Portfolio") {
        return (
            <Portfolio/>
        )
    } else if (currPg === "Contact") {
        return (
            <Contact />
        )
    } else if (currPg === "Resume") {
        return (
            <Resume />
        )
    }
}