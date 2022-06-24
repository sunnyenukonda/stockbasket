import React, { useContext, createContext, useEffect, useState } from "react";
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
import graph from '../../images/graph.png';
import axios from "axios";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

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


  const [data, setData] = useState([]);
  const [peerdata, setPeerData] = useState([]);
  const apiKey = "caps2uaad3i1rqbdg54g";

const [textInput, setTextInput] = useState('');

const [showLoader, setLoaderValue] = useState(false);

const [intialLoad, setInitialLoadValue] = useState(true);

let link = `https://widget.finnhub.io/widgets/stocks/chart?symbol=${textInput}&watermarkColor=blue&backgroundColor=black&textColor=black`;

const getStockInfo = () => {
  let one = `https://finnhub.io/api/v1/stock/recommendation?symbol=${textInput}&token=${apiKey}`;
  let two = `https://finnhub.io/api/v1/stock/peers?symbol=${textInput}&token=${apiKey}`;

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
   setLoaderValue(true);
   axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      setLoaderValue(false);
      setInitialLoadValue(false);
      setData(responses[0].data);
      setPeerData(responses[1].data);
      //console.log(responses[2].data)
      // use/access the results
    })).catch(errors => {
      // react on errors.
      console.log(errors)
    });
    };


  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });


  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };



  const handleTextInputChange = event => {
        setTextInput(event.target.value);
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
                label="Search for Stock"
                variant="outlined"
                color="primary"
                value= {textInput}
                className={classes.selectProps}
                onChange= {handleTextInputChange}
              />
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2}>
              <Button variant="contained" color="primary" onClick={() => getStockInfo()}>
                Search
              </Button>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}>
              {
                showLoader ?
                <CircularProgress /> : ''
              }
              {
                data.length > 0 ?
                <div className="info">
                  <h3 className="info__title">Period: {data[0].period}</h3>
                  <Grid container>
                    <Grid item xs={6} lg={6} md={6} sm={6}>
                        <h3 className="baskettitle">Buy: {data[0].buy}</h3>
                    </Grid>
                    <Grid item xs={6} lg={6} md={6} sm={6}>
                         <h3 className="baskettitle">Sell: {data[0].sell}</h3>
                    </Grid>
                  </Grid>
                   </div> :
                   !intialLoad ?
                   <div className="info">
                     <h3 className="info__title">No Information Found</h3>
                    </div> : ''
              }
              </Grid>

              <Grid item lg={2} md={2} sm={2} xs={2}>
              <iframe src={link} width="400" height="300"></iframe>
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
              {
                !intialLoad ?
                <div className="info1">
                    <div className="info3"> <div className="info4"> PEER LIST </div> </div>
                    {
                      peerdata.length > 0
                      ?
                      peerdata.map((data, index) => (
                          <h3 className="info__title2" key={index}>{data}</h3>
                        ))
                      :
                      <h3 className="info__title2">No Information Found</h3>
                    }
                </div> : ''
              }

              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </div>
  );
}
