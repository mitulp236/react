import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import isLogged from '../actions'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {

    let isLoggedIn = useSelector(state => state.isLoggedIn);

    if(isLoggedIn){
        return (
            <div>
                i'm dashboard
            </div>
        )
    }else{
        return <Redirect to='/login/' />
        
    }

    
}

export default Dashboard
