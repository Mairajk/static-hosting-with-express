
import './index.css';

import axios from "axios";
import moment from "moment";

import { useEffect, useState } from "react";


let baseURL = '';
if (window.location.href.split(':')[0] === 'http') {
  baseURL = 'http://localhost:5001'
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  const getWeather = (e) => {
    e.preventDefault();

    axios
      .get(`${baseURL}/weather/${cityName}`)
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
        console.log("weatherData : ", weatherData);
      })

      .catch((err) => {
        console.log("error: " + err);
      });

  };

  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/weather/${cityName}`)
  //     .then((response) => {
  //       console.log(response);
  //       setWeatherData(response.data);
  //       console.log("weatherData : ", weatherData);
  //     })

  //     .catch((err) => {
  //       console.log("error: " + err);
  //     });
  // }, []);

  return (
    <div className="weather">

      <h1>Weather</h1>

      <form action="" onSubmit={getWeather}>
        <input
          type="text"
          required
          onChange={(e) => setCityName(e.target.value)}
          autoFocus
        />
      </form>

      {(weatherData) ?
        <div className="weatherData">

          <h3 className='city'>{weatherData.city}</h3>

          <p className=" date"> {moment(weatherData.serverTime).format('MMMM Do YYYY')} </p>
          <p className=" time"> {moment(weatherData.serverTime).format(' hh:mm a')} </p>
          <p className="items humidity"> Humidity : {weatherData.humidity} </p>
          <p className="items temp"> Temprature : {weatherData.temp} </p>
          <p className="items minTemp"> Min : {weatherData.minTemp} </p>
          <p className="items maxTemp"> Max : {weatherData.maxTemp} </p>

        </div>
        : null}
    </div>
  );
};

export default Weather;
