import React, { useState } from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setLoaded(true);
    setWeatherData({
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
    let id = "e830c41cfe2d651a12717840a22adf28";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=${unit}`;
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
          <button className="search" title="search">
            🔍
          </button>
          <button className="locate" title="current temperature">
            📍
          </button>
        </form>

        <WeatherInfo data={weatherData} />
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
