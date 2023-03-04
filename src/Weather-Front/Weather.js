import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setLoaded(true);
    setWeatherData({
      cityname: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      // date:,
      feelsLike: Math.round(response.data.main.feels_like),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length === 0) {
      alert("Enter city name");
    } else {
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <h1>🌏 Climate Cloud</h1>

        <div className="content">
          <div className="main">
            <form className="search-bar" onSubmit={handleSubmit}>
              <input
                type="text"
                className="city"
                placeholder="Enter a city name"
                autoComplete="off"
                autoFocus="on"
                onChange={updateCity}
              />
              <button className="search" title="search">
                🔍
              </button>
              <button className="locate" title="current temperature">
                📍
              </button>
            </form>
            <div className="city-weather-data">
              <div className="temperature">
                <h2>{weatherData.cityname}</h2>

                <div className="overview">
                  <img
                    className="icon"
                    src={weatherData.icon}
                    alt={weatherData.description}
                  />
                  <h2>
                    {weatherData.temperature}
                    <span class="units">
                      <a href="./">°C </a>|<a href="./"> F</a>
                    </span>
                    <br />
                    {weatherData.description}
                  </h2>
                </div>

                <h4 class="mt-2">date-here</h4>
              </div>

              <div className="extra-info">
                <p>Feels Like : {weatherData.feelsLike}°</p>
                <p>Humidity : {weatherData.humidity}%</p>
                <p>Wind : {weatherData.windspeed}km/h</p>
              </div>
            </div>
            <div className="weather-forecast"></div>{" "}
          </div>
          <Sidebar />
        </div>
      </div>
    );
  } else {
    let id = "e830c41cfe2d651a12717840a22adf28";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=${unit}`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
