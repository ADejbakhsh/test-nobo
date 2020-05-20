import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      bottom: 0,
      position: "fixed",
      backgroundColor: "#3f51b5",
      width: "100%",
      zIndex: 10,
      // Je comprend pas trop l'interet du Bottom navigation sur le coups
    },
    title: {
      flexGrow: 1,
      color: "white",
    },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                Footer
              </Typography>
        </div>
      );
    }