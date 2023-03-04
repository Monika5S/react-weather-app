import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-weather-data">
        <div className="temperature">
          <h2>{props.data.cityname}</h2>

          <div className="overview">
            <img
              className="icon"
              src={props.data.icon}
              alt={props.data.description}
            />
            <h2>
              <WeatherTemperature celsius={props.data.temperature} />
              {props.data.description}
            </h2>
          </div>

          <FormattedDate date={props.data.date} />
        </div>

        <div className="extra-info">
          <p>Feels Like : {props.data.feelsLike}°</p>
          <p>Humidity : {props.data.humidity}%</p>
          <p>Wind : {props.data.windspeed}km/h</p>
        </div>
      </div>
      <div className="weather-forecast"></div>{" "}
    </div>
  );
}
