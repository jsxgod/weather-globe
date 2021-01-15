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
`;

export const WeatherTemperature = styled.div`
    position: relative;
    display: inline-block;
    margin: 30px auto;
    //background-color: rgba(255, 255, 255, 0.2);
    background: linear-gradient(${({bg})=>(bg === 'freezing' ? freezingBg : bg === 'cold' ? coldBg : bg === 'moderate' ? moderateBg : bg === 'warm' ? warmBg : bg === 'hot' ? hotBg : 'rgba(255, 255, 255, 0.2)')});
    border-radius: 16px;

    padding: 15px 25px;

    color: #FFF;
    font-size: 78px;
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

const freezingBg = 'to top, rgba(2,0,36,1) 0%, rgb(14, 192, 192) 35%, rgb(176, 200, 201) 100%';

const coldBg = 'to bottom left, #FFFDE4, #517aa3';

const moderateBg = 'to bottom left, #FFFDE4, #005AA7';

const warmBg = 'to bottom, #fdfb8e, #fdbc30';

const hotBg = 'to top, #F37335, #FDC830';