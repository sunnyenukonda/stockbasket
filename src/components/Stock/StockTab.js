import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../styles/styles.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  newsPage: {
    marginTop: 150,
    marginLeft: 430,
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 620
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  newsPage3: {
    marginTop: 100
  },
  compareValue:{
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 1020,
    paddingLeft: 70,
    background: '#bceffa'
  }
}));

export default function StockTab() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.newsPage}>
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={4} xs={4}>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Stocks</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Apple</option>
          <option value={20}>Meta</option>
          <option value={30}>Snap</option>
        </Select>
      </FormControl>
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={4}>
      <div className="news">
        <h3 className="news__title">Your fund includes:</h3>
        <div>
          <h3 className="baskettitle">1. Apple</h3>
          <h3 className="baskettitle">2. GM</h3>
          <h3 className="baskettitle">3. Shell</h3>
        </div>
      </div>
      </Grid>
    </Grid>
    <div className={classes.newsPage3}>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}>
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <div className={classes.compareValue}>
           <h3 className="indices__greenpercentage">10.80%</h3>
           <h3>1 YR Return</h3>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
