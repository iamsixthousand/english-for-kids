/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Prompt } from 'react-router';
import { reloadOfflineAC } from '../../state/offlineAC';
import { CategoryCard } from '../Card/CategoryCard/CategoryCard';
import { ItemCard } from '../Card/ItemCard/ItemCard';
import { categories, cards } from '../../cardData';
import { toArrayId } from '../../@core/functions';
import { AppState } from '../../@core/interfaces';
import './CardHolder.scss';

interface CardHolderProps {
  id: string;
  gameStepsFunc: () => void;
  // eslint-disable-next-line no-unused-vars
  loaderVisibility: (flag: boolean) => void;
}

export const CardHolder: React.FC<CardHolderProps> = ({ id, gameStepsFunc, loaderVisibility }) => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);
  const isBlocking = useSelector((store: AppState) => store.gameProcess.isBlocking);
  const offlineContentVisible = useSelector(
    (store: AppState) => store.offline.offlineContentVisible
  );
  const forReload = useSelector((store: AppState) => store.offline.forReload);
  const language = useSelector((store: AppState) => store.appConfig.language);

  const pageReload = () => {
    dispatch(reloadOfflineAC(!forReload));
    loaderVisibility(true);
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
                  <CategoryCard title={elem.title} image={elem.image} />
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
                word={elem.word}
                translation={elem.translation}
                image={elem.image}
                audio={elem.audioSrc}
                key={elem.word}
              />
            );
          })}
        {id && offlineContentVisible && (
          <div className="offlineContent">
            <h3 className="offlineContentMessage">
              {language && i18next.t('offlineMSG')}
              <br />
              {language && i18next.t('checkConnectionMSG')}
            </h3>
            <button type="button" className="offlineContentReloadButton" onClick={pageReload}>
              {language && i18next.t('reload')}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
