import React, { Component } from 'react'
import Axios from 'axios';

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      };
      this.form_handler = this.form_handler.bind(this);
    };

    form_handler(e){
        e.preventDefault();
        const data ={
            "email":this.refs.email.value,
            "password":this.refs.password.value
        }
        
        this.fetch_data(data);

    }

    fetch_data(data){
        Axios.post("http://127.0.0.1:5000/login",data)
            .then(res => alert(res.data.message))
            .catch(err => alert(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.form_handler}>
                <h1>Login</h1>
                <input type="text" ref="email"  placeholder="email" />
                <input type="text" ref="password" placeholder="password" />
                <button>Login</button>
                </form>
            </div>
        )
    }
}
