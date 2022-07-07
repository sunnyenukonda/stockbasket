import Navbar from '../components/Navbar/Nonavbar';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {  Link } from "react-router-dom";
import React, { useContext, createContext, useEffect, useState } from "react";
import Axios from 'axios';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

function Register(props) {
  const { classes, setToken } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid]= useState(false);
  const [inValidText, setInValidText]= useState('');


  const register = (props) =>{
    const { classes, setToken } = props;
    let textPattern = '^[a-zA-Z]*$';
    let emailPattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!firstName.match(textPattern)){
      setInValidText('Invalid First Name');
    }
    else if(!lastName.match(textPattern)){
      setInValidText('Invalid Last Name');
    }
    else if(!email.match(emailPattern)){
      setInValidText('Invalid Email');
    }
    else{
        setInValidText('');
        Axios.post("http://localhost:8000/register",{
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }).then((response) => {
          if(response.data.message === 'Success!'){
            window.location.href = '/login';
          }else{
            setInValidText(response.data.message);
          }
        });
    }
  }

  return (
      <React.Fragment>
      <Navbar/>
      <div className={classes.pageBackground}>
      <Grid
      className={classes.root}
      spacing={0}
        justifyContent="center"
        alignItems="center"
      >

      <Card variant="outlined" className={classes.card}>
      <Typography className={classes.cardContent} color="textSecondary" gutterBottom>
        Register
      </Typography>
      <div className={classes.textfieldContainer}>
        <div>
              <TextField id="firstName" label="First Name" variant="filled" className={classes.textfield} onChange= {event => setFirstName(event.target.value)}/>
        </div>
        <div className={classes.textfieldContainer1}>
              <TextField id="lastName" label="Last Name" variant="filled" className={classes.textfield} onChange= {event => setLastName(event.target.value)}/>
        </div>
      </div>
      <div className={classes.textfieldContainer2}>
      <div>
            <TextField id="email" label="Email" variant="filled" className={classes.textfield1} onChange= {event => setEmail(event.target.value)}/>
      </div>
      <div className={classes.textfieldContainer3}>
            <TextField id="password" label="Password" type="password" variant="filled" className={classes.textfield1} onChange= {event => setPassword(event.target.value)}/>
      </div>
      </div>
      <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.button} onClick={register}>Continue</Button>
      </div>

      <div  className={classes.inValidText}>
          <h1> { inValidText != '' ?  `${inValidText}` : '' } </h1>
      </div>
      </Card>
      </Grid>
      </div>
      </React.Fragment>
  );
}

export default withStyles(styles)(Register);
