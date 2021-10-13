import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../Card/CategoryCard/CategoryCard';
import { ItemCard } from '../Card/ItemCard/ItemCard';
import { CardHolderProps } from '../../interfaces/interfaces';
import { categories, cards } from '../cardData';
import './CardHolder.css';

export const CardHolder: React.FC<CardHolderProps> = ({ isPlaying, id }) => {
  return (
    <div className={id === undefined ? 'CardHolder' : 'CardHolder word'}>
      {isPlaying}
      {id === undefined &&
        categories.map((elem, i) => {
          return (
            <div className="Card">
              <Link to={`category/${i + 1}`}>
                <CategoryCard isPlaying={isPlaying} title={elem.title} image={elem.image} />
              </Link>
            </div>
          );
        })}
      {id !== undefined &&
        cards[Number(id) - 1].map((elem) => {
          return (
            <div className="Card">
              <ItemCard
                isPlaying={isPlaying}
                word={elem.word}
                translation={elem.translation}
                image={elem.image}
                audio={elem.audioSrc}
              />
            </div>
          );
        })}
    </div>
  );
};
