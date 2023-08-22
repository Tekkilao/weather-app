import "./searchBox.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import Error404 from "../error/error404";
import Weather from "../weather/weather";

export default function SearchBox() {

    const [city, setCity] = useState("");
    const [isShown, setIsShown] = useState("");
    const [searchClass, setSearchClass] = useState("container");
    const [weatherData, setWeatherData] = useState(null);

    
    const handleLocation = location => {
        setCity(location.target.value)
        
    }
    
    function handleWeather() {
        const APIKey = process.env.REACT_APP_APIKEY;

        if (city === "") return;
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === "404"){
                setIsShown(json.cod)
                setSearchClass("container-error")
                console.log(APIKey)
            }
            else {
                setIsShown(json.cod)
                setSearchClass("container-search")
                setWeatherData(json)
                console.log(APIKey)
                
            }
        })
    }


    function showWeather(condition) {
        if (condition === "404") {
            return <Error404 />;
        } else if (condition === 200) {
            return <Weather data={weatherData}/>;

        }
        return null; 
    }

    return (

        <div className={searchClass}>
        <div className='search-box'>
        <FontAwesomeIcon className="custom-icon" icon={faLocationDot}/>
        <input type="text" placeholder="Enter your location"
        value={city}
        onChange={handleLocation}
        />
        <button className="search-button" >
        <FontAwesomeIcon onClick={handleWeather} icon={faMagnifyingGlass}/>
        </button>
        </div>
            {showWeather(isShown)}

        
        </div>
    )

}