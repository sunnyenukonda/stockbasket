import Navbar from '../components/Navbar/Navbar';
import Grid from '@material-ui/core/Grid';
import secLogo from '../images/secondary_logo.png';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles.js';
import Button from "@material-ui/core/Button";
import {  Link } from "react-router-dom";
import React, { useContext, createContext, useEffect, useState } from "react";
import Axios from 'axios';
import { Redirect } from "react-router-dom"

function Main(props) {
  const { classes } = props;

  return (
      <React.Fragment>
      <Navbar/>
      <div className={classes.pageBackground}>
      <Grid container spacing={2}>
        <Grid item lg={7} md={7} sm={7} xs={7}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
          <Grid item lg={8} md={8} sm={8} xs={8}>
             <img src={secLogo} alt="secLogo" className={classes.secondoryImg}/>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className={classes.subTitle}>Create your own fund.</div>
            </Grid>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
          <Grid item lg={4} md={4} sm={4} xs={4}>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
          <div className={classes.sideText}>
             <div className={classes.sideTitle}>RISK REIMAGINED.</div>
             <div className={classes.sideTitle}>RISK REDEFINED.</div>
             <Button variant="contained" className={classes.button1} component={Link} to="/register">Get Started</Button>
          </div>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
      </React.Fragment>
  );
}

export default withStyles(styles)(Main);
