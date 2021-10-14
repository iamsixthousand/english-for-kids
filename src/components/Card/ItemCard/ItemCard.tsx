import React from 'react';
import { ItemCardProps } from '../../../interfaces/interfaces';
import './ItemCard.css';

export const ItemCard: React.FC<ItemCardProps> = ({
  isPlaying,
  word,
  // translation,
  // audio,
  image,
}) => {
  const { PUBLIC_URL } = process.env;
  return (
    <>
      <div className="itemCard front">
        {isPlaying}
        <div className="CardImageContainer">
          <img className="CardImage" alt={word} src={`${PUBLIC_URL}/${image}`} />
        </div>
        <div className="CardControlPanel">{word}</div>
      </div>
      {/* <div className="itemCard back">
        {isPlaying}
        <div className="CardImageContainer">
          <img className="CardImageContainer" alt={word} src={image}/>
        </div>
        <div className="CardControlPanel">{translation}</div>
  </div> */}
    </>
  );
};
