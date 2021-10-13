import React from 'react';
import { ItemCardProps } from '../../../interfaces/interfaces';
import './ItemCard.css';

export const ItemCard: React.FC<ItemCardProps> = ({
  isPlaying,
  word,
  translation,
  audio,
  image,
}) => {
  return (
    <div className="itemCard">
      {isPlaying}
      <div>{image}</div>
      <div>{word}</div>
      <div>{translation}</div>
      <div>{audio}</div>
    </div>
  );
};
