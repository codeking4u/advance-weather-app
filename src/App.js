import React, {useState} from 'react';
import { symlinkSync } from 'fs';
//require('dotenv').config();
const api = {
  key: process.env.REACT_APP_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather]  = useState({});
  const search = e =>{
    if(e.key=="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res)=>res.json())
      .then(result=>{
        setWeather(result);
        setQuery('');
        console.log(result)
      })
    }
  }

  const dateBuilder = (d:Date) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currDay = days[d.getDay()];
    let currMonth = months[d.getMonth()];
    let currYear = d.getFullYear();
    let currDate = d.getDate();
    return `${currDay} ${currDate} ${currMonth} ${currYear}`
  }

  return (
    <div className={(typeof weather.main != "undefined")?((weather.main.temp>25)?'App summer':'App'):('App')}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className = "search-bar"
            placeholder = "Search City,Country"
            onChange={(e)=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        { (typeof weather.main != 'undefined')? (
            <div>
              <div className="location-box">
                <div className = "location" >{weather.name}, {weather.sys.country}</div>
                <div className = "date" >{dateBuilder(new Date())}</div>
              </div>

              <div className= "weather-box">
                <div className= "temp">{Math.round(weather.main.temp)}°C</div>
        <div className= "weather">{weather.weather[0]['main']}</div>
              </div>
            </div>

        ):('')}
        

      </main>
    </div>
  );
}

export default App;
