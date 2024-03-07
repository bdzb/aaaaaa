import React, { useState } from 'react';
import './card.css';
import jsonData from './crops.json';
import Info from './Info.jsx';

const Card = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (cardInfo) => {
    console.log(`Clicked on ${cardInfo.crop}`);
    setClickedCard(cardInfo); // Set the clicked card's information in state
  };

  const elements = jsonData
    .filter(item => item.type === 'rabi')
    .map(item => (
      <div key={item.id} className="card" onClick={() => handleCardClick(item)}>
        <a href="#"> {/* Replace with appropriate link or remove if not needed */}
          <div className="cards">
            <p className='ca'>{item.crop.toUpperCase()}</p>
            <img
              className='img'
              src={`src/imag/${item.crop}.png`} // Check image path format
              alt={item.crop || 'Image not found'} // Set alt text with fallback
            />
          </div>
        </a>
      </div>
    ));

  return (
    <div id='cardyb'>
      {elements}
      {clickedCard && <Info className="Info" cardInfo={clickedCard} />}
    </div>
  );
};

export default Card;
