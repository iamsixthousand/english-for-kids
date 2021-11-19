/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prompt } from 'react-router';
import { CategoryCard } from '../Card/CategoryCard/CategoryCard';
import { ItemCard } from '../Card/ItemCard/ItemCard';
import { categories, cards } from '../../cardData';
import { toArrayId } from '../../@core/functions';
import './CardHolder.scss';

interface CardHolderProps {
  offlineContentVisible: boolean;
  isOffline: boolean;
  isPlaying: boolean;
  id: string;
  isGameStarted: boolean;
  gameStepsFunc: () => void;
  isBlocking: boolean;
}

export const CardHolder: React.FC<CardHolderProps> = ({
  offlineContentVisible,
  isOffline,
  isBlocking,
  isPlaying,
  id,
  isGameStarted,
  gameStepsFunc,
}) => {
  const [forReload, setForReload] = useState(false);

  const pageReload = () => {
    setForReload(!forReload);
  };

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
      <div className={`CardHolder${!id ? '' : !offlineContentVisible ? ' word' : ' offline'}`}>
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
          !offlineContentVisible &&
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
        {id && offlineContentVisible && (
          <div className="offlineContent">
            <h3 className="offlineContentMessage">
              OOPS! The page is offline.
              <br />
              Please check your internet connection and reload the page!
            </h3>
            <button type="button" className="offlineContentReloadButton" onClick={pageReload}>
              RELOAD
            </button>
          </div>
        )}
      </div>
    </>
  );
};
