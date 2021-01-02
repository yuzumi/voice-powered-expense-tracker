import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import { useTransactionsChart } from 'context/ExpenseTrackerContext';
import useStyles from 'components/Details/styles';

const Details = ({ title, mode }) => {
  const classes = useStyles();

  const { total, chartData } = useTransactionsChart(title);

  return (
    <Card className={classes[mode]}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
