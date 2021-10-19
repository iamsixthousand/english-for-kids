import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../Card/CategoryCard/CategoryCard';
import { ItemCard } from '../Card/ItemCard/ItemCard';
import { CardHolderProps } from '../../interfaces/interfaces';
import { categories, cards } from '../../cardData';
import './CardHolder.scss';

export const CardHolder: React.FC<CardHolderProps> = ({
  isPlaying,
  id,
  isGameStarted,
  gameStepsFunc,
}) => {
  return (
    <div className={!id ? 'CardHolder' : 'CardHolder word'}>
      {!id &&
        categories.map((elem, i) => {
          return (
            <div className="Card" key={elem.title}>
              <Link to={`category/${i + 1}`} className="Link">
                <CategoryCard isPlaying={isPlaying} title={elem.title} image={elem.image} />
              </Link>
            </div>
          );
        })}
      {id &&
        cards[Number(id) - 1].map((elem) => {
          return (
            <ItemCard
              inGameAnswer={gameStepsFunc}
              isPlaying={isPlaying}
              word={elem.word}
              translation={elem.translation}
              image={elem.image}
              audio={elem.audioSrc}
              key={elem.word}
              isGameStarted={isGameStarted}
            />
          );
        })}
    </div>
  );
};
