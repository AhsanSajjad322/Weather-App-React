import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const HOT_URL = 'https://images.unsplash.com/photo-1580687774725-4e23db308efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
    const COLD_URL = 'https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D';
    const RAIN_URL = 'https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhaW58ZW58MHx8MHx8fDA%3D';
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={'span'}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>
    )
}