
import React from 'react';
import {useState} from 'react';
import Skycons, { SkyconsType } from 'react-skycons';
import { Search, Title } from './components';

const api = {
  key: 'b8b7f5d0fa269aa3f668fdacf2588b7c',
  baseUrl: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const svgProps = {
    style: { backgroundColor: '' },
  }
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const handleSearch = (keyPressed) => {
    if (keyPressed === "Enter"){
      if(query){
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response =>{
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response;
      })
      .then(res => res.json())
      .then(result => {
          setWeather(result);
          setQuery('');
        })
      .catch(() => {
        window.alert("Location not found. Check for spelling errors.");
      })
      } else {
        setWeather({});
        setQuery('');
      }
    }
  };

  const determineWeatherCSS = (temperature) => {
    if (temperature <= 0) {
      return 'App freezing';
    } else if (temperature > 0 && temperature < 18 ) {
      return 'App moderate'
    } else if (temperature >= 18 && temperature < 25) {
      return 'App warm';
    } else {
      return 'App hot';
    }
  }

  const determineWeatherIcon = (weather) => {
    const weatherType = weather.main;
    const weatherDesc = weather.description;

    if (weatherType === 'Thunderstorm'){
      return SkyconsType.RAIN;
    }
    if (weatherType === 'Drizzle'){
      return SkyconsType.SLEET;
    }
    if (weatherType === 'Rain'){
      return SkyconsType.RAIN;
    }
    if (weatherType === 'Snow'){
      return SkyconsType.SNOW;
    }
    if (weatherType === 'Clear'){
      return SkyconsType.CLEAR_DAY;
    }
    if (weatherType === 'Clouds'){
      if (weatherDesc === 'few clouds' || weatherDesc === 'scattered clouds'){
        return SkyconsType.PARTLY_CLOUDY_DAY;
      } else {
        return SkyconsType.CLOUDY;
      }
    }
    if (weatherType === 'Fog' || weatherType ==='Mist'){
      return SkyconsType.FOG;
    } else {
      return SkyconsType.PARTLY_CLOUDY_DAY;
    }
  }

  const getDate = () => {
    let date = new window.Date().toDateString()
    return `${date}`;
  };

  return (
    <>
    <div className={
      (typeof weather.main != "undefined") 
      ? (determineWeatherCSS(weather.main.temp)) 
      : 'App'}>
        <Search query={query} onChange={setQuery} handleSearch={handleSearch}/>
        {(typeof weather.main != "undefined") ? (
          <div />
        ) 
          : (
            <Title />
          )
        }
    </div>
    </>
  );
}

export default App;
