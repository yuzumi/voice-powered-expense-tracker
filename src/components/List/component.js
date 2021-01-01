import React from 'react';
import { List as MuiList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Slide, Avatar } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { useExpenseTracker } from 'context/ExpenseTrackerContext';

import useStyles from 'components/List/styles';

const List = () => {
  const classes = useStyles();

  const { transactions, deleteTransaction } = useExpenseTracker();

  const renderTransaction = transaction => {
    const avatarClassName = transaction.type === 'income'
      ? classes.avatarIncome
      : classes.avatarExpense;

    return (
      <Slide
        key={transaction.id} 
        direction="down" 
        in 
        mountOnEnter 
        unmountOnExit
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar className={avatarClassName}>
              <MoneyOff />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={transaction.category} 
            secondary={`$${transaction.amount} - ${transaction.date}`} 
          />
          <ListItemSecondaryAction>
            <IconButton 
              edge="end" 
              aria-label="delete"
              onClick={() => deleteTransaction(transaction.id)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Slide>
    );
  };

  return (
    <MuiList dense={false} className={classes.list}>
      {transactions.map(renderTransaction)}
    </MuiList>
  );
};

export default List;
