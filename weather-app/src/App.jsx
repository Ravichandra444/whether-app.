import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const checkWeather = () => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    setWeather({
      city: city,
      temperature: 28,
      condition: "Sunny",
      humidity: 60,
      wind: 12,
    });
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🌤️ Weather App</h1>
        <p>Check the weather of your city</p>

        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={checkWeather}>Search</button>
        </div>

        {weather !== null && (
          <div className="weather-info">
            <h2>{weather.city}</h2>
            <div className="icon">☀️</div>
            <h1>{weather.temperature}°C</h1>
            <h3>{weather.condition}</h3>

            <div className="details">
              <div>
                <h3>💧 {weather.humidity}%</h3>
                <p>Humidity</p>
              </div>

              <div>
                <h3>💨 {weather.wind} km/h</h3>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;