function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>Temp: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard