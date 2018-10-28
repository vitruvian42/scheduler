import React, { Component } from 'react'


import PropTypes from 'prop-types';

//import Todo from './Todo'


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { connect } from "react-redux"


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: "35px 20px",
      fontSize : "24px",
      textAlign: "left",
      color: "rgba(23, 17, 17, 0.54)",
      backgroundColor : "#cc3232"
    },
  });


  @connect((store)=> {
    return {
        todos : store.todos.todos
    }
  })


  function FullWidthGrid(props) {
    const { classes } = props;

    console.log(props.todos)
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>First todo</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Second Todo</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Third Todo</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FullWidthGrid);