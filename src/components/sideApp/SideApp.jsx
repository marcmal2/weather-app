import React, {useState} from 'react'
import './sideApp.css'
import { FaSearchLocation } from 'react-icons/fa';
import axios from 'axios'

const SideApp = () => {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
 
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=981adc669795029eed081f4723c3bb3e`

    const handleClick = () => {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    };

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }



  return (
    <>
    <div className='humidity'>
    Humidity
    </div>
    <div className='wind'>
    Wind
    </div>
    <div className='wind_value'>
    {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
    </div>
    <div className='humidity_value'>
    {data.main ? <p>{data.main.humidity}%</p> : null}
    </div>
    <div className='emoji'>
    {data.weather ? <img src={require(`../../assets/${data.weather[0].icon}.png`)} alt="hello"></img> : null}
    {data.weather ? <p className='desc' > {data.weather[0].main.toLowerCase()} </p> : null}
      </div>
    <div className='cityname'>
    {data.name}
    </div>
    <div className='temperature'>
    {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
    </div>
    <div className='searchbar'>
            Enter a city name : 
            <b> </b>
            <input type="text" name ="userinput" value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter City' onKeyPress={searchLocation}/>
        <button onClick={handleClick} type="submit"><FaSearchLocation/></button>  
    </div>
    </>
  )
}

export default SideApp
