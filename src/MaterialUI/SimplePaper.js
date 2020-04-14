import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(4),
      width: theme.spacing(28),
      height: theme.spacing(28),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} />
      <Paper elevation={3}/>
      <Paper elevation={3} />
    </div>
  );
}