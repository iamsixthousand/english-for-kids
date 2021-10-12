import React from 'react';
import { CardHolderProps } from '../../interfaces/interfaces';
import './CardHolder.css';

export const CardHolder: React.FC<CardHolderProps> = ({ isPlaying }) => {
  return <div className="CardHolder">{isPlaying}</div>;
};
