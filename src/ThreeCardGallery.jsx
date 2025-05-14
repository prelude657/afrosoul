import React, { useState } from 'react';
import './ThreeCardGallery.css';
import afrosoul from './Photos/afrosoul.png';

const cards = [
  {
    id: 1,
    title: 'Performer 1',
    image: afrosoul,
    bio: 'Performer 1 is an amazing artist known for energetic performances.',
  },
  {
    id: 2,
    title: 'Performer 2',
    image: afrosoul,
    bio: 'Performer 2 blends Afrobeat and R&B into a unique sound.',
  },
  {
    id: 3,
    title: 'Performer 3',
    image: afrosoul,
    bio: 'Performer 3 is a DJ and producer known for setting the vibe at Afrosoul.',
  },
];

const ThreeCardGallery = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="card-gallery">
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <button onClick={() => setSelectedCard(card)} className="info-button">
            More Info
          </button>
        </div>
      ))}

      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedCard.image} alt={selectedCard.title} />
            <p>{selectedCard.bio}</p>
            <button onClick={() => setSelectedCard(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeCardGallery;
