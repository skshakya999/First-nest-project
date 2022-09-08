import axios from 'axios'
import { useEffect, useState } from 'react'
import Head from 'next/head'


const weather = () => {
  const [city, setCity] = useState("Noida")
  const [time, setTime] = useState("")
  const [ampm , setAmpm] = useState("AM")
  const [temp, setTemp] = useState("")
  const [cityname, setCityname] = useState("")
  const [country, setcountry] = useState("")
  const [weathertype, setweathertype] = useState("")
  const [date_detail, setDate_detail] = useState("")

  const handleChange = (e) => {
    setCity(e.target.value)
  }
  useEffect(()=>{
    handleSubmit()
  },[])
  const handleSubmit = async () => {
    
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2356f7dd255e4a6de345cb180c027609`)
    console.log(data.data.weather[0].main)
    setweathertype(data.data.weather[0].main)
    setCityname(data.data.name)
    setcountry(data.data.sys.country)
    setTemp(((data.data.main.temp) - 273.15).toFixed(1))
    const date = new Date((data.data.dt) * 1000)
    const min = date.getMinutes()
    const hour = date.getHours()
    if(min < 10){
      min = "0"+min
    }
    if(hour >= 12){
      if(hour > 12)hour = hour - 12
      setAmpm("PM")
    } 
    if(hour < 10) hour= "0"+hour
    const time_data = hour + ":" +min
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   
    const date_data = days[date.getDay()] + " " +date.getDate()+","+" "+months[date.getMonth()]+" "+date.getFullYear()
    setDate_detail(date_data)
    setTime(time_data)


  }
  
  return (
    <>

      {/* api.openweathermap.org/data/2.5/weather?q=Noida&appid=2356f7dd255e4a6de345cb180c027609 */}

      <label htmlFor="city">City</label>
      <input type="text" value={city} id="city" onChange={handleChange} />
      <button onClick={() =>handleSubmit()}> Submit</button>
      <div className="mainBox">
        <div className="time-data">
          <div className="time-detail">
            <div className="date-time">
              <div className='time'>{time}<span className='am-pm'>{ampm}</span></div>
              <div className='day-year'>{date_detail}</div>
            </div>
            <div className="temp">
              {temp} &deg;C
            </div>

          </div>
          <div className='city-data'>
            <div className="city-detail">
              <div className="city">{cityname}</div>
              <div className="country">{country}</div>
            </div>
            <div className="weather-type">{weathertype}</div>

          </div>

        </div>
        <div className="weather-data">
          <div>
            Wind Speed
          </div>
        </div>
      </div>
    </>
  )
}

export default weather