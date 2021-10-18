import React, { useState } from 'react';
import { ItemCardProps } from '../../../interfaces/interfaces';
import './ItemCard.scss';

export const ItemCard: React.FC<ItemCardProps> = ({
  isPlaying,
  word,
  translation,
  audio,
  image,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const { PUBLIC_URL } = process.env;
  const audioPlay = () => {
    if (!isPlaying) new Audio(`${PUBLIC_URL}/${audio}`).play();
  };
  const cardFlipper = () => {
    new Audio(`${PUBLIC_URL}/audio/cardflip.mp3`).play();
    setIsFlipped(!isFlipped);
  };
  const flipOnMouseLeave = () => {
    if (isFlipped === true) setIsFlipped(false);
  };

  return (
    <div data-role="Mask" onMouseLeave={flipOnMouseLeave}>
      <div className={!isFlipped ? 'CardContainer' : 'CardContainer flipped'}>
        <div className="ItemCard front">
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
                style={{ border: 'none', backgroundColor: 'rgb(248, 241, 241)' }}
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
              <button
                style={{ border: 'none', backgroundColor: 'rgb(248, 241, 241)' }}
                type="button"
                onClick={cardFlipper}
              >
                <img
                  className="ControlPanelEyeButton"
                  alt="watch"
                  src={`${PUBLIC_URL}/eye-button.png`}
                />
              </button>
            </div>
          )}
        </div>
        <div className="ItemCard back">
          <div className="CardImageContainer">
            <img className="CardImage" alt={word} src={`${PUBLIC_URL}/${image}`} />
          </div>
          {!isPlaying && (
            <div className="CardControlPanel flipped">
              <span className="ControlPanelText">{translation}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
