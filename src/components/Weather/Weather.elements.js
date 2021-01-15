import styled from 'styled-components'

export const WeatherInfoContainer = styled.div`

`;

export const WeatherLocation = styled.div`
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
`;

export const WeatherDate = styled.div`
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    text-shadow: 1px 2px rgba(50, 50, 70, 0.5);
`;

export const WeatherInfo = styled.div`
    text-align: center;
    margin-bottom: 200px;
`;

export const WeatherTemperature = styled.div`
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;

    padding: 15px 25px;

    color: #FFF;
    font-size: 92px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
    text-align: center;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
`;

export const WeatherIcon = styled.div`
    text-align: center;
`;

export const WeatherType = styled.div`
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

export const WeatherTypeDescription = styled.div`
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    text-shadow: 1px 2px rgba(50, 50, 70, 0.5);
`;