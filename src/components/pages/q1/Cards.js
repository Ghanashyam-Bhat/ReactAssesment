import React, { useState } from 'react';
import './Cards.css';

const Cards = ({ amount }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = Array(amount).fill('');

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`card ${selectedCard === index ? 'selected' : ''}`}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default Cards;
