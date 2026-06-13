import { useState } from 'react'
import './App.css'
import SearchBox from './SearchBox'
import WeatherCard from './WeatherCard'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  async function load() {
    if (city === '') {
      setError('What city, huh?')
      return
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=683a6d5b29a7b39566511fc43c22b7b7&units=metric`)
      const data = await response.json()

      if (data.cod === '404') {
        setError('No such city, my dude')
        setWeather(null)
      } else {
        setWeather(data)
        setError(null)
      }
    } catch {
      setError('Sum wrong my nibba')
    }
  }
  return (
    <section className="searcher">
      <SearchBox
        city={city}
        onCityChange={setCity}
        onSearch={load}
      />
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </section>
  )
}

export default App