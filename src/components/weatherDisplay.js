import React from 'react'
import "./weatherDisplay.css"
export default function WeatherDisplay(props) {
   const {data} = props;
    const icon = {} ;
    
   const iconurl = `http://openweathermap.org/img/wn/${data.cod != 404 ? data.weather[0].icon : null}@2x.png`;
   console.log(iconurl);
    return (
        <div >
            {
                data.cod != 404 ?
                    <div >
                        <h3 className="cityName">The weather in {data.name} </h3>
                        <p>As of {new Date().toLocaleTimeString()}</p>

                        <div className="weatherinfo">
                            <div className="weatherinfo_left">
                                <div className="tempHeading">
                                <img className="icon" src={iconurl } alt=".." />
                                
                                <div>
                                    <h1>{Math.floor(data.main.temp)}<sup>o</sup></h1>
                                    <span>{data.weather[0].description}</span>
                                </div>
                                
                                </div>
                            </div>
                        
                        
                        
                        <div className="section1">
                            <table>
                                <tr>
                                    <td>
                                        <h4>high\low</h4>
                                    </td>
                                    <td>
                                        <span>{data.main.temp_max}<sup>o</sup>\{data.main.temp_min}<sup>o</sup> </span>
                                    </td>
                                    <td>
                                        <h4>wind</h4>
                                    </td>
                                    <td>
                                        <span>{Math.floor(data.wind.speed*18)/5} km/hr</span>
                                    </td>
                                    
                                </tr>

                                <tr>
                                    <td>
                                        <h4>humidity</h4>
                                    </td>
                                    <td>
                                        <span>{data.main.humidity} %</span>
                                    </td>
                                    <td>
                                        <h4>Wind Direction</h4>
                                    </td>
                                    <td>
                                        <span>{data.wind.deg}<sup>o</sup> deg %</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <h4>pressure</h4>
                                    </td>
                                    <td>
                                        <span>{data.main.pressure} %</span>
                                    </td>
                                    <td>
                                        <h4>sunrise</h4>
                                    </td>
                                    <td>
                                        <span>{new Date(data.sys.sunrise*1000).toLocaleTimeString()} </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <h4>visibility</h4>
                                    </td>
                                    <td>
                                        <span>{data.visibility / 1000} km </span>
                                    </td>
                                    <td>
                                        <h4>sunset</h4>
                                    </td>
                                    <td>
                                        <span>{new Date(data.sys.sunset*1000).toLocaleTimeString()} </span>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    </div>
                            : <div> <h1>city not found</h1></div>
                }
           
        </div>
        
    )
}

// "http://openweathermap.org/img/wn/" + icon +"@2x.png"
