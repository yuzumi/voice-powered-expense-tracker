import React from 'react';
import { Grid } from '@material-ui/core';

import Details from 'components/Details';
import Main from 'components/Main';

import useStyles from 'styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className="app">
      <Grid 
        className={classes.grid}
        container 
        spacing={0} 
        alignItems="center" 
        justify="center"
        style={{ height: '100vh' }}  
      >
        <Grid item xs={12} sm={3}>
          <Details title="Income" mode="income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expense" mode="expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
