import React from 'react'
import { WeatherDate, WeatherIcon, WeatherInfo, WeatherInfoContainer, WeatherLocation, WeatherTemperature, WeatherType, WeatherTypeDescription } from './Weather.elements'
import Skycons from 'react-skycons'
const Weather = (props) => {

    const getDate = () => {
        props.getDate();
    }

    console.log(props.background)

    return (
        <>
            <WeatherInfoContainer>
                <WeatherLocation>
                    {props.weather.name}, {props.weather.sys.country}
                    <WeatherDate>
                        {props.date}
                    </WeatherDate>
                </WeatherLocation>
                <WeatherInfo>
                    <WeatherTemperature bg={props.background}>
                        {props.temp}°C
                    </WeatherTemperature>
                    <WeatherIcon>
                        <Skycons
                            color="white"
                            type={props.weatherIcon}
                            animate={true}
                            size={50}
                            resizeClear={true}
                            {...props.svgProps}
                        />
                    </WeatherIcon>
                    <WeatherType>
                        {props.weather.weather[0].main}
                        <WeatherTypeDescription>
                        {props.weather.weather[0].main === 'Clouds' ? props.weather.weather[0].description : ''}
                        </WeatherTypeDescription>
                    </WeatherType>
                </WeatherInfo>
            </WeatherInfoContainer>
        </>
    )
}

export default Weather
