import React, { useContext, createContext, useEffect, useState } from 'react';
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
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';

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
    marginTop: 80
  },
  compareValue:{
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 1020,
    paddingLeft: 70,
    background: '#bceffa'
  },
  button1:{
    width: 150
  },
  loader:{
    paddingLeft: 1000,
    paddingTop: 300
  },
  chip: {
    margin: 2,
  }
}));

export default function StockTab(props) {
  const classes = useStyles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250,
      },
    },
  };

  const {token} = props;

  const [selectedStocks, setSelectedStocks] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [fundsArray, setFundsArray] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  let finnApiKey = 'caps2uaad3i1rqbdg54g';
  const apiKey = 'caps2uaad3i1rqbdg54g';
  let [getT1, setT1] = React.useState(0);
  let [getT2, setT2] = React.useState(0);
  let  t3 = 0;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleChange = (event) => {
    setSelectedStocks(event.target.value);
  };

  const reload = () => {
    setLoader(true);
      axios.post("https://hidden-citadel-00931.herokuapp.com/updateStocks",{
        selectedStocks: selectedStocks,
        userId: token.id
      }).then((response) => {
        if(response.data != undefined){
          setSelectedStocks(response.data.products);
          setFundsArray(response.data.products);
          calculate(response.data.products);
          setLoader(false);
        }else{
          //setInValidText(response.data.message);
        }
      });
  };

  useEffect(() => {
   setLoader(true);
    axios.post("https://hidden-citadel-00931.herokuapp.com/getStocks",{
      userId: token.id
    }).then((response) => {
      if(response.data != undefined){
        setSelectedStocks(response.data.products);
        setFundsArray(response.data.products);
        calculate(response.data.products);
        setLoader(false);
      }else{
        //setInValidText(response.data.message);
      }
    });
  }, []);

  const calculate = (stocks) => {
    let t1 = 0,t2 = 0;
    if(!stocks.length) setLoader(true);


    stocks.map((stock, index) => {

      const myArray = stock.split("-");
      axios.get(
          `https://finnhub.io/api/v1/stock/candle?symbol=${myArray[0]}&resolution=1&from=1641225600&to=1641225600&token=${finnApiKey}`
        )
        .then((response) => {
          t1 = t1 + response.data.c[0];
          setT1(t1);
        })
        .catch((error) => console.log(error));
      axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${myArray[0]}&token=${apiKey}`
      )
      .then((response) => {
        t2 = t2 + response.data.c;
        setT2(t2);
      })
      .catch((error) => console.log(error));
  });
  }

t3 = ((getT2-getT1)/getT1)*100;
if(isNaN(t3)) t3 = 0.00;

  let stocks = [
    'AAPL-Apple',
'MSFT-Microsoft',
'GOOGL-Alphabet',
'TSLA-Tesla',
'UNH-UnitedHealth',
'JNJ-Johnson & Johnson',
'V-Visa',
'TSM-Taiwan Semiconductor',
'XOM-ExxonMobil',
'NVDA-Nvidia',
'PG-Procter & Gamble',
'WMT-Walmart',
'JPM-JPMorgan Chase',
'BABA-Alibaba',
'MA-Mastercard',
'LLY-Eli Lilly',
'PFE-Pfizer',
'CVX-Chevron',
'HD-Home Depot',
'KO-Coca-Cola',
'ABBV-AbbVie',
'BAC-Bank of America',
'PEP-Pepsi',
'MRK-Merck',
'VZ-Verizon',
'COST-Costco',
'TMO-Thermo Fisher',
'TM-Toyota',
'AZN-AstraZeneca',
'NVO-Novo Nordisk',
'ABT-Abbott Labs',
'AVGO-Broadcom',
'ORCL-Oracle',
'DHR-Danaher',
'MCD-McDonalds',
'NVS-Novartis',
'ASML-ASML',
'CMCSA-Comcast',
'ACN-Accenture',
'CSCO-Cisco',
'DIS-Disney',
'ADBE-Adobe',
'TMUS-T-Mobile',
'CRM-Salesforce',
'BMY-Bristol-Myers Squibb',
'UPS-UPS',
'NKE-Nike'
];

  return (
    !loader ?
    <div className={classes.newsPage}>
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={4} xs={4}>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Stocks</InputLabel>
        <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={selectedStocks}
                  onChange={handleChange}
                  input={<Input/>}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
            </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {stocks.map((stock, index) => {
                    return(
                    <MenuItem key={stock} value={stock}>
                      <Checkbox checked={selectedStocks.indexOf(stock) > -1} />
                      <ListItemText primary={stock} />
                    </MenuItem>);
                  })}
        </Select>
              <Button variant="contained" className={classes.button1} onClick={reload}>Reload</Button>
      </FormControl>
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={4}>
      <div className="news">
        <h3 className="news__title">Your fund includes:</h3>
        <div>
        {
          fundsArray.length > 0 ?
          fundsArray.map((fund, index) => {
            return <h3 key={index} className="baskettitle">{fund}</h3>;
          })
          : ''
        }
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
           <h3 className={(t3 > 0) ? "indices__greenpercentage" : "indices__redpercentage"}>{t3.toFixed(2)}%</h3>
           <h3>YTD return</h3>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
    : <div className={classes.loader}><CircularProgress size={100} thickness={5}/></div>
  );
}
