import React, { useState } from "react";
import Sidebar from "./Sidebar";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    // city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  const [cityvalue, setCityvalue] = useState("");
  const [newcity, setNewcity] = useState("Delhi");

  function updateCity(event) {
    setCityvalue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (cityvalue.length === 0) {
      alert("please enter a city name");
    }
    setNewcity(cityvalue);
  }

  return (
    <div className="Weather">
      <h1>🌏 Climate Cloud</h1>

      <div className="content">
        <div className="main">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="city"
              id="city-input"
              placeholder="Enter a city name"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
            <button className="search">
              🔍
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="locate" id="current-location">
              📍
            </button>
          </form>

          <div className="temperature-wrapper">
            <div className="temperature">
              <h2 id="city-name">{newcity}</h2>

              <div className="overview">
                <img
                  className="icon"
                  id="today-icon"
                  src={weatherData.imgUrl}
                  alt="current weather icon"
                />
                <h2>
                  <span id="current-temperature">
                    {" "}
                    {weatherData.temperature}
                  </span>
                  <span id="units">
                    <a href="./" id="celcius">
                      °C{" "}
                    </a>
                    |
                    <a href="./" id="fahrenheit">
                      F
                    </a>
                  </span>

                  <br />
                  <span id="description">{weatherData.description}</span>
                </h2>
              </div>

              <h4 id="date-time">{weatherData.date}</h4>
            </div>

            <div className="extra-info">
              <div className="humidity">
                <p>
                  Humidity : <span id="humidity">{weatherData.humidity}</span> %
                </p>
              </div>

              <div className="wind">
                <p>
                  Wind : <span id="wind">{weatherData.wind}</span> km/h
                </p>
              </div>
            </div>
          </div>

          <div className="weather-forecast"></div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
