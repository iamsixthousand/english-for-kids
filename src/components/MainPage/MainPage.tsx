import React from 'react';
import { useParams } from 'react-router-dom';
import { InteractiveBlock } from '../InteractiveBlock/InteractiveBlock';
import { CardHolder } from '../Cardholder/CardHolder';
import { MainPageProps, MatchParams } from '../../interfaces/interfaces';
import './MainPage.scss';

export const MainPage: React.FC<MainPageProps> = ({ isPlaying }) => {
  const idParam = useParams<MatchParams>();

  return (
    <div className="MainPage">
      <InteractiveBlock isPlaying={isPlaying} id={idParam.id} />
      <CardHolder isPlaying={isPlaying} isItemCard={false} id={idParam.id} />
    </div>
  );
};
