import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false,
         userId:'',
         email:'',
         picture:''
      };
    };
    
    componentClicked = () => {
        console.log("clicked ! ")
    }
    responseFacebook = (res) => {
        console.log(res);
    }

    render() {
        let fbcontent;

        if(this.state.isLoggedIn){
            fbcontent = null;
        }else{
            fbcontent = (
                <FacebookLogin
                appId="3212417285499661"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
              
            );
        }
        return (
            <div>
                {fbcontent}
            </div>
        )
    }
}
