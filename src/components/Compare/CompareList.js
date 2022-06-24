import React, { useContext, createContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
   '&& .Mui-selected': {
     backgroundColor: '#bceffa !important',
   }
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  newsPage: {
    marginTop: 150,
    marginLeft: 430
  },
  newsPage1: {
    marginTop: -300,
    marginLeft: 700
  },
  compareValue:{
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 20,
    marginRight: 520,
    paddingLeft: 70,
    background: '#bceffa'
  }
}));

export default function CompareList() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState();
  const [data, setData] = useState();
        const apiKey = "7d3ef18c1fdf4a96bae41660955ccaf6";

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
        axios.get(
            `https://api.twelvedata.com/quote?symbol=${index}&apikey=${apiKey}`
          )
          .then((response) => setData(response.data))
          .catch((error) => console.log(error));

  };

  console.log(data);

  return (
    <div className={classes.newsPage}>
      <List className={classes.root} subheader={<li />}>
        {
          ['BNDX - Vanguard Total International Bond ETF', 'GLD - SPDR Gold Trust', 'QQQ - Invesco QQQ Trust', 'VOO - Vanguard S&P 500 ETF', 'VTI - Vanguard Total Stock Market ETF', 'IVV - iShares Core S&P 500 ETF', 'SPY - SPDR S&P 500 ETF Trust'].map((sectionId) =>
          (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListItem key={`item-${sectionId}`}
                button
                selected={selectedIndex === sectionId.substring(0, sectionId.indexOf(' '))}
                onClick={(event) => handleListItemClick(event, sectionId.substring(0, sectionId.indexOf(' ')))}
                >
                  <ListItemText primary={sectionId.substring(sectionId.indexOf('-') + 1)} />
                </ListItem>
            </ul>
          </li>

        ))}
      </List>
      <div className={classes.newsPage1}>
      {data != undefined
        ?  <div className={classes.compareValue}>
           <h3 className={data.fifty_two_week.high_change_percent > 0 ? "indices__greenpercentage" : "indices__redpercentage"}>{data.fifty_two_week.high_change_percent}%</h3>
           <h3>YTD Return</h3>
          </div>
        : ''}

      </div>
    </div>
  );
}
