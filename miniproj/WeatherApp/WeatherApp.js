import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleChangedCity = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    if (!city) {
      alert("Enter city name");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f674d6f89a39676e307a0f47ee571f08&units=metric`,
      );

      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("City not found or API issue");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the city"
        value={city}
        onChange={handleChangedCity}
      />

      <button onClick={fetchWeather}>Check</button>

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
