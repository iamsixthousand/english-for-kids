import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../@core/interfaces';
import './LoadingLine.scss';

export const LoadingLine: React.FC = () => {
  const showLoadingLine = useSelector(
    (store: AppState) => store.elementVisibility.loadingLineVisibility
  );

  return (
    <div className={`Loader${showLoadingLine ? ' show' : ' hide'}`}>
      <div className={`LoaderElement${showLoadingLine ? ' show' : ' hide'}`} />
    </div>
  );
};
