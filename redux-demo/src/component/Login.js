import React,{useState} from 'react'
import Navbar from './Navbar';
import {useSelector,useDispatch} from 'react-redux'
import isLogged from '../actions'
import swal from 'sweetalert';
import Axios from 'axios';
import Loader from './Loader';


const Login = (props) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false);

    let isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    const form_handler = (e) => {
        e.preventDefault();
        setloading(true);
        const data ={
            "email":email,
            "password":password
          }
        login_api(data);
    }
    const login_api = (data) => {
        Axios.post("http://127.0.0.1:5000/login",data)
        .then(res => {
          if(res.data.danzer === 'false'){
            // login successfull

            setloading(false);
            dispatch(isLogged());
            props.history.push('/dashboard/');
          }else{
            setloading(false);
            swal("Ooopsss!!!", res.data.message, "error");
            setpassword("");
          }   
        })    
        .catch(err => {
            setloading(false);
            alert(err);
            
        })
      }


    return (
        <div>
        <Navbar />
        <div className="container" style={{textAlign:'center'}}>
            <div className="form-group">
                <h2>React-Redux-Demo</h2><hr />
                <form onSubmit={form_handler}>

                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <input 
                                className="form-control" 
                                type="text" 
                                style={{margin:'10px'}}
                                placeholder="email"
                                onChange={e => setemail(e.target.value)}
                                value={email}
                                name="email" />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <input 
                                className="form-control" 
                                type="text" 
                                style={{margin:'10px'}}
                                placeholder="password"
                                onChange={e => setpassword(e.target.value)}
                                value={password}
                                name="password" />  
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                    <button className="btn btn-primary">Login</button>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Login
