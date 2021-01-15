import React from 'react'
import { WeatherDate, WeatherIcon, WeatherInfo, WeatherInfoContainer, WeatherLocation, WeatherTemperature, WeatherType, WeatherTypeDescription } from './Weather.elements'

const Weather = () => {
    return (
        <>
            <WeatherInfoContainer>
                <WeatherLocation>
                    <WeatherDate>

                    </WeatherDate>
                </WeatherLocation>
                <WeatherInfo>
                    <WeatherTemperature>
                        2 C
                    </WeatherTemperature>
                    <WeatherIcon>
                        ikonka
                    </WeatherIcon>
                    <WeatherType>
                        <WeatherTypeDescription>
                            description
                        </WeatherTypeDescription>
                    </WeatherType>
                </WeatherInfo>
            </WeatherInfoContainer>
        </>
    )
}

export default Weather
