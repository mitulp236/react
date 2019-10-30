import React,{useState} from 'react'

const Youtube = () => {  

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
//const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 5;



const [channel_id, setchannel_id] = useState('');
const [link, setlink] = useState([]);



var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=${result}`

   

    const on_value_change = (e) => {
        setchannel_id(e.target.value)
    }

    const fetch_youtube_api = () => {
        fetch(finalURL)
        .then(res => res.json())
        .then(resJson => {
            const data = resJson.items.map(item => "https://www.youtube.com/embed/"+item.id.videoId);
            setlink(data);
        })
    }

    const form_handler = (e) =>{
        e.preventDefault();
        fetch_youtube_api();

    }


    return (
        <div>
            <form>
                <div>
                <input type="text" onChange={on_value_change} value={channel_id} />
                <button onClick={form_handler} >Submit</button>
                </div> <br />

                {link.map((item,i) =>(
                    <div key={i}><iframe width="50" height="50" src={item} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                ))}

                
            </form>
        </div>

    )
}

export default Youtube
