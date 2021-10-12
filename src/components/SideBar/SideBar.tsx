import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../cardData';
import { SideBarProps } from '../../interfaces/interfaces';
import './SideBar.css';

export const SideBar: React.FC<SideBarProps> = ({ isPlaying, cbToggle }) => {
  return (
    <div className="SideBarContainer">
      <ul>
        <div
          style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'end' }}
        >
          <button
            type="button"
            className={`${isPlaying ? 'SideBarMenuItem close play' : 'SideBarMenuItem close'}`}
            onClick={cbToggle}
          >
            {'\u0086'}
          </button>
        </div>
        <li>
          <NavLink to="/" className={`${isPlaying ? 'SideBarMenuItem play' : 'SideBarMenuItem'}`}>
            Main Page
          </NavLink>
        </li>

        {categories.map((elem, i) => {
          return (
            <li>
              <NavLink
                to={`/category/${i + 1}`} // +1 cause of array starts on index 0
                className={`${isPlaying ? 'SideBarMenuItem play' : 'SideBarMenuItem'}`}
              >
                {elem}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
