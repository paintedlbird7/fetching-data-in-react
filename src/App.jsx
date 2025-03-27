// src/App.jsx
import { useState, useEffect } from 'react';
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState(null); // ✅ Define weather state

  const fetchData = async (city) => {
    try {
      const data = await weatherService.show(city);
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState); // ✅ Update state correctly
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  console.log('State:', weather); // ✅ Log state correctly

  // src/App.jsx
  // useEffect(() => {

  // }, []); // An empty dependency array means this runs once after the initial render
// src/App.jsx
useEffect(() => {

  // Define a fetch function:
  const fetchDefaultData = async () => {
    const data = await weatherService.show('New York');
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  // Call the fetch function when the page loads:
  fetchDefaultData();
}, []);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />


      {/* ✅ Check if weather exists before rendering */}
      {/* {weather && (
        <section>
          <h2>Weather in {weather.location}</h2>
          <p>Temperature: {weather.temperature}°F</p>
          <p>Condition: {weather.condition}</p>
        </section>
      )} */}
    </main>
  );
};

export default App;


