import React, { useEffect, useState } from 'react'
import { async } from 'q';
import User_data from './Component/User_data';

const App = () => {

  const [username, setusername] = useState('mitulp236');
  const [query, setquery] = useState('');
  const [name, setname] = useState('');
  const [avatar, setavatar] = useState('');

  useEffect(() => {
    fetch_user(username);
  },[query]);

  const fetch_user = async (USERNAME) => {
    const URL = `https://api.github.com/users/${USERNAME}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setname(data.name);
    setavatar(data.avatar_url)
  }

  const on_keystroke = (e) => {
    setusername(e.target.value);
  }

  const form_handler = (e) => {
    e.preventDefault();
    setquery(username);

  }

  return (
    <div className="App">
        <form onSubmit={form_handler}>
            <input type="text" value={username} onChange={on_keystroke} />
            <button>Click</button>
            <hr />
            <h2>{name}</h2>
            <img src={avatar} alt="user_img" />
            
        </form> 
    </div>
  )
}

export default App
