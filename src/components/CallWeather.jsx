import { useState } from "react"
import'./styles/callweather.css'

const CallWeather = ({weather,  temp}) => {
  const [isCelsius, setisCelsius] = useState(true)
  const handlechange = () => setisCelsius(!isCelsius)
  console.log(weather);
  return (
   <article className="weather">
    <h1 className="weather__title">weather app</h1>
    <h2 className="weather__location">{weather?.name},{weather?.sys.country}</h2>
    <section className="weather__body">
      <header>
        <img src="/public/62255548-azul-de-dibujos-animados-nube-con-la-cara-sonriente-feliz-ilustración-vectorial.jpg" alt="" />
      </header>
      <article>
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span>wind speed<span></span>{weather?.wind.speed}m/s</span></li>
          <li><span>clouds<span></span>{weather?.clouds.all}%</span></li>
          <li><span>pressure<span></span>{weather?.main.pressure}hpa</span></li>
        </ul>
      </article>
    </section>
    <h2>{isCelsius ? `${temp?.celsius}°C`:`${temp?.fahrenheit}°F`}</h2>
    <button onClick={handlechange}>change to {isCelsius ? `°F`:`°C`}</button>
   </article>
  )
}

export default CallWeather