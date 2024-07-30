import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function infoBox({info}){
    const init_Image="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const Hot_Url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Rain_Url="https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHJhaW4lMjB1bWJyZWxsYXxlbnwwfHwwfHx8MA%3D%3D";
    const cold_Url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
 
    return (
        <div className="infoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? Rain_Url :info.temp>20 ? Hot_Url :cold_Url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{info.humidity>80 
                    ? <ThunderstormIcon /> 
                    :info.temp>20 
                    ?  <WbSunnyIcon/>
                    :<AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"component={"span"}>
                       
                        <p>Humidity={info.humidity}</p>
                        <p>Temprature={info.temp}&deg;C</p>
                        <p>Min-Temp={info.temMin}&deg;C</p>
                        <p>Max-temp={info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>
                    
                    </Typography>
                </CardContent>
                
                </Card>
            </div>

        </div>
    )
}