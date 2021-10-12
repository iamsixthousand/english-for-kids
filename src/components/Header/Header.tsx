import React from 'react';
import { HeaderProps } from '../../interfaces/interfaces';
import './Header.css';

export const Header: React.FC<HeaderProps> = ({ sideBarToggle, setModeToggle }) => {
  return (
    <div className="Header">
      <div role="button" className="SideBarOpenButton" onClick={sideBarToggle} aria-hidden="true">
        |||
      </div>
      <div role="button" className="ModeSelector" onClick={setModeToggle} aria-hidden="true">
        MODE
      </div>
    </div>
  );
};
