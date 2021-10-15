import React from 'react';
import { CategoryCardProps } from '../../../interfaces/interfaces';
import './CategoryCard.scss';

export const CategoryCard: React.FC<CategoryCardProps> = ({ isPlaying, title, image }) => {
  const { PUBLIC_URL } = process.env;
  return (
    <div className="CategoryCard">
      {isPlaying}
      <div className="CardImageContainer">
        <img className="CardImage" alt={title} src={`${PUBLIC_URL}/${image}`} />
      </div>
      <div className="CategoryText">{title}</div>
    </div>
  );
};
