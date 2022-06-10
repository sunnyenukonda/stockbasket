import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <span className="news__source">Source:{data.source}</span>
    </div>
  );
}

export default withStyles(styles)(NewsArticle);
