import React, { useReducer, useContext, createContext } from 'react';
import { nanoid } from 'nanoid';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, { ...action.payload, id: nanoid() }];
    case 'DELETE_TRANSACTIONS':
      return state.filter(transaction => transaction.id !== action.payload);
    default:
      return state;
  }
};

export const ExpenseTrackerProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTIONS',
      payload: id
    });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export const useExpenseTracker = () => useContext(ExpenseTrackerContext);
