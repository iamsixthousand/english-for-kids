import React from 'react';
import { CategoryCardProps } from '../../../interfaces/interfaces';
import { PUBLIC_URL } from '../../../constants/constants';
import './CategoryCard.scss';

export const CategoryCard: React.FC<CategoryCardProps> = ({ isPlaying, title, image }) => {
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
