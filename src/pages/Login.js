import Navbar from '../components/Navbar/Nonavbar';
import React, { useContext, createContext, useEffect, useState } from "react";
import Axios from 'axios';
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
import { setData } from "../actions/sessionAction";
import { connect } from "react-redux";

function Login(props) {
  const { classes, setTToken} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [inValidText, setInValidText]= useState('');

  Axios.defaults.withCredentials = true;

  const login = () =>{
    Axios.post("http://localhost:8000/login",{
      email: email,
      password: password
    }).then((response) => {
      if(response.data[0] != undefined){
        setTToken(response.data[0]);
        window.location.href = '/stockbasket';
      }else{
        setInValidText(response.data.message);
      }
    });
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
        Login
      </Typography>
      <Typography color="textSecondary">
        Please enter email and password
      </Typography>
      <div className={classes.textfieldContainer2}>
      <div>
            <TextField id="email" label="Email" variant="filled" className={classes.textfield1} onChange= {event => setEmail(event.target.value)}/>
      </div>
      <div className={classes.textfieldContainer3}>
            <TextField id="password" label="Password" type="password" variant="filled" className={classes.textfield1} onChange= {event => setPassword(event.target.value)}/>
      </div>
      </div>
      <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.button} onClick={login}>Continue</Button>
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

export default withStyles(styles)(Login);
