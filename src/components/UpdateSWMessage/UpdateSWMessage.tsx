import React from 'react';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { AppState } from '../../@core/interfaces';
import './UpdateSWMessage.scss';

export interface UpdateSWMessageProps {
  onReloadCancel: () => void;
}

export const UpdateSWMessage: React.FC<UpdateSWMessageProps> = ({ onReloadCancel }) => {
  const swModaleVisible = useSelector((store: AppState) => store.elementVisibility.swModaleVisible);

  return (
    <div className={`UpdateSWContainer${swModaleVisible ? ' view' : ' hide'}`}>
      <div className="UpdateSWMessage">
        <span>{i18next.t('swReloadMessage')}</span>
        <div className="UpdateSWButtons">
          <button className="UpdateButton" id="okButton" type="button">
            {i18next.t('ok')}
          </button>
          <button className="UpdateButton" type="button" onClick={onReloadCancel}>
            {i18next.t('cancel')}
          </button>
        </div>
      </div>
    </div>
  );
};
