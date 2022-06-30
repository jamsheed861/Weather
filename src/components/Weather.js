import React, { useEffect, useState } from "react";



//import axios from "axios";

import "./Weather.css";

function Weather() {
  const [city, secity] = useState({});
  const [search, setsearch] = useState("Baramulla");
  const [mosum, setmosum] = useState({});
  const [wind, setWind] = useState({});
  const [icon, seticon] = useState("");
  
 
 
  const time =new Date().toLocaleTimeString()
  const date=new Date().toDateString()
  
  console.log(time)
    
    
  useEffect(() => {
    
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&mode=json
        &appid=21c8f1027c7fb0129a656a9791082419`;
    
      //const url = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=21c8f1027c7fb0129a656a9791082419`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      secity(resJson.main);
      setmosum(resJson.weather[0]);
      setWind(resJson.wind);
      seticon(resJson.weather[0].icon);
    };
   
    fetchApi();
  
  }, [search]);

 

  return (
    <>
   
    
  
  
      <div className="maindiv">
      <div className="time">{time}<br/>{date}</div>
     
        <div className="inputdiv">
         <input 
            className="input"
            type="search"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            placeholder="search the city..."
            autoFocus='on'
           />
        </div>

        {!city ? (
          
          <p className="city">city not find</p>
        ) : (
          <div className="location">

<div>
              <img
                src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
                className="icon"
                alt="dp"
              />
            </div>
            <h1>{search}</h1>
            {/* <div className="locate">
              <h2>{search}</h2>
            </div> */}
            

            <div className="temp">
              <p id="tmp">{Math.floor( city.temp)}  &deg;C</p>
            </div>
            <div className="humidity">
              
                <p>Feels Like : {city.feels_like}   &nbsp;&nbsp;    Humidity : {city.humidity}%</p>
              
            </div>
            <div className="weather">
            <p>Weather : {mosum.main}    </p><p> Description : {mosum.description} </p>
            </div>
            <div className="wind">
           <p> wind speed : {wind.speed} m/s </p>
              
            </div>
           
          </div>
        )}
      </div>
      
    </>
  );
}

export default Weather;