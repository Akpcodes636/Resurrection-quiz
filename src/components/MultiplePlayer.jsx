import { useState } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function PlayerSetup() {
  const { dispatch, players } = useQuiz();
  const [playerNames, setPlayerNames] = useState(
    players.map(player => player.name)
  );

  function handleSubmit(e) {
    e.preventDefault();
    
    // Update all player names
    playerNames.forEach((name, index) => {
      dispatch({
        type: "setPlayerName",
        payload: { index, name: name || `Player ${index + 1}` }
      });
    });
    
    // Start the game
    dispatch({ type: "start" });
  }

  return (
    <form className="player-setup" onSubmit={handleSubmit}>
      <h2>Enter Player Names</h2>
      
      {playerNames.map((name, index) => (
        <div key={index} className="player-input">
          <label htmlFor={`player-${index}`}>Player {index + 1}</label>
          <input
            type="text"
            id={`player-${index}`}
            value={name}
            onChange={e => {
              const newNames = [...playerNames];
              newNames[index] = e.target.value;
              setPlayerNames(newNames);
            }}
            placeholder={`Player ${index + 1}`}
          />
        </div>
      ))}
      
      <button className="btn btn-ui">Start Quiz</button>
    </form>
  );
}

export default PlayerSetup;