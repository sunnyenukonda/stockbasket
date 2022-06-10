import React, { useContext } from "react";
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Nonavbar';
import Sidebar from '../components/Navbar/Sidebar';
import StockTab from '../components/Stock/StockTab';
import styles from '../styles/styles.js';
import '../styles/styles.css';

function StockBasket(props) {
const { classes } = props;

  return (
    <React.Fragment>
    <Navbar/>
    <Sidebar/>
    <StockTab/>
    </React.Fragment>
  );
}

export default withStyles(styles)(StockBasket);
