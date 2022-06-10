import React, { useContext } from "react";
import Indices from "./Indices";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';
import '../../styles/styles.css';

function IndicesTab(props) {
//  const { data } = useContext(NewsContext);
const { classes } = props;
const data = {"articles":
[
    {
        "url" : 1,
        "title" : "DJIA",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "32861.70",
        "publishedAt" : "0.40%",
        "color" : "red"
    },{
        "url" : 2,
        "title" : "Nasdaq",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "12054.88",
        "publishedAt" : "0.23%",
        "color" : "green"
    },{
        "url" : 3,
        "title" : "S&P 500",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "4114.89",
        "publishedAt" : "0.42%",
        "color" : "green"
    },{
        "url" : 4,
        "title" : "Nikkei",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "27457.89",
        "publishedAt" : "0.65%",
        "color" : "red"
    }
]
};

  return (
    <div className={classes.newsPage}>
      <div className="all__indices">
      {data
        ? data.articles.map((news) => (
            <Indices data={news} key={news.url} />
          ))
        : "Loading"}
      </div>
    </div>
  );
}

export default withStyles(styles)(IndicesTab);
