import React from "react";
import "./style-Showweather.css";
const ShowWeather = (props) => {
  return (
    <div>
      {props.country && (
        <p>
          Your Country :<span> {props.country}</span>
        </p>
      )}
      {props.city && (
        <p>
          Your City :<span> {props.city}</span>
        </p>
      )}
      {props.temp && (
        <p>
          Your Tempreature :<span> {props.temp}</span>
        </p>
      )}
      {props.humidity && (
        <p>
          Your Degree :<span> {props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p>
          Your Description :<span> {props.description}</span>
        </p>
      )}
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

export default ShowWeather;
