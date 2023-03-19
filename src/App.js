import React, { Component } from "react";
import "./App.css";
import Enterinfo from "./Component/Enterinfo/Enterinfo";
import ShowWeather from "./Component/Showweather/Showweather";

const apiKey = "9ce4dfa047c86764b59500e04f57138e";
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {
  state = {
    temp: "",
    humidity: "",
    country: "",
    city: "",
    description: "",
    error: "",
  };
  handleRequest = async (e) => {
    e.preventDefault();
    const city = e.target[0].value;
    const country = e.target[1].value;
    let link = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`
    );
    let data = await link.json();
    if (city && country) {
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        country: data.sys.country,
        city: data.name,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temp: "",
        humidity: "",
        country: "",
        city: "",
        description: "",
        error: "Please Check Your Entry Data",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Enterinfo handleRequest={this.handleRequest} />
        <ShowWeather
          temp={this.state.temp}
          humidity={this.state.humidity}
          country={this.state.country}
          city={this.state.city}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
