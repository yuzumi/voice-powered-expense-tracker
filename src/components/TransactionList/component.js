import React from 'react';
import { List, Slide } from '@material-ui/core';

import TransactionListItem from 'components/TransactionListItem';
import { useExpenseTracker } from 'context/ExpenseTrackerContext';
import useStyles from 'components/TransactionList/styles';

const TransactionList = () => {
  const classes = useStyles();

  const { transactions, deleteTransaction } = useExpenseTracker();

  const renderTransaction = transaction => {
    return (
      <Slide
        key={transaction.id} 
        direction="down" 
        in 
        mountOnEnter 
        unmountOnExit
      >
        <TransactionListItem 
          transaction={transaction}
          onDelete={() => deleteTransaction(transaction.id)}
        />
      </Slide>
    );
  };

  return (
    <List dense={false} className={classes.list}>
      {transactions.map(renderTransaction)}
    </List>
  );
};

export default TransactionList;
