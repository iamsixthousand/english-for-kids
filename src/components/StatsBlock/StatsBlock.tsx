import React from 'react';
import { StatsBlockProps } from '../../interfaces/interfaces';
import './StatsBlock.scss';

export const StatsBlock: React.FC<StatsBlockProps> = ({ correct, wrong }) => {
  return <div className="StatsBlock" />;
};
