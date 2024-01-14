import './App.css';
import axios from 'axios';
import React,{useState} from 'react';

function App() {
  const[data, setData]= useState ({})
  const[location, setLocation]= useState ('')
  
  
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fe6ca5b60b161980dd7bd15388dd3f23&lang={sp}`

  
  const searchLocation = (event)=>{
    if(event.key=== 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return(
      <main className="app">
        <div className="search">
          <input 
          type="text"
          value={location} 
          onChange={event =>setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          />
        </div>
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className='bottom'>
            <div className="sensacion">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Sensación Térmica</p>
            </div>
            <div className="humedad">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humedad</p>
            </div>
            <div className="viento">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
              <p>Viento</p>
            </div>
          </div>
        </div>
      </main>
    );
}

export default App;
