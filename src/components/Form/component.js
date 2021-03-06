import React, { useState } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { useExpenseTracker } from 'context/ExpenseTrackerContext';
import { incomeCategories, expenseCategories } from 'constants/categories';
import useStyles from 'components/Form/styles';

const initialState = {
  amount: 0,
  category: '',
  type: 'Income',
  date: new Date()
};

const Form = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialState);

  const { addTransaction } = useExpenseTracker();

  const selectedCategories = formData.type === 'Income'
    ? incomeCategories
    : expenseCategories;

  const handleTypeChange = (event) => {
    setFormData({
      ...formData,
      type: event.target.value
    });
  };

  const handleCategoryChange = (event) => {
    setFormData({
      ...formData,
      category: event.target.value
    });
  };

  const handleAmountChange = (event) => {
    setFormData({
      ...formData,
      amount: event.target.value
    });
  };

  const handleDateChange = (event) => {
    setFormData({
      ...formData,
      date: event.target.value
    });
  };

  const handleTransactionCreate = () => {
    addTransaction(formData);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="subtitle2"
          gutterBottom
        >
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={handleTypeChange}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={handleCategoryChange}
          >
            {selectedCategories.map(category => (
              <MenuItem 
                key={category.type}
                value={category.type}
              >
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField 
          type="number" 
          label="Amount" 
          fullWidth 
          value={formData.amount}
          onChange={handleAmountChange}  
        />
      </Grid>
      <Grid item xs={6}>
        <TextField 
          type="date" 
          label="Date" 
          fullWidth 
          value={formData.date}
          onChange={handleDateChange}
        />
      </Grid>
      <Button 
        className={classes.button} 
        variant="outlined" 
        color="primary" 
        fullWidth
        onClick={handleTransactionCreate}  
      > 
        Create
      </Button> 
    </Grid>  
  );
};

export default Form;
