import React, { useState } from 'react';
// import { Switch, makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
// import FormGroup from '@material-ui/core/FormGroup';
// import { alpha, styled } from '@material-ui/core/styles';
import Switch from 'react-switch';
import { HeaderProps } from '../../interfaces/interfaces';
import './Header.scss';

export const Header: React.FC<HeaderProps> = ({ sideBarToggle, setModeToggle }) => {
  const [checked, toggleCheck] = useState(false);
  const checkToggle = () => {
    setModeToggle();
    toggleCheck(!checked);
  };
  return (
    <div className="Header">
      <div role="button" className="SideBarOpenButton" onClick={sideBarToggle} aria-hidden="true">
        |||
      </div>
      <div className="ModeSelector">
        <span className="ModeText">{checked ? 'PLAY' : 'TRAIN'}</span>
        <Switch
          onHandleColor="#FFFFFF"
          onColor="#99AE99"
          uncheckedIcon={false}
          checkedIcon={false}
          checked={checked}
          className="Switch"
          onChange={checkToggle}
          height={20}
          width={48}
          handleDiameter={18}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
          activeBoxShadow="0px 0px 1px 5px rgba(0, 52, 0, 0.4)"
        />
      </div>
    </div>
  );
};
