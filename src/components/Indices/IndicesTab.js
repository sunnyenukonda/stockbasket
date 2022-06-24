import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
import Indices from "./Indices";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';
import '../../styles/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function IndicesTab(props) {

const [daxData, setDaxData] = useState();
const [ixiData, setIxiData] = useState();
const [djiData, setDjiData] = useState();
const [rutData, setRutData] = useState();
  const apiKey = "7d3ef18c1fdf4a96bae41660955ccaf6";

    useEffect(() => {
      let one = `https://api.twelvedata.com/quote?symbol=DAX&apikey=${apiKey}`;
      let two = `https://api.twelvedata.com/quote?symbol=IXIC&apikey=${apiKey}`;
      let three = `https://api.twelvedata.com/quote?symbol=DJI&apikey=${apiKey}`;
      let four = `https://api.twelvedata.com/quote?symbol=RUT&apikey=${apiKey}`;

      const requestOne = axios.get(one);
      const requestTwo = axios.get(two);
      const requestThree = axios.get(three);
      const requestFour = axios.get(four);
       axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
         setDaxData(responses[0].data);
         setIxiData(responses[1].data);
         setDjiData(responses[2].data);
         setRutData(responses[3].data);
          // use/access the results
        })).catch(errors => {
          // react on errors.
          console.log(errors)
        });
    }, []);

const { classes } = props;

  return (
    <div className={classes.newsPage}>
      <div className="all__indices">
      <div className="indices">
      {
        daxData != undefined ?
                <h3 className="indices__title">{daxData.name} <span className="indices__numbers">{daxData.close}</span> <span className={daxData.percent_change > 0  ? "indices__greenpercentage" : "indices__redpercentage"}>{daxData.percent_change}%</span></h3> : ''
      }
      </div>
      <div className="indices">
      {
        ixiData != undefined ?
              <h3 className="indices__title">{ixiData.name} <span className="indices__numbers">{ixiData.close}</span> <span className={ixiData.percent_change > 0 ? "indices__greenpercentage" : "indices__redpercentage"}>{ixiData.percent_change}%</span></h3>  : ''
      }
      </div>
      <div className="indices">
      {
        djiData != undefined ?
        <h3 className="indices__title">{djiData.name} <span className="indices__numbers">{djiData.close}</span> <span className={djiData.percent_change > 0 ? "indices__greenpercentage" : "indices__redpercentage"}>{djiData.percent_change}%</span></h3> : ''
      }
      </div>
      <div className="indices">
      {
        rutData != undefined ?
              <h3 className="indices__title">{rutData.name} <span className="indices__numbers">{rutData.close}</span> <span className={rutData.percent_change > 0 ? "indices__greenpercentage" : "indices__redpercentage"}>{rutData.percent_change}%</span></h3> : ''
      }
      </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(IndicesTab);
