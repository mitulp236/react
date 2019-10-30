import React from 'react'

const User_data = (name,avatar) => {
    return (
        <div >
            <h2>{name}</h2>
            <img src={avatar} alt="user_img" />
            
        </div>
    )
}

export default User_data
