import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';
import '../../styles/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function News(props) {

  const [data, setData] = useState();
    const apiKey = "01ff4be5-eb61-469b-a77d-b7a73b43fc18";

    useEffect(() => {
      axios
        .get(
          `https://content.guardianapis.com/search?page=6&q=markets&api-key=${apiKey}`
        )
        .then((response) => setData(response.data.response.results))
        .catch((error) => console.log(error));
    }, []);


const { classes } = props;

  return (
    <div className={classes.newsPage}>
      <div className="all__news">
      {data
        ? data.map((news, index) => (
            <NewsArticle data={news} key={index} />
          ))
        : <CircularProgress size={100} thickness={5}/>}
      </div>
    </div>
  );
}

export default withStyles(styles)(News);
