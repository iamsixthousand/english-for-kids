import React from 'react';
import { useSelector } from 'react-redux';
import { PUBLIC_URL } from '../../../@core/constants';
import { AppState } from '../../../@core/interfaces';
import './CategoryCard.scss';

interface CategoryCardProps {
  title: string;
  image: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);

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
