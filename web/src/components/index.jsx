import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/weather")
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
        console.log("weatherData : ", weatherData);
      })

      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  return (
    <div className="weather">
      {weatherData ? <h1> {weatherData.humidity} </h1> : null}
    </div>
  );
};

export default Weather;
