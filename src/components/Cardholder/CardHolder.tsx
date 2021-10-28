import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Prompt } from 'react-router';
import { CategoryCard } from '../Card/CategoryCard/CategoryCard';
import { ItemCard } from '../Card/ItemCard/ItemCard';
import { categories, cards } from '../../cardData';
import { toArrayId } from '../../@core/functions';
import './CardHolder.scss';

interface CardHolderProps {
  isPlaying: boolean;
  id: string;
  isGameStarted: boolean;
  gameStepsFunc: () => void;
  isBlocking: boolean;
}

export const CardHolder: React.FC<CardHolderProps> = ({
  isBlocking,
  isPlaying,
  id,
  isGameStarted,
  gameStepsFunc,
}) => {
  useEffect(() => {
    if (isGameStarted) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = null;
    }
  });

  return (
    <>
      <Prompt when={isBlocking} message="You will lose your result. Are you sure?" />
      <div className={`CardHolder${!id ? '' : ' word'}`}>
        {!id &&
          categories.map((elem, i) => {
            const indexToId = i + 1; // for array index to match route
            return (
              <div className="Card" key={elem.title}>
                <Link to={`category/${indexToId}`} className="Link">
                  <CategoryCard isPlaying={isPlaying} title={elem.title} image={elem.image} />
                </Link>
              </div>
            );
          })}
        {id &&
          cards[toArrayId(id)].map((elem) => {
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
    </>
  );
};
