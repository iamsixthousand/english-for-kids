import React from 'react';
import { InteractiveBlockProps } from '../../interfaces/interfaces';
import './InteractiveBlock.css';

export const InteractiveBlock: React.FC<InteractiveBlockProps> = ({ isPlaying, id }) => {
  let textSeen: string;
  let otherText: string;
  const isPlay = true; // для проверки без switcher

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

  switch (isPlay) {
    case true:
      otherText = 'Now show your skills!';
      break;
    default:
      otherText = 'Feel free to practice!';
  }

  return (
    <div className="InteractiveBlock">
      {isPlaying}
      {id !== undefined ? `${textSeen} category. ${otherText}` : ' Choose a category!'}
      {isPlay && id !== undefined && (
        <button type="button" className="StartGameButton">
          START GAME
        </button>
      )}
    </div>
  );
};
