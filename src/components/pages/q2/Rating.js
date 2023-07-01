import React, { useState, useEffect } from 'react';
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const stars = Array(5).fill('');

  useEffect(() => {
    try {
      const storedRating = localStorage.getItem('rating');
      const parsedRating = parseInt(storedRating, 10);
      setRating(parsedRating || 0);
    } catch (error) {
      setRating(0);
    }
  }, []);

  const handleStarClick = (index) => {
    
    localStorage.setItem('rating', (index+1).toString());
    setRating(index + 1);
  };

  return (
    <div id="rating">
      {stars.map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'rated' : ''}`}
          onClick={() => handleStarClick(index)}
        >
          <svg className="star-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.31 6.91.95-5 4.86 1.18 6.88-6.18-3.25-6.18 3.25 1.18-6.88-5-4.86 6.91-.95z"/>
          </svg>
        </span>
      ))}
    </div>
  );
};

export default Rating;
