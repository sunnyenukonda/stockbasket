import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles.js';

function Indices({ data }) {
  return (
    <div className="indices">
      <h3 className="indices__title">{data.title} <span className="indices__numbers">{data.author}</span> <span className={data.color === 'green' ? "indices__greenpercentage" : "indices__redpercentage"}>{data.publishedAt}</span></h3>
    </div>
  );
}

export default withStyles(styles)(Indices);
