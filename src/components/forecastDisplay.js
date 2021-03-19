import React from 'react';
import ForecastHour from "./forecastHour";
import "./forecastDisplay.css"

export default function forecastDisplay(props) {
    const {data1} = props;
    console.log(data1);
    
    return (
        
        <div>
             {data1.cod != 404 ?
             <div>
            <h2>FORECAST HOURS</h2>
            <div className="forecastDisplay">
            {data1.list.map(data =>{
                return (
                    <ForecastHour 
                    dt={data.dt_txt}
                    temp={data.main.temp}
                    desc={data.weather[0].description}
                    />

                )
            })}
            </div>
            </div>
            : null
            }
            
        </div>
    )
}

//new Date(data.dt*1000).toLocaleTimeString()