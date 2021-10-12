import React from 'react';
import { StatsBlockProps } from '../../interfaces/interfaces';
import './StatsBlock.css';

export const InteractiveBlock: React.FC<StatsBlockProps> = ({ correct, wrong }) => {
  return <div className="StatsBlock" />;
};
