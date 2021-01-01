import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import Form from 'components/Form';
import List from 'components/List';

import useStyles from 'components/Main/styles';

const Main = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader 
        title="Expense Tracker"
        subheader="Powered by Speechly"
      />
      <CardContent>
        <Typography 
          align="center" 
          variant="h5"
        >
          Total balance $100
        </Typography>
        <Typography 
          variant="subtitle1"
          style={{
            lineHeight: '1.5em',
            marginTop: '20px'
          }}  
        >
          {/* InfoCard... */}
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
