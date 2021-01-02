import React, { useReducer, useContext, createContext } from 'react';
import { nanoid } from 'nanoid';

import { incomeCategories, expenseCategories } from 'constants/categories';

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

export const useTransactionsChart = (type) => {
  const context = useExpenseTracker();

  const transactions = context.transactions.filter(transaction => transaction.type === type);

  const total = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  const categories = type === 'Income'
    ? incomeCategories
    : expenseCategories;

  const data = transactions.reduce((data, transaction) => ({
    ...data,
    [transaction.category]: (data[transaction.category] || 0) + transaction.amount
  }), {})

  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      data: Object.values(data),
      backgroundColor: Object.keys(data).map(categoryName => categories.find(category => category.type === categoryName).color)
    }]
  };

  return { total, chartData };
};
