import React from 'react';
import { ItemCardProps } from '../../../interfaces/interfaces';
import './ItemCard.scss';

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
        <div className="CardControlPanel">
          <img
            className="ControlPanelPlayButton"
            alt="play"
            src={`${PUBLIC_URL}/play-button.png`}
          />
          <span className="ControlPanelText">{word}</span>
          <img className="ControlPanelEyeButton" alt="watch" src={`${PUBLIC_URL}/eye-button.png`} />
        </div>
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
