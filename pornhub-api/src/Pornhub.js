import React from 'react'
// var unirest = require("unirest");

const Pornhub = () => {


    const btn_handle = () =>{
        fetch("https://api.redtube.com/?data=redtube.Videos.getDeletedVideos&output=json&page=3")
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson);
        })
    }

    

    return (
        <div>
            <button onClick={btn_handle}>ok</button>
        </div>
    )
}

export default Pornhub
