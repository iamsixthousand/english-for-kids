/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PUBLIC_URL } from '../../../@core/constants';
import { AppState } from '../../../@core/interfaces';
import { audioPlayFunc } from '../../../@core/functions';
import './ItemCard.scss';

interface ItemCardProps {
  word: string;
  translation: string;
  audio: string;
  image: string;
  inGameAnswer: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  word,
  translation,
  audio,
  image,
  inGameAnswer,
}) => {
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false); // we need to flip one card, not all of them

  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);

  const audioPlay = () => {
    if (!isPlaying) {
      audioPlayFunc(PUBLIC_URL, audio, true);
    }
  };
  const cardFlipper = () => {
    audioPlayFunc(PUBLIC_URL, 'audio/cardflip.mp3', true);
    setIsCardFlipped(!isCardFlipped);
  };
  const flipOnMouseLeaveOrClick = () => {
    if (isCardFlipped === true) setIsCardFlipped(false);
  };

  return (
    <div data-role="Mask" onMouseLeave={flipOnMouseLeaveOrClick}>
      <div className={`CardContainer${!isCardFlipped ? '' : ' flipped'}`}>
        <div className="ItemCard front">
          <div
            role="button"
            className={`CardImageContainer${!isPlaying ? '' : ' play'}`}
            tabIndex={0}
            data-word={word}
            onClick={!isGameStarted ? audioPlay : inGameAnswer}
          >
            <img className="CardImage" alt={word} src={`${PUBLIC_URL}/${image}`} />
          </div>
          {!isPlaying && (
            <div className="CardControlPanel">
              <button
                id="soundPlayButton"
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
