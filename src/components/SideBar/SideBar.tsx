import React from 'react';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { categories } from '../../cardData';
import './SideBar.scss';
import { AppState } from '../../@core/interfaces';

interface SideBarProps {
  cbToggle: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ cbToggle }) => {
  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);
  return (
    <div className="SideBarContainer">
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          marginTop: '10px',
        }}
      >
        <button
          type="button"
          className={`SideBarMenuItem${isPlaying ? ' close play' : ' close'}`}
          onClick={cbToggle}
        >
          &#9668;
        </button>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            onClick={cbToggle}
            className={`SideBarMenuItem${isPlaying ? ' play' : ''}`}
          >
            {i18next.t('mainPage')}
          </NavLink>
        </li>

        {categories.map((elem, i) => {
          return (
            <li key={elem.title}>
              <NavLink
                to={`/category/${i + 1}`} // +1 cause of array starts on index 0
                onClick={cbToggle}
                className={`SideBarMenuItem${isPlaying ? ' play' : ''}`}
              >
                {elem.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
