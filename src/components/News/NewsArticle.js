import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.webTitle}</h1>
      <a href={data.webUrl}> Source:The Guardian</a>
    </div>
  );
}

export default withStyles(styles)(NewsArticle);
