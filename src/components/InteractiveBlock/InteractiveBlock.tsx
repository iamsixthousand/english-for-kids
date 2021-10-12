import React from 'react';
import { InteractiveBlockProps } from '../../interfaces/interfaces';
import './InteractiveBlock.css';

export const InteractiveBlock: React.FC<InteractiveBlockProps> = ({ isPlaying, id }) => {
  return (
    <div className="InteractiveBlock">
      {isPlaying}
      {id}
    </div>
  );
};
