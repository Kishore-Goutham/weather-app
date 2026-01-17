import React, { useState } from 'react'
import sunnybg from "./Assests/sunnybg.png"
import cloudybg from "./Assests/cloudybg.png"
import rainybg from "./Assests/rainybg.png"
import sunny from  "./Assests/sunny.png"
import rainny from "./Assests/rainny.png"
import cloudy from "./Assests/cloudy.png"
import sunt from  "./Assests/suntitle.png"
import Weather from './weather'
import axios from 'axios'
import weathersearch from "./Assests/weather-search.png"
import "./index.css"

function App() {
  
    const[bgimage,setBgimage] = useState(sunnybg);
    const[weatherimg, setWeatherimg] = useState(sunny);
    const [report,setReport] = useState({city:""});
    const[name, setName] = useState("");
    const [error, setError] = useState(false)
    

    function handleSearch(){
     if(name){
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=553a8f4e89f383d583ee941ce75cfb78`).then((res)=> { 
        console.log(res)
            
       let weathermain =  res.data.weather[0].main

        if(weathermain.includes("Clouds") || weathermain.includes("Mist") || weathermain.includes("Fog")){
            setBgimage(cloudybg)
            setWeatherimg(cloudy)
            
        }
        else if(weathermain.includes("Rain")){
            setBgimage(rainybg)
            setWeatherimg(rainny)
        }else{
            setBgimage(sunnybg)
            setWeatherimg(sunny)
        }

        setReport({
         weather: res.data.weather[0].description,
        temperature:Math.floor(res.data.main.temp),
        feelslike:Math.floor(res.data.main.feels_like),
        wind: Math.floor(res.data.wind.speed * 3.6),
        humidity : res.data.main.humidity,
        city:res.data.name
        })

        setError(false)
     }).catch((err)=>setError(true))
    }
    }

    const style={
        backgroundImage : `url(${bgimage})`,
        backgroundSize : "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }
  return (
    <div style={style}>
     <div className="card">
          <div className="head">
             <img src={sunt} alt="sunt"></img>
             <h1>Weather Report</h1>
          </div>
          <div className='search'>
              <input placeholder='Enter city name' onChange={(e)=>setName(e.target.value.trim())}></input>
              <button onClick={handleSearch}>Search</button>
          </div>
        {(report.city || error)?  <Weather wimg={weatherimg} report={report} error={error}/> :
         <div className="default">
            <h2>Search for the weather</h2>
            <p>Enter a city name to get current weather info</p>
            <img src={weathersearch} alt='weather-search'></img>
         </div> }
     </div>
     
      </div>
        
  )
}

export default App