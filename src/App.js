
import React from 'react';
import {useState} from 'react';

const api = {
  key: 'b8b7f5d0fa269aa3f668fdacf2588b7c',
  baseUrl: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
          setWeather(result);
          setQuery('');

          console.log(result);
        });
    }
  }

  const getDate = () => {
    let date = new window.Date().toDateString()
    return `${date}`;
  }

  return (
    <div className={
      (typeof weather.main != "undefined") 
      ? (weather.main.temp > 16 
          ? 'App warm' 
          : 'App') 
      : 'App'}>
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          >

          </input>
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
                <div className="date">
                  {getDate()}
                </div>
              </div>
              <div className="weather-box">
                <div className="temperature">
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className="info">
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
          </div>) : ('')
        }
      </main>
    </div>
  );
}

export default App;
