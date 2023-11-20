import { useState } from 'react'
import './App.css'
import { useEffect } from 'react' 
import axios from 'axios' 
import CallWeather from './components/CallWeather'
 

function App() {
 const [coords, setCoords] = useState()
 const [weather, setWeather] = useState()
 const [temp, setTemp] = useState()
 const [isLoading, setisLoading] = useState(true)
  const APIKEY = '6f2d8942bea4b0979d97993e1054f98d'
  

  const success = position => {
    
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(obj)

  }
  useEffect(() => {
    setisLoading(true)
    
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  

  useEffect(() => {
    if(coords){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`

  axios.get(url)
  .then(res => {
    const celsius = (res.data.main.temp - 273.15).toFixed(1)
    const fahrenheit = (celsius * 9/5 + 32).toFixed(1)
    setTemp ({celsius, fahrenheit})
    setWeather(res.data)

  })
  .catch(err =>console.log(err))
  .finally(()=> setisLoading(false))
}  
  
  }, [coords])
  
  
  return (
    <div>
      {
        isLoading
        ?<h2 className='app--loader'>loading...</h2>
        :
      <CallWeather
      weather={weather}
      temp={temp}
      />
      }
    </div>
   
  )
}

export default App
