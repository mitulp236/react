import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';
import swal from 'sweetalert';
import Loader from './Loader';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MdSignIn(props) {
  const classes = useStyles();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const onchange_email_field = (e) => {
    setemail(e.target.value);
  }
  const onchange_password_field = (e) => {
    setpassword(e.target.value);
  }

  const login_form_handler = (e) => {
    e.preventDefault();
    setloading(true);
    const data ={
      "email":email,
      "password":password
    }
    login(data);
  }
  const login = (data) => {
    Axios.post("http://127.0.0.1:5000/login",data)
    .then(res => {
      if(res.data.danzer === 'false'){
        setloading(false);
        props.history.push("/dashboard/")
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


  if(loading){
    return(<Loader />);
  }else{
      return (
        <div>
        <Navbar />
        <Container component="main" maxWidth="xs">
          
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={login_form_handler} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onchange_email_field}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={onchange_password_field}
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink className="nav-link" to='/signup/'>Don't have an account? Sign Up</NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
        
        </Container>
        </div>
      );
    
  }
}