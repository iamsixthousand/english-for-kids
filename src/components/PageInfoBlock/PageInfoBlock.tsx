import React from 'react';
import { PageInfoBlockProps } from '../../interfaces/interfaces';
import './PageInfoBlock.scss';

export const PageInfoBlock: React.FC<PageInfoBlockProps> = ({
  isPlaying,
  id = undefined,
  gameStartedToggle,
}) => {
  let textSeen: string;
  let otherText: string;

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
        {isPlaying}
        <div className="InteractiveBox">
          {id === undefined && <h1>Hello friend! Let&apos;s learn english together.</h1>}
        </div>
        <div className="InteractiveBox mini">{id === undefined && <h2>Choose a category!</h2>}</div>
        <div className={id ? 'InteractiveBox' : 'InteractiveBox mini'}>
          <h1>{id !== undefined && `${textSeen} category. ${otherText}`}</h1>
        </div>
      </div>
      <div className="ButtonContainer">
        {isPlaying && id !== undefined && (
          <button type="button" className="StartGameButton" onClick={gameStartedToggle}>
            start!
          </button>
        )}
      </div>
    </div>
  );
};
