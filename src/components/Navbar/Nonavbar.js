import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import {  Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../images/logo.png';
import styles from '../../styles/styles.js';
import Grid from '@material-ui/core/Grid';

function Nonavbar(props) {
  const { classes } = props;
  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Grid container>
            <Grid item lg={12} md={12} xs={12} sm={12}>
            <Link to="/" className={classes.link}>
              <Grid container spacing={0}>
              <Grid item>
                <img src={logo} alt="logo" className={classes.logo}/>
              </Grid>
              <Grid item>
                <Typography variant="h6" className={classes.typography} component="div">
                  StockBasket
                </Typography>
              </Grid>
              </Grid>
            </Link>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles(styles)(Nonavbar);
