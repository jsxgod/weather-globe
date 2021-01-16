
import React from 'react';
import {useState} from 'react';
import { SkyconsType } from 'react-skycons';
import { Search, Title, Weather, Globe } from './components';

const api = {
  key: 'b8b7f5d0fa269aa3f668fdacf2588b7c',
  baseUrl: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [focus, setFocus] = useState(null);
  const [markers, setMarkers] = useState([]);

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
          setFocus([result.coord.lat, result.coord.lon]);
          setMarkers([...markers, {
            "id": result.name,
            "city": result.name,
            "country": result.sys.country,
            "temp": result.main.temp+'°C',
            "weather": result.weather[0].main,
            "color": "red",
            "coordinates": [
              result.coord.lat,
              result.coord.lon
            ],
            "value": result.main.temp
          }]);
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
      return 'freezing';
    } else if (temperature > 0 && temperature < 10){
      return 'cold';
    } else if (temperature >= 10 && temperature < 20 ) {
      return 'moderate';
    } else if (temperature >= 20 && temperature < 25) {
      return 'warm';
    } else {
      return 'hot';
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
    <div className="container">
    <div className={'App'}>
      <Search query={query} onChange={setQuery} handleSearch={handleSearch}/>
      {(typeof weather.main != "undefined") ? (
        <Weather 
          weather={weather} 
          date={getDate()} 
          temp={Math.round(weather.main.temp)}
          weatherIcon={determineWeatherIcon(weather.weather[0])}
          background={determineWeatherCSS(weather.main.temp)}
        />
      ) 
        : (
          <Title />
        )
      }
    </div>
    <Globe focus={focus} markers={markers}/>
    </div>
  );
}

export default App;
