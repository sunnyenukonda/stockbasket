import React, { useContext } from "react";
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Nonavbar';
import Sidebar from '../components/Navbar/Sidebar';
import IndicesTab from '../components/Indices/IndicesTab';
import styles from '../styles/styles.js';
import '../styles/styles.css';

function IndicesPerformance(props) {
const { classes } = props;

  return (
    <React.Fragment>
    <Navbar/>
    <Sidebar/>
    <IndicesTab/>
    </React.Fragment>
  );
}

export default withStyles(styles)(IndicesPerformance);
