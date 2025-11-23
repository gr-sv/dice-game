import { configureStore } from '@reduxjs/toolkit';
import diceReducer from './diceSlice';

const store = configureStore({
  reducer: {
    dice: diceReducer, 
  },
});

export default store;