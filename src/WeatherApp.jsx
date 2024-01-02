import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import {useState} from 'react'

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Islamabad',
        feelsLike: 12,
        temp: 12,
        tempMin: 13,
        tempMax: 28,
        humidity: 50,
        weather: 'haze'
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>My Weather App</h2>   
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/> 
        </div>
    )
}