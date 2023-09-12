import React, { useEffect, useState } from "react";
import './Nav.css'

function Nav(){
    const [show,handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
            <img className="nav__logo" src="https://pngimg.com/d/netflix_PNG26.png"/>
            <img className="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYDLXAtarin-Qhy3KFrWmZ5uLxaBfG4MtLPGcxtY&s"/>
            </div>
        </div>
    )
}

export default Nav;