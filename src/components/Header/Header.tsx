import React from 'react';
import Switch from 'react-switch';
import { PUBLIC_URL } from '../../@core/constants';
import './Header.scss';

interface HeaderProps {
  offlineContentVisible: boolean;
  sideBarToggle: () => void;
  setModeToggle: () => void;
  isPlaying: boolean;
  isGameStarted: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsBlockingToggle: (arg: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  offlineContentVisible,
  setIsBlockingToggle,
  isGameStarted,
  isPlaying,
  sideBarToggle,
  setModeToggle,
}) => {
  const checkToggle = () => {
    if (isGameStarted && isPlaying) {
      setIsBlockingToggle(false);
      setModeToggle();
    } else setModeToggle();
  };
  return (
    <div className="Header" style={{ backgroundImage: `url(${PUBLIC_URL}/background.jpg)` }}>
      <div role="button" className="SideBarOpenButton" onClick={sideBarToggle} aria-hidden="true">
        |||
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
