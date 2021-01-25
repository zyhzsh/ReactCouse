import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [weather, SetWeather] = useState(null);
  const [input, SetInput] = useState("");
  //Event
  const weatherinput = (e) => {
    SetInput(e.target.value);
  };
  const searchWeather=()=>{
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`
      )
      .then((data) => {
        SetWeather(data.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=London`
      )
      .then((data) => {
        SetWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherinput} type="text" />
            <button onClick={searchWeather}>Search</button>
          </div>
          <div className="weatheri-info">
            <h1>{weather.location.country}</h1>
            <h2>{weather.location.region}</h2>
            <div className="condition">
              <h3>{weather.current.condition.text}</h3>
              <img src={weather.current.condition.icon} alt="icon" />
              <h3>{weather.current.temp_c} C</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
