import Navbar from '../components/Navbar/Nonavbar';
import React from 'react';
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

function Register(props) {
  const { classes } = props;
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
              <TextField id="firstName" label="First Name" variant="filled" className={classes.textfield}/>
        </div>
        <div className={classes.textfieldContainer1}>
              <TextField id="lastName" label="Last Name" variant="filled" className={classes.textfield}/>
        </div>
      </div>
      <div className={classes.textfieldContainer2}>
      <div>
            <TextField id="email" label="Email" variant="filled" className={classes.textfield1}/>
      </div>
      <div className={classes.textfieldContainer3}>
            <TextField id="password" label="Password" type="password" variant="filled" className={classes.textfield1}/>
      </div>
      </div>
      <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.button} component={Link} to="/portfolio">Continue</Button>
      </div>
      </Card>
      </Grid>
      </div>
      </React.Fragment>
  );
}

export default withStyles(styles)(Register);
