
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import "./weatherDetails.css"


export default function weatherDetails({data}) {
    const humidity = data.main.humidity;
    const speed = parseInt(data.wind.speed);
    return (
        <div className="weather-details">
            <div className="humidity">
                <FontAwesomeIcon className="weather-icon" icon={faWater} />
                    <div className="text">
                        <span>{humidity}%</span>
                        <p>Humidity</p>
                    </div>
            </div>
            <div className="wind">
                <FontAwesomeIcon className="weather-icon" icon={faWind} />
                    <div className="text">
                    <span>{speed}Km/h</span>
                    <p>Wind Speed</p>
                    </div>
            </div>
        </div>
    )
}