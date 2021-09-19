import React from "react";
import '../styles/about.css';
import Avatar   from '@material-ui/core/Avatar'

function AboutMe() {
    return (
        <div className="MyBio">
            <Avatar src="KirkEThomas3.jpg" alt="Avatar" className="avatar"/>
            <p>
                Full stack web developer with a solid history of creating web applications for organizations
                Core, VB,
                C#/ MVC, Javascript, and Entity Framework. Astute problem-solver who is capable of prioritizing and
                managing
                complex projects independently or in collaboration with others. Successfully migrated an application
                from File
                Maker Pro to .NET Core. Rebuilt the application from scratch, designing the models and migrating them to
                a SQL
                Server database. Tenacious problem-solver who sees obstacles as solutions waiting to be discovered.
            </p>
        </div>
    )
}

export default AboutMe;