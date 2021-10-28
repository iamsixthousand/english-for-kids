import React, { useState } from 'react';
import { PUBLIC_URL } from '../../../@core/constants';
import { audioPlayFunc } from '../../../@core/functions';
import './ItemCard.scss';

interface ItemCardProps {
  word: string;
  translation: string;
  audio: string;
  image: string;
  isPlaying: boolean;
  inGameAnswer: () => void;
  isGameStarted: boolean;
}

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
    if (!isPlaying) audioPlayFunc(PUBLIC_URL, audio);
  };
  const cardFlipper = () => {
    audioPlayFunc(PUBLIC_URL, 'audio/cardflip.mp3');
    setIsFlipped(!isFlipped);
  };
  const flipOnMouseLeaveOrClick = () => {
    if (isFlipped === true) setIsFlipped(false);
  };

  return (
    <div data-role="Mask" onMouseLeave={flipOnMouseLeaveOrClick}>
      <div className={`CardContainer${!isFlipped ? '' : ' flipped'}`}>
        <div className="ItemCard front">
          <div
            role="button"
            className={`CardImageContainer${!isPlaying ? '' : ' play'}`}
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
