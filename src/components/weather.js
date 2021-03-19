
import React from 'react';
import "./weather.css";
import WeatherDisplay from "./weatherDisplay";
import ForecastDisplay from "./forecastDisplay";


function Weather() {

    
    const [form, setform] =React.useState({
        city:"",
        units:""
    });

    console.log(form);

    const [weather, setweather] = React.useState([]);
    console.log(weather.data);

    const [forcast, setforcast] = React.useState([]);
   

    const APIkey = "4a8660621c89c9cef061a41ba962a91c";
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIkey}&units=${form.units}`;
    const link2 = `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&APPID=${APIkey}&units=metric`;
    console.log(link);
    
    async function weatherData(e){
        e.preventDefault();
        if(form.city ==""){
            alert("Enter the city name");
        }
        else{
            
            const data = await fetch(link)
            .then(res => res.json())
            .then(data => data);

            setweather({data:data});

            const data1= await fetch(link2)
            .then(res => res.json())
            .then(data => data)

            setforcast({data:data1})
        } 
        
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setform(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
            
    }

    return (
        <div className="weather" >
            <span className="title">WEATHER APP</span>
            <br/>
            <form className="search">
                <input className="searchInput"  type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
               
                    <select name="units" onClick={handleChange}>
                    <option value="metric">celcius</option>
                    <option value="imperial">faranheit</option>
                    </select>
                <button className="getweather" onClick={e => weatherData(e)}> Search</button>
            </form>
           
            {weather.data && forcast.data != undefined ? (
                <div>
                    <WeatherDisplay data={weather.data} />
                    <ForecastDisplay data1={forcast.data} />
                </div>
            ) : null
            }
           
        </div>
    )
}

export default Weather;
