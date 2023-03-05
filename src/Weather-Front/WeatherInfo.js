import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-weather-data">
        <div className="temperature">
          <h2>{props.data.cityname}</h2>

          <div className="overview">
            <WeatherIcon code={props.data.icon} size={100} />
            <h2>
              <WeatherTemperature celsius={props.data.temperature} />
              {props.data.description}
            </h2>
          </div>

          <FormattedDate date={props.data.date} />
        </div>

        <div className="extra-info">
          <p>Humidity : {props.data.humidity}%</p>
          <p>Wind : {props.data.windspeed}km/h</p>
        </div>
      </div>
    </div>
  );
}
