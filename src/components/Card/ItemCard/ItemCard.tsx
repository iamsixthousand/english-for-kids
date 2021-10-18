import React from 'react';
import { ItemCardProps } from '../../../interfaces/interfaces';
import './ItemCard.scss';

export const ItemCard: React.FC<ItemCardProps> = ({
  isPlaying,
  word,
  // translation,
  audio,
  image,
}) => {
  const { PUBLIC_URL } = process.env;
  const audioPlay = () => {
    if (!isPlaying) new Audio(`${PUBLIC_URL}/${audio}`).play();
  };

  return (
    <>
      <div className="itemCard front">
        {isPlaying}
        <div
          role="button"
          className={!isPlaying ? 'CardImageContainer' : 'CardImageContainer play'}
          tabIndex={0}
          onKeyDown={audioPlay}
          onClick={audioPlay}
        >
          <img className="CardImage" alt={word} src={`${PUBLIC_URL}/${image}`} />
        </div>
        {!isPlaying && (
          <div className="CardControlPanel">
            <button
              style={{ border: 'none', backgroundColor: 'none' }}
              type="button"
              onClick={audioPlay}
            >
              <img
                className="ControlPanelPlayButton"
                alt="play"
                src={`${PUBLIC_URL}/play-button.png`}
              />
            </button>
            <span className="ControlPanelText">{word}</span>
            <img
              className="ControlPanelEyeButton"
              alt="watch"
              src={`${PUBLIC_URL}/eye-button.png`}
            />
          </div>
        )}
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
