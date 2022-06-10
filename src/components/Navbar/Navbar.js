import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import {  Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../images/logo.png';
import styles from '../../styles/styles.js';
import Grid from '@material-ui/core/Grid';

function Navbar(props) {
  const { classes } = props;
  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Grid container>
            <Grid item lg={6} md={6} xs={6} sm={6}>
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
            <Grid item lg={2} md={2}>
            </Grid>
            <Grid item lg={4} md={4}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
              >
                <Grid item xs={4} sm={4}>
                </Grid>
                <Grid item xs={8} sm={8}>
                <Button variant="contained" className={classes.button} component={Link} to="/register">Signup</Button>
                <Button variant="contained" className={classes.button} component={Link} to="/login">Login</Button>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
