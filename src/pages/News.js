import Navbar from '../components/Navbar/Nonavbar';
import Sidebar from '../components/Navbar/Sidebar';
import NewsTab from '../components/News/Newstab';
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



function News(props) {
  const { classes } = props;


  return (
      <React.Fragment>
      <Navbar/>
      <Sidebar/>
      <NewsTab/>
      </React.Fragment>
  );
}

export default withStyles(styles)(News);
