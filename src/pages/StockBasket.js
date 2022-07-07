import React, { useContext } from "react";
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Nonavbar';
import Sidebar from '../components/Navbar/Sidebar';
import StockTab from '../components/Stock/StockTab';
import styles from '../styles/styles.js';
import '../styles/styles.css';
import { connect } from "react-redux";


function StockBasket(props) {
const { classes, token} = props;
  return (
    <React.Fragment>
    <Navbar/>
    <Sidebar/>
    <StockTab token={token}/>
    </React.Fragment>
  );
}

export default StockBasket;
