import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';
import '../../styles/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function News(props) {

  const [data, setData] = useState();
    const apiKey = "0fd531e601804a05be057d22155ac7cd";

    useEffect(() => {
      axios
        .get(
          `http://newsapi.org/v2/top-headlines?category=business&country=us&pageSize=6&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);


const { classes } = props;

  return (
    <div className={classes.newsPage}>
      <div className="all__news">
      {data
        ? data.articles.map((news, index) => (
            <NewsArticle data={news} key={index} />
          ))
        : <CircularProgress size={100} thickness={5}/>}
      </div>
    </div>
  );
}

export default withStyles(styles)(News);
