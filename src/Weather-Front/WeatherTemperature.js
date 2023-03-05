import React, { useState } from "react";

export default function WeatherTemperature(props) {
  // const [unit, setUnit] = useState("celsius");

  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  // }

  // function fahrenheit() {
  //   return Math.round((props.celsius * 9) / 5 + 32);
  // }

  // if (unit === "celsius") {
  return (
    <div className="WeatherTemperature">
      {props.celsius}
      <span className="units">
        °C
        {/* |
        <a href="./" onClick={showFahrenheit}>
          {" "}
          F
        </a> */}
      </span>
    </div>
  );
  // } else {
  //   return (
  //     <div className="WeatherTemperature">
  //       {fahrenheit()}
  //       <span className="units">
  //         <a href="./" onClick={showCelsius}>
  //           °C{" "}
  //         </a>
  //         | F
  //       </span>
  //     </div>
  //   );
  // }
}
