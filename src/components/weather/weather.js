import "./weather.css"
import WeatherDetails from "../weatherDetails/weatherDetails"

export default function weather({data}) {

    if (!data) {
        return null
    }

    const typeWeather = data.weather[0].main.toLowerCase()

    let WeatherImage;
    try {
        WeatherImage = require(`../images/${typeWeather}.png`);
    } catch (error) {
        WeatherImage = ""
    }

    const temperature = parseInt(data.main.temp);
    const description = data.weather[0].description;


    return (
        <div className="weather-box">
            { <img src={WeatherImage} alt="weather"/>}
            <p className="temperature">{temperature}<span>°C</span></p>
            <p className="description">{description}</p>
            <WeatherDetails data={data}/>
        </div>
        
    )
}