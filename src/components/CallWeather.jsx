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
    <hr  className="line"/>
    <section className="weather__body">
      <header>
        <img src="https://cdn.urbantecno.com/urbantecno/2022/07/Con-esta-app-podras-conocer-en-tiempo-real-el-estado-del-clima.jpg" alt="" />
      </header>
      <article>
        <h3 className="weater__des">"{weather?.weather[0].description}"</h3>
        <ul>
          <li className="weater__list"><span>wind speed<span></span>{weather?.wind.speed}m/s</span></li>
          <li className="weater__list"><span>clouds<span></span>{weather?.clouds.all}%</span></li>
          <li className="weater__list"><span>pressure<span></span>{weather?.main.pressure}hpa</span></li>
        </ul>
      </article>
    </section>
    <h2 className="weater__temp">{isCelsius ? `${temp?.celsius}°C`:`${temp?.fahrenheit}°F`}</h2>
    <section className="weater__button">
    <button  className="weater__btn" onClick={handlechange}>change to {isCelsius ? `°F`:`°C`}</button>
    </section>
   </article>
  )
}

export default CallWeather