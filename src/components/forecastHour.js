import React from 'react';
import "./forecastHour.css"

export default function ForecastHour(props) {
    return (
        <div className="forecast">
            <h3>{props.dt}</h3>
            <h2>{props.temp}<sup>o</sup></h2>
            <p>{props.desc}</p>
            
        </div>
    )
}
