import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';  
import './searchbox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){

     

    let[city,setcity]=useState("");
    let[error,seterror]=useState(false);
    const Api_Url="https://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_API_KEY;
    const APi_Key=apiKey;

    let getWeatherInfo=async()=>{
    try{
     let response=   await fetch(`${Api_Url}?q=${city}&appid=${APi_Key}&units=metric`);
     let jsonresponce=await response.json()
     console.log(jsonresponce);
     let result={
        city:city,
        temp:jsonresponce.main.temp,
        temMin:jsonresponce.main.temp_min,
        tempMax:jsonresponce.main.temp_max,
        humidity:jsonresponce.main.humidity,
        feelsLike:jsonresponce.main.feels_like,
        weather:jsonresponce.weather[0].description

     }
     console.log(result)
     return result;
    }catch(err){
        throw(err)
    }
    }
    

    let handleChange=(event)=>{
        setcity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city)
        setcity("")
      let newInfo= await getWeatherInfo();
       updateInfo(newInfo)
       
        }catch(err){
            seterror(true)
        }
    }
    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="standard" value={city} onChange={handleChange} required/><br></br><br></br>
            <Button variant="contained" type='submit'>
                 Search
            </Button>
            {error && <p style={{color:"red"}}>No such place exists</p>} 
            </form>
        </div>
    )
}