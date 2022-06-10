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
import TextField from '@material-ui/core/TextField';
import graph from '../../images/graph.JPG';

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
  },
  selectProps: {
    minWidth: 500
  }
}));

export default function InfoTab() {
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
    <Grid container>
      <Grid item xs={4} lg={4} md={4} sm={4}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item lg={3} md={3} sm={3} xs={3}>
              <TextField
                id="outlined-secondary"
                label="Search"
                variant="outlined"
                color="primary"
                className={classes.selectProps}
              />
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}>
              <div className="info">
                <h3 className="info__title">Period: Jan 01, 2022</h3>
                <Grid container>
                  <Grid item xs={6} lg={6} md={6} sm={6}>
                      <h3 className="baskettitle">Buy: 7</h3>
                  </Grid>
                  <Grid item xs={6} lg={6} md={6} sm={6}>
                       <h3 className="baskettitle">Sell: 0</h3>
                  </Grid>
                </Grid>
              </div>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}>
              <img src={graph} alt="graph"/>
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6} lg={6} md={6} sm={6}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
              <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="info1">
                  <div className="info3"> <div className="info4"> PEER LIST </div> </div>
                    <h3 className="info__title2">"EMC"</h3>
                    <h3 className="info__title2">"HPQ"</h3>
                    <h3 className="info__title2">"DELL"</h3>
                    <h3 className="info__title2">"WDC"</h3>
                    <h3 className="info__title2">"HPE"</h3>
              </div>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </div>
  );
}
