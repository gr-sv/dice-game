import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rollDie, clearHistory } from './redux/diceSlice';

function App() {
  const history = useSelector((state) => state.dice.history); 
  
  const dispatch = useDispatch();

  const lastRoll = history[history.length - 1];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Dice Game</h1>

      <div style={{ fontSize: '72px', margin: '20px 0' }}>
        {lastRoll ? lastRoll.value : 'Get started!'}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => dispatch(rollDie())}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          Roll the dice
        </button>
        <button 
          onClick={() => dispatch(clearHistory())}
          disabled={history.length === 0}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          Clear the history ({history.length})
        </button>
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h2>History</h2>
      {history.length === 0 ? (
        <p>The history is empty</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {[...history].reverse().map((roll, index) => ( 
            <li key={index} style={{ marginBottom: '5px' }}>
              **Value: {roll.value}** (Time: {roll.timestamp})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;