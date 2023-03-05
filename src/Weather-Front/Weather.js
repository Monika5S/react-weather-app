import React, { useState } from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setLoaded(true);
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      cityname: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length === 0) {
      alert("Enter city name");
    } else {
      search();
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showPositionWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function currentLocationTemperature() {
    navigator.geolocation.getCurrentPosition(showPositionWeather);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            className="city"
            placeholder="Enter a city name"
            autoComplete="off"
            autoFocus="on"
            onChange={updateCity}
          />
          <button className="search" title="search" type="submit">
            🔍
          </button>
          <button
            className="locate"
            title="current temperature"
            onClick={currentLocationTemperature}
          >
            📍
          </button>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather loader">
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
}
