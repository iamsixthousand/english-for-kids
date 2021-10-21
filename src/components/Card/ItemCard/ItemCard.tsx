import React, { useState } from 'react';
import { ItemCardProps } from '../../../interfaces/interfaces';
import { PUBLIC_URL } from '../../../constants/constants';
import './ItemCard.scss';

export const ItemCard: React.FC<ItemCardProps> = ({
  isPlaying,
  word,
  translation,
  audio,
  image,
  inGameAnswer,
  isGameStarted,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const audioPlay = () => {
    if (!isPlaying) new Audio(`${PUBLIC_URL}/${audio}`).play();
  };
  const cardFlipper = () => {
    new Audio(`${PUBLIC_URL}/audio/cardflip.mp3`).play();
    setIsFlipped(!isFlipped);
  };
  const flipOnMouseLeaveOrClick = () => {
    if (isFlipped === true) setIsFlipped(false);
  };

  return (
    <div data-role="Mask" onMouseLeave={flipOnMouseLeaveOrClick}>
      <div className={!isFlipped ? 'CardContainer' : 'CardContainer flipped'}>
        <div className="ItemCard front">
          <div
            role="button"
            className={!isPlaying ? 'CardImageContainer' : 'CardImageContainer play'}
            tabIndex={0}
            data-word={word}
            onKeyDown={audioPlay}
            onClick={!isGameStarted ? audioPlay : inGameAnswer}
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
                  alt="play-sound"
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
                  alt="watch-translation"
                  src={`${PUBLIC_URL}/eye-button.png`}
                />
              </button>
            </div>
          )}
        </div>
        <div className="ItemCard back">
          <div
            role="button"
            className="CardImageContainer"
            tabIndex={0}
            onKeyDown={flipOnMouseLeaveOrClick}
            onClick={flipOnMouseLeaveOrClick}
          >
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
