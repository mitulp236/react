import React from 'react'
import MdSignIn from './Signin'

const Dashboard = ({email,password}) => {
    console.log("hi");
    
    return (
        <div>
            Hii i am dashboard ! 
            <h2>My email is {email}</h2>
            <h2>My password is {password}</h2>
            
        </div>
    )
}

export default Dashboard
