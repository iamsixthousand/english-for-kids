import React from 'react';
import Switch from 'react-switch';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { PUBLIC_URL } from '../../@core/constants';
import { AppState } from '../../@core/interfaces';
import './Header.scss';

interface HeaderProps {
  sideBarToggle: () => void;
  setModeToggle: () => void;
  // eslint-disable-next-line no-unused-vars
  setIsBlockingToggle: (arg: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  setIsBlockingToggle,
  sideBarToggle,
  setModeToggle,
}) => {
  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);
  const offlineContentVisible = useSelector(
    (store: AppState) => store.offline.offlineContentVisible
  );
  const language = useSelector((store: AppState) => store.appConfig.language);

  const checkToggle = () => {
    if (isGameStarted && isPlaying) {
      setIsBlockingToggle(false);
      setModeToggle();
    } else setModeToggle();
  };
  return (
    <div className="Header" style={{ backgroundImage: `url(${PUBLIC_URL}/background.jpg)` }}>
      <div
        role="button"
        id="sideBarOpenButton"
        className="SideBarOpenButton"
        onClick={sideBarToggle}
        aria-hidden="true"
      >
        {language && i18next.t('sidebarSticks')}
      </div>
      {!offlineContentVisible && (
        <div className="ModeSelector">
          <span className="ModeText">{isPlaying ? 'PLAY' : 'TRAIN'}</span>
          <Switch
            onHandleColor="#FFFFFF"
            onColor="#99AE99"
            uncheckedIcon={false}
            checkedIcon={false}
            checked={isPlaying}
            className="Switch"
            onChange={checkToggle}
            height={20}
            width={48}
            handleDiameter={18}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
            activeBoxShadow="0px 0px 1px 5px rgba(0, 52, 0, 0.4)"
          />
        </div>
      )}
    </div>
  );
};
