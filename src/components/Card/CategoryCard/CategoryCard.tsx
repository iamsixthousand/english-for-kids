import React from 'react';
import { PUBLIC_URL } from '../../../@core/constants';
import './CategoryCard.scss';

interface CategoryCardProps {
  title: string;
  image: string;
  isPlaying: boolean;
}

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
