import error_img from "../images/404.png";
import "./error404.css"

export default function error404() {
    return (
        <div className="not-found">
            <img src={error_img}/>
            <p>Oops! Invalid location!</p>
        </div>
    )
}
