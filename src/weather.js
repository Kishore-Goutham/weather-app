import React from 'react'
import humidity from "./Assests/humidityy.png"
import wind from "./Assests/windy.png"
import temp from "./Assests/temp.png"
import errorimg from "./Assests/errorimg.png"

function Weather({wimg,report,error}) {
  return (
    <>
     {error?  <div className='error'>
      <img src={errorimg}></img>
      <h2>City not found!</h2>
       <p>Please try again later</p> 
       
       </div> :  <div>
        <div className="weather-sec1">
        <img src={wimg}></img>
        <h1>{report.temperature}&deg;C</h1>
        <h3>{report.city}</h3>
        <p>{report.weather}</p>
        </div>

        <div className="weather-sec2">

            <div className="weather-sec2__reports">
            <div className="reports_sec1">
           <img src={humidity}/>
           <p>Humidity</p>
           </div>
           <h3>{report.humidity}%</h3>
           </div>

           <div className="weather-sec2__reports">
            <div className="reports_sec1">
           <img src={wind}/>
           <p>Wind</p>
           </div>
           <h3>1{report.wind} km/h</h3>
           </div>

           <div className="weather-sec2__reports" style={{border:"none"}}>
            <div className="reports_sec1">
           <img src={temp}/>
           <p>Feels like</p>
           </div>
           <h3>{report.feelslike}&deg;C</h3>
           </div>

        </div>
    </div> }
    </>
  )
}

export default Weather