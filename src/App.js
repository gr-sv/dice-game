import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rollDie, clearHistory } from './redux/diceSlice';

function App() {
  const history = useSelector((state) => state.dice.history); 
  
  const dispatch = useDispatch();

  const lastRoll = history[history.length - 1];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Redux Toolkit Кубик</h1>

      <div style={{ fontSize: '72px', margin: '20px 0' }}>
        {lastRoll ? lastRoll.value : 'Начните!'}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => dispatch(rollDie())}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          Бросить кубик
        </button>
        <button 
          onClick={() => dispatch(clearHistory())}
          disabled={history.length === 0}
          style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
        >
          Очистить историю ({history.length})
        </button>
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h2>История бросков</h2>
      {history.length === 0 ? (
        <p>История пуста.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {[...history].reverse().map((roll, index) => ( 
            <li key={index} style={{ marginBottom: '5px' }}>
              **Значение: {roll.value}** (Время: {roll.timestamp})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;