import React, {useEffect,useState} from 'react'

const App = () => {
  

  const [item, setitem] = useState([]);
  const [text, settext] = useState('');
  const [query, setquery] = useState('');

  const ontextchange = (e) => {
    settext(e.target.value);
  }
 
  const update_todo_list = (new_item) => {
    setitem([ ... item,{
      id:Date.now(),
      value:new_item
    }]);
  }

  const submit_handler = (e) => {
    e.preventDefault();
    setquery(text);

  }
  const on_add_btn = () => {
    if(text !==  ""){
      update_todo_list(text);
      settext("");
    }
    
  }



  return (
    <div>
        <form onSubmit={submit_handler}>
          <input type="text" value={text} onChange={ontextchange} />
          <button onClick={on_add_btn}>Add</button>

          <ul>
        {item.map(item => (
          <li key={item.id}>{item.value} </li>
        ))}
      </ul>
        </form>
    </div>
  )
}

export default App
