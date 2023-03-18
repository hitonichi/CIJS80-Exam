import { useEffect, useState } from "react";
import axios from 'axios'
import errorImg from '../assets/images/404error.jpg'

const WeatherCardBody = ({location}) => {
    const [result, setResult] = useState(null);
    const [err, setErr] = useState(false);
    
    useEffect(() => {
        if (location !== "") {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=439c9626324744899229e8a250853792`)
                .then(response => {
                    setResult(response.data);
                    setErr(false);
                })
                .catch(e => {
                    setErr(true);
                    console.log(e);
                })
        }
    }, [location])
    
    if (err) {
        return (
            <div className="weather-container">
                <img id="error-img" src={errorImg} alt="404 error"/>
                <div className="weather-condition">404 Error</div>
                
            </div>
        )
    } else {
        if (result) {
            const weather = result.weather[0];
            return (
                <div className="weather-container">
                    <div className="loc-name">{result.name}, {result.sys.country}</div>
                    <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt={weather.description} />
                    <div className="weather-condition">{weather.main}</div>
                    <div className="temperature">
                        <i className="fa-solid fa-temperature-three-quarters"></i>
                        {" "+ result.main.temp}°C
                    </div>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}

export default WeatherCardBody;