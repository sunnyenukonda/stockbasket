import React, { useContext } from "react";
import NewsArticle from "./NewsArticle";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';
import '../../styles/styles.css';

function News(props) {
//  const { data } = useContext(NewsContext);
const { classes } = props;
const data = {"articles":
[
    {
        "url" : 1,
        "title" : "Lorem Ipsum has been the industry's standard",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "H. Rackham",
        "publishedAt" : "Lorem Ipsum",
        "source" : "Lorem Ipsum"
    },{
        "url" : 2,
        "title" : "Lorem Ipsum has been the industry's standard",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "H. Rackham",
        "publishedAt" : "Lorem Ipsum",
        "source" : "Lorem Ipsum"
    },{
        "url" : 3,
        "title" : "Lorem Ipsum has been the industry's standard",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "H. Rackham",
        "publishedAt" : "Lorem Ipsum",
        "source" : "Lorem Ipsum"
    },{
        "url" : 4,
        "title" : "Lorem Ipsum has been the industry's standard",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "H. Rackham",
        "publishedAt" : "Lorem Ipsum",
        "source" : "Lorem Ipsum"
    },{
        "url" : 5,
        "title" : "Lorem Ipsum has been the industry's standard",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "H. Rackham",
        "publishedAt" : "Lorem Ipsum",
        "source" : "Lorem Ipsum"
    },{
        "url" : 6,
        "title" : "Lorem Ipsum has been the industry's standard",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
        "author" : "H. Rackham",
        "publishedAt" : "Lorem Ipsum",
        "source" : "Lorem Ipsum"
    }
]
};

  return (
    <div className={classes.newsPage}>
      <div className="all__news">
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : "Loading"}
      </div>
    </div>
  );
}

export default withStyles(styles)(News);
