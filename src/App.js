import React from 'react';
//require('dotenv').config();
const api = {
  key: process.env.REACT_APP_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
