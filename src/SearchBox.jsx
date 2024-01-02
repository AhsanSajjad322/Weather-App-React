import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

export default function SearchBox({ updateInfo}){
    let [city, setCity] = useState('');
    let [error, setError] = useState(false)
    let API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    let API_KEY = '55783b22ed23e53568488eaf52f9fe8f';

    let getWeatherInfo = async ()=>{
        try{

            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JSONresponce = await responce.json();
            let result = {
                city: city,
                temp: JSONresponce.main.temp,
                tempMin: JSONresponce.main.temp_min,
                tempMax: JSONresponce.main.temp_max,
                humidity: JSONresponce.main.humidity,
                feelsLike: JSONresponce.main.feels_like,
                weather: JSONresponce.weather[0].description
            }
            console.log(result);
            return result;
        } catch(error){
            throw error;
        }
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false)
            setCity('');
        } catch(error){
            setError(true)
        }
    }

    return (
        <div className='searchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                <br /><br />
                {error && <p style={{color: "red"}}>No such place exist in our API</p>}
            </form>
        </div>
    )
}