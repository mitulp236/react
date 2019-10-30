import React,{useState,useEffect} from 'react'

const Youtube = () => {

const [links, setlinks] = useState([]);
const [channel_id, setchannel_id] = useState('');
const [query, setquery] = useState('');

useEffect(() => {
    Youtube_fetch();
},[query]);

    
const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
// const channelID = 'UCoe2dDNs_EUc4YwO5A-URYA'
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=${result}`


    const Youtube_fetch = () => {
        if(channel_id === ""){
            return 0;
        }
        fetch(finalURL)
        .then((res) => res.json())
        .then((resJson) => {
           const all_links = resJson.items.map((item) => "https://www.youtube.com/embed/"+item.id.videoId) 
           setlinks(all_links);
        });
    }

    const update_channel_id = (e) =>{
        setchannel_id(e.target.value); 
    }

    const form_handler = (e) => {
        e.preventDefault();
        setquery(channel_id);
          
    }

  return (
    <div className="container" style={{textAlign:'center'}}>
      <h2>Hiii youtube</h2>
      <form>
        <input className="form-control" placeholder="Enter Channel ID"  typ="text" value={channel_id} onChange={update_channel_id} />
        <button className="btn btn-primary" style={{margin:10}} onClick={form_handler}>Submit</button>
      </form>
       <br/>

      {links.map((item,i) => {
      return <div className="jumbotron" key={i} style={{margin:10}}><hr /><iframe width="560" height="315" src={item} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      })}
      
    </div>
  )
}

export default Youtube
