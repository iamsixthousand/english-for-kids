import React, { useEffect } from 'react';
import { PageInfoBlockProps } from '../../interfaces/interfaces';
import './PageInfoBlock.scss';

export const PageInfoBlock: React.FC<PageInfoBlockProps> = ({
  isGameStarted,
  isPlaying,
  id = undefined,
  newGameFunc,
  restartGameFunc,
  replayWord,
}) => {
  let textSeen: string;
  let otherText: string;

  useEffect(() => {
    if (isPlaying) window.scrollTo(0, 0);
  }, [isPlaying]);

  switch (id) {
    case '1':
      textSeen = 'Action (Set A)';
      break;
    case '2':
      textSeen = 'Action (Set B)';
      break;
    case '3':
      textSeen = 'Animal (Set A)';
      break;
    case '4':
      textSeen = 'Animal (Set B)';
      break;
    case '5':
      textSeen = 'Clothes';
      break;
    case '6':
      textSeen = 'Emotions';
      break;
    default:
      textSeen = '';
      break;
  }

  switch (isPlaying) {
    case true:
      otherText = 'Now show your skills!';
      break;
    default:
      otherText = 'Feel free to practice!';
  }

  return (
    <div className="InteractiveBlock">
      <div>
        <div className="InteractiveBox">
          {!id && <h1>Hello friend! Let&apos;s learn english together.</h1>}
        </div>
        <div className="InteractiveBox mini">{!id && <h2>Choose a category!</h2>}</div>
        <div className={id ? 'InteractiveBox' : 'InteractiveBox mini'}>
          <h1>{id && `${textSeen} category. ${otherText}`}</h1>
        </div>
      </div>
      <div
        className={isPlaying && id && !isGameStarted ? 'ButtonContainer show' : 'ButtonContainer'}
      >
        <button
          type="button"
          className={isGameStarted || !isPlaying ? 'StartGameButton hide' : 'StartGameButton'}
          onClick={newGameFunc}
        >
          start!
        </button>
      </div>
      <div
        className={id && isGameStarted ? 'inGameButtonsContainer show' : 'inGameButtonsContainer'}
      >
        <button
          type="button"
          className={isGameStarted ? 'RestartGameButton' : 'RestartGameButton hide'}
          onClick={restartGameFunc}
        >
          restart
        </button>
        <button
          type="button"
          className={isGameStarted ? 'ReplayButton' : 'ReplayButton hide'}
          onClick={replayWord}
        >
          replay
        </button>
      </div>
    </div>
  );
};
