import React,{useState} from 'react'
import Axios from 'axios';


const Signup = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const name_handler = (e) => {
        setname(e.target.value);
    }
    const email_handler = (e) => {
        setemail(e.target.value);
    }
    const password_handler = (e) => {
        setpassword(e.target.value);
    }
    const submit_handler = (e) => {
        e.preventDefault();
        const data = {
            "name":name,
            "email":email,
            "password":password
        }
        console.log(data);
        Axios.post("http://127.0.0.1:5000/signup",data)
            .then(res => {
                alert(res.data.message);
            })
            .catch(err => {
                console.log(err);
            })

    }



    return (
        <div>
            <form onSubmit={submit_handler}>
                <h1>Signup</h1>
                <input type="text"  placeholder="name" value={name} onChange={name_handler} />
                <input type="text"  placeholder="email" value={email} onChange={email_handler} />
                <input type="text"  placeholder="password" value={password} onChange={password_handler} />
                <button>signup</button>
            </form>
        </div>
    )
}

export default Signup
