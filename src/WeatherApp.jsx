import SearchBox from './searchBox'
import InfoBox from './infoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"coimbatore",
        feelsLike: "24.78",
        humidity: 90,
        wind: 9.0,
        temp: 23.88,
        tempMax: 25.88,
        weather: "broken clouds"
    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

    )
}