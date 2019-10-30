import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"mitulp236",
       name:'',
       avatar:''
    };
    this.fetchGithubData = this.fetchGithubData.bind(this);
    this.updator = this.updator.bind(this);
  };

  fetchGithubData(username){
    const api = "https://api.github.com/users";
    const url = `${api}/${username}`
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
      this.setState({
        username:data.login,
        name:data.name,
        avatar:data.avatar_url
      });
    })
    .catch((err) => console.log("problem in api fetching method !"))
  }

  componentDidMount(){
    this.fetchGithubData(this.state.username);
  }
  
  updator(){
    let new_username = this.refs.username.value;
    this.setState({
      username:new_username
  
    });
  }
  
  render() {
    return (
      <div>
        <div>
          <br />
          <input type="text" name="username" ref="username" placeholder="username"  />
          <button onClick={this.updator}>Get DATA</button>
        </div> <br />

        <div id="profile">
            <img src={this.state.avatar}></img>
            <h4>{this.state.name}</h4>
            <h4>{this.state.username}</h4>
            
        </div>
        
      </div>
    )
  }
}
