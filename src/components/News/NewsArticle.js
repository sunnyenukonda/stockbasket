import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';

function NewsArticle({ data }) {
  console.log(data.url);
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <a href={data.url}> Source:{data.source.name}</a>
    </div>
  );
}

export default withStyles(styles)(NewsArticle);
