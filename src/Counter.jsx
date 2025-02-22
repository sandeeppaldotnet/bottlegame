import React, { useState } from 'react';
import attack from './images/attack.png';
import defend from './images/defend.png';
import giftImage from './images/gift.png';
import looseImage from './images/lose.png' // Ensure you have a gift image or you can use a GIF

function Counter() {
  const [count, setCount] = useState(0);
  const [lastPlay, setLastPlay] = useState('');
  const [gameStatus, setGameStatus] = useState('');
  const [showGift, setShowGift] = useState(false); 
  const [showLose, setShowLose] = useState(false);  // State to control the gift animation

  const handleAttack = () => {
    setCount(prev => {
      const newCount = prev + Math.round(Math.random() * 10);
      setLastPlay('Attack');
      if (newCount >= 10) {
        setGameStatus('You Won!!');
        setShowGift(true); // Trigger the gift animation when user wins
      }
      return newCount;
    });
  };

  const handleDefence = () => {
    setCount(prev => {
      const newCount = prev - Math.round(Math.random() * 10);
      setLastPlay('Defence');
      if (newCount <= -10) {
        setGameStatus('You Lost!!');
        setShowLose(true); // Trigger the gift animation when user loses
      }
      return newCount;
    });
  };

  const handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      handleAttack();
    } else {
      handleDefence();
    }
  };

  const handleReset = () => {
    setCount(0);
    setLastPlay('');
    setGameStatus('');
    setShowGift(false); 
    setShowLose(false);
    // Hide gift animation on reset
  };

  return (
    <>
      <div className="row text-white text-center">
        <h1>BATTLE GAME</h1>
        
        <h4>You win at +10 points and lose at -10 points!</h4>
        <h4>Last Play: {lastPlay}</h4>
        <h3>Game Status: {gameStatus}</h3>
        <h1>Score: {count} </h1>
        {/* Flowing Gift Animation */}
        {showGift && (
          <div className="gift-animation">
            <img src={giftImage} alt="Gift" className="gift-img" />
          </div>
        )}
{showLose && (
          <div className="gift-animation">
            <img src={looseImage} alt="Gift" className="gift-img" />
          </div>
        )}
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <img
              style={{
                width: '100%',
                cursor: 'pointer',
                border: '1px solid green',
                borderRadius: '15px',
              }}
              className="p-4 rounded"
              src={attack}
              onClick={handleAttack}
            />
          </div>
          <div className="col-md-3">
            <img
              style={{
                width: '100%',
                cursor: 'pointer',
                border: '1px solid red',
                borderRadius: '15px',
              }}
              className="p-4 rounded"
              src={defend}
              onClick={handleDefence}
            />
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="col-12 text-center">
          <br />
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={handleRandomPlay}
          >
            Random Play
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
