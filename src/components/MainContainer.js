import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import MyHeader from './MyHeader';
import '../styles/maincontent.css';

export default function MainContainer(props) {
    const currPg = props.currentPg;
    console.log(currPg)

    const renderNavigaition = () => {
        if (currPg === "AboutMe") {
            return (
                <AboutMe />
            )
        } if (currPg === "Portfolio") {
            return (
                <Portfolio />
            )
        } if (currPg === "Contact") {
            return (
                <Contact />
            )
        } if (currPg === "Resume") {
            return (
                <Resume />
            )
        }
    };

    const handlePageChange = (page) => props.setPage(page);


    return (
        <div className="MainContainer">
            {/* We are passing the currentPage from state and the function to update it */}
            <MyHeader currentPage={props.currPg} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderNavigaition()}
        </div>
    );
}