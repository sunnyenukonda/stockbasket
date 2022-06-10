import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import {  Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../images/logo.png';
import styles from '../../styles/styles.js';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar(props) {
  const { classes } = props;
  const history = useHistory();
  const handleListItemClick = (selectedOption) => {
    if(selectedOption === 'news') history.push("/news");
    else if(selectedOption === 'indicesperformance') history.push("/indicesperformance");
    else if(selectedOption === 'compare') history.push("/compare");
    else if(selectedOption === 'stockbasket') history.push("/stockbasket");
    else if(selectedOption === 'stockinfo') history.push("/stockinfo");
    else history.push("/");
    };
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button
           key={'your-fund'}
           className={classes.menuItem}
           onClick={(event) => handleListItemClick('stockbasket')}>
            <Typography variant="h6" className={classes.menuItemText} component="div">
              StockBasket
            </Typography>
          </ListItem>
          <ListItem button key={'compare'}
          className={classes.menuItem}
          onClick={(event) => handleListItemClick('compare')}>
          <Typography variant="h6" className={classes.menuItemText} component="div">
            Compare
          </Typography>
          </ListItem>
          <ListItem
          button
          key={'indices'}
          className={classes.menuItem}
          onClick={(event) => handleListItemClick('indicesperformance')}>
          <Typography variant="h6" className={classes.menuItemText} component="div">
            Indices Performance
          </Typography>
          </ListItem>
          <ListItem
          button
          key={'stock'}
          className={classes.menuItem}
          onClick={(event) => handleListItemClick('stockinfo')}>
          <Typography variant="h6" className={classes.menuItemText} component="div">
            Stock Info
          </Typography>
          </ListItem>
          <ListItem
          button
          key={'news'}
          className={classes.menuItem}
          onClick={(event) => handleListItemClick('news')}>
          <Typography variant="h6" className={classes.menuItemText} component="div">
            News
          </Typography>
          </ListItem>
          <ListItem button key={'logout'}
          className={classes.menuItem}
          button
          onClick={(event) => handleListItemClick('logout')}
          >
          <ExitToAppIcon style={{ fontSize: 60 }}/>
          <Typography variant="h6" className={classes.menuItemText} component="div">
            Log Out
          </Typography>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
