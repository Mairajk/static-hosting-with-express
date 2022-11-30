import axios from "axios"

const Weather = () => {

    const getWeather = () => {

        axios.get('http://localhost:5001/weather')
            .then(response => {
                // handle success
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className="weather">
            Hello
            <button onClick={getWeather}>Press</button>
        </div>
    )
}



export default Weather;