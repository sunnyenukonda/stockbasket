import React, { useContext } from "react";
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Nonavbar';
import Sidebar from '../components/Navbar/Sidebar';
import CompareList from '../components/Compare/CompareList';
import CompareValue from '../components/Compare/CompareValue';
import styles from '../styles/styles.js';
import '../styles/styles.css';

function Compare(props) {
const { classes } = props;

  return (
    <React.Fragment>
    <Navbar/>
    <Sidebar/>
    <CompareList/>
    </React.Fragment>
  );
}

export default withStyles(styles)(Compare);
