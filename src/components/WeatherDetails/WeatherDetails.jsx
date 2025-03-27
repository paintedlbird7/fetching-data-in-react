// src/components/WeatherDetails/WeatherDetails.jsx

const WeatherDetails = (props) => {
    console.log('WeatherDetails props:', props);
  
    // ✅ Add a conditional check to prevent errors
    if (!props.weather) {
      return <p>No weather data available. Search for a city!</p>;
    }
  
    return (
      <section>
        <h2>Weather Details</h2>
        <p>Location: {props.weather.location}</p>
        <p>Temperature: {props.weather.temperature}°F</p>
        <p>Condition: {props.weather.condition}</p>
      </section>
    );
  };
  
  export default WeatherDetails;
  
  