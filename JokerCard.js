import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './JokeCard.css';

const JokeCard = ({ setup, punchline }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card front" onClick={handleClick}>
        <p>{setup}</p>
      </div>
      <div className="card back" onClick={handleClick}>
        <p>{punchline}</p>
      </div>
    </ReactCardFlip>
  );
};

export default JokeCard;
