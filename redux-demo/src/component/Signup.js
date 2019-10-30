import React,{useState} from 'react'
import Navbar from './Navbar';
import {useSelector,useDispatch} from 'react-redux'
import isLogged from '../actions'
import swal from 'sweetalert';
import Axios from 'axios';
import Loader from './Loader';



const Signup = (props) => {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setloading] = useState(false);
    

    const form_handler = (e) => {
        e.preventDefault();
        setloading(true);
        const data = {
        "fname":fname,
        "lname":lname,
        "email":email,
        "mobile":mobile,
        "password":password
        }
        registration(data);
    }
    const registration = (data) => {
        Axios.post("http://127.0.0.1:5000/signup",data)
        .then(res => {
            if(res.data.danzer === 'false'){
              setloading(false);
              swal("Good job!", res.data.message, "success");
              setemail('');
              setfname('');
              setlname('');
              setmobile('');
              setpassword('');
            }else{
              setloading(false);
              swal("Ooopsss!!!", res.data.message, "info");
            }   
        })
        .catch(err => {
            console.log(err);
        })
      }

    if(loading){
    return(
        <Loader />  
    );
    }else{

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
                                placeholder="first name"
                                onChange={e => setfname(e.target.value)}
                                value={fname}
                                name="fname" />
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
                                placeholder="last name"
                                onChange={e => setlname(e.target.value)}
                                value={lname}
                                name="lname" />
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
                                placeholder="mobile"
                                onChange={e => setmobile(e.target.value)}
                                value={mobile}
                                name="mobile" />
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

                    <button className="btn btn-primary">Signup</button>
                </form>
            </div>

        </div>
        </div>
    );
 }
}

export default Signup
