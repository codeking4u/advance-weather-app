import React from 'react';
//require('dotenv').config();
const api = {
  key: process.env.REACT_APP_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

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
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className = "search-bar"
            placeholder = "Search City,Country"
          />
        </div>

        <div className="location-box">
          <div className = "location" >Goa, India</div>
          <div className = "date" >{dateBuilder(new Date())}</div>
        </div>

        <div className= "weather-box">
          <div className= "temp">15°C</div>
          <div className= "weather">Sunny</div>
        </div>

      </main>
    </div>
  );
}

export default App;
