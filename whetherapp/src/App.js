import React, { useEffect,useState } from 'react'
import { async } from 'q'

const App = () => {

  const [city, setcity] = useState('London');
  const [temp, settemp] = useState('')
  const [search, setsearch] = useState('')

  useEffect(() => {
    get_data(city);
  },[search]);

  const get_data =  async (CITY_NAME) => {
    const API_key = "2177d9e7411605c706737b0248474646"
    const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_key}&q=${CITY_NAME}`;

    const response = await fetch(URL);
    const data = await response.json();
    if(data.cod === 200){
      settemp(data.main.temp);
    }else{
      settemp('City not found! ');
    }
    
    
  }

  const update_city = (e) => {
    setcity(e.target.value);
  }

  const submit_form = (e) => {
    e.preventDefault();
    setsearch(city);

  }
        
  return (
    <div>

      <form onSubmit={submit_form}>
        <input type="text" name="city" value={city} onChange={update_city} />
        <button>Click</button>
      </form>
      <h2>{temp}</h2>
    </div>
  )
}

export default App
