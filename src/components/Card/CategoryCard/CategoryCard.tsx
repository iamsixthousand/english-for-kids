import React from 'react';
import { CategoryCardProps } from '../../../interfaces/interfaces';
import './CategoryCard.css';

export const CategoryCard: React.FC<CategoryCardProps> = ({ isPlaying, title, image }) => {
  return (
    <div className="CategoryCard">
      {isPlaying}
      <div>{image}</div>
      <div>{title}</div>
    </div>
  );
};
