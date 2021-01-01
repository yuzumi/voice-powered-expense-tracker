import React, { forwardRef } from 'react';
import { 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton, 
  Avatar 
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from 'components/TransactionListItem/styles';

const TransactionListItem = forwardRef(({ transaction, onDelete }, ref) => {
  const classes = useStyles();

  const avatarClassName = transaction.type === 'income'
    ? classes.avatarIncome
    : classes.avatarExpense;

  return (
    <ListItem ref={ref}>
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
          onClick={onDelete}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

export default TransactionListItem;
