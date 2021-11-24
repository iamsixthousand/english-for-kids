import React from 'react';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import './UpdateSWMessage.scss';
import { AppState } from '../../@core/interfaces';

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
            OK
          </button>
          <button className="UpdateButton" type="button" onClick={onReloadCancel}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};
