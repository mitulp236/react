import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import Navbar from './Navbar';
import Loader from './Loader';
import {NavLink} from 'react-router-dom';
import swal from 'sweetalert';




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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MdSignUpgnUp() {
  const classes = useStyles();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const onchange_fname_field = (e) => {
    setfname(e.target.value);
  }
  const onchange_lname_field = (e) => {
    setlname(e.target.value);
  }
  const onchange_email_field = (e) => {
    setemail(e.target.value);
  }
  const onchange_mobile_field = (e) => {
    setmobile(e.target.value);
  }
  const onchange_password_field = (e) => {
    setpassword(e.target.value);
  }

  const signup_form_handler = (e) => {
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
          Sign up
        </Typography>
        <form onSubmit={signup_form_handler} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value={fname}
                onChange={onchange_fname_field}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={lname}
                onChange={onchange_lname_field}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                onChange={onchange_email_field}
                value={email}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                value={mobile}
                onChange={onchange_mobile_field}
                label="Mobile"
                name="mobile"
                autoComplete="mobile"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                onChange={onchange_password_field}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink className="nav-link" to='/login/'>Already have an account? Sign in</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
    </div>

  );
  }
}
