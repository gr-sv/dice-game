import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rollDie, clearHistory } from './redux/diceSlice';

function App() {
  const history = useSelector((state) => state.dice.history); 
  
  const dispatch = useDispatch();

  const lastRoll = history[history.length - 1];

  return (
    <main>
		<div className='wrapper'>
			<h1 className='title'>Dice Game</h1>

			<div className='rollValue'>
				{lastRoll ? lastRoll.value : 'Get started!'}
			</div>

			<div className='buttons'>
				<button 
					className='button buttonRollTheDice'
					onClick={() => dispatch(rollDie())}
				>
					Roll the dice
				</button>

				<button
					className='button buttonClearTheHistory'
					onClick={() => dispatch(clearHistory())}
					disabled={history.length === 0}
				>
					Clear the history ({history.length})
				</button>
			</div>
		</div>

		<div className='wrapper'>
			<h2 className='title'>History</h2>

			<div className='historyWrapper'>
				{history.length === 0 ? (
					<p>The history is empty</p>
				) : (
					<ul className='historyDisplay'>
						{[...history].reverse().map((roll, index) => ( 
							<li key={index} style={{ marginBottom: '5px' }}>
							**Value: {roll.value}** (Time: {roll.timestamp})
							</li>
						))}
					</ul>
				)}
			</div>			
		</div>
    </main>
  );
}

export default App;