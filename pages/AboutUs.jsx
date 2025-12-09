import React from "react";
import AlumList from "../src/Components/AboutUs/AlumList";
import TeamsLanding from "../src/Components/AboutUs/TeamsLanding";
import OurVision from "../src/Components/AboutUs/OurVision.jsx";
import AboutHero from "../src/Components/AboutUs/AboutHero.jsx";
export default function AboutUs(){
    return (
        <div className="AboutUs">
            <TeamsLanding />
            <AlumList />
            <OurVision />
            <AboutHero />
        </div>
    )
}