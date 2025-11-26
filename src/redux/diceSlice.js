import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [], 
};

const diceSlice = createSlice({
  name: 'dice', 
  initialState,
  reducers: {
    rollDie: (state) => {
      const rollValue = Math.floor(Math.random() * 6) + 1; 
      const newRoll = {
        value: rollValue,
        timestamp: new Date().toLocaleTimeString('ru-RU'), 
      };
      state.history.push(newRoll); 
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { rollDie, clearHistory } = diceSlice.actions;
export default diceSlice.reducer;