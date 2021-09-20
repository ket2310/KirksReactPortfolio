import Avatar from "@material-ui/core/Avatar";
import React from "react";
import gh from '../images/GitHub-Mark-Light-32px.png';
import linkdin from '../images/LI-In-Bug.png';
import '../styles/about.css';

export default function  MyFooter () {
    return (
        <div className="footer">
            <Avatar src={gh} alt="Github" className="avatar"/>
            <Avatar src={linkdin} alt="LinkedIn" className="avatar"/>
        </div>
    )
}