import React from "react";
import './HomeScreen.css';
import Nav from  '../navbar/Nav.js'
import Banner from "../banner/Banner";

function HomeScreen(){
    return (
        <div className="homeScreen">
            {/* Nav */}
            <Nav />
            
            <Banner />
            {/* Banner */}

            {/* Rows */}

        </div>
    )
}

export default HomeScreen;