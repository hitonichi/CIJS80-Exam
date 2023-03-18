import WeatherCardBody from "./WeatherCardBody";
import LocationFinder from "./LocationFinder";
import { useState } from "react";

const WeatherCard = () => {
    const [location, setLocation] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        const loc = e.target.location.value;
        if (loc !== "") {
            setLocation(loc);
        } else {
            alert("You can't leave the input empty!");
        }
    }
    
    return (
        <div className="container">
            <LocationFinder handleSubmit={handleSubmit}></LocationFinder>
            <WeatherCardBody location={location}></WeatherCardBody>
        </div>
    )
}

export default WeatherCard;