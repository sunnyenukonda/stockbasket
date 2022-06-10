import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
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

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.newsPage}>
      <List className={classes.root} subheader={<li />}>
        {[0, 1, 2, 3, 4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16].map((sectionId) => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <ListItem key={`item-${sectionId}`}
                button
                selected={selectedIndex === sectionId}
                onClick={(event) => handleListItemClick(event, sectionId)}
                >
                  <ListItemText primary={`Item ${sectionId}`} />
                </ListItem>
            </ul>
          </li>
        ))}
      </List>
      <div className={classes.newsPage1}>
        <div className={classes.compareValue}>
         <h3 className="indices__greenpercentage">10.80%</h3>
         <h3>1 YR Return</h3>
        </div>
      </div>
    </div>
  );
}
