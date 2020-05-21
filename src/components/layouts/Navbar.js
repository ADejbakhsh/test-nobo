import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Link className={classes.link} to="/">
          <Typography variant="h6" className={classes.title}>
            Header
          </Typography>
        </Link>
      </AppBar>
    </div>
  );
}