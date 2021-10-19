import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../cardData';
import { SideBarProps } from '../../interfaces/interfaces';
import './SideBar.scss';

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
            &#9668;
          </button>
        </div>
        <li>
          <NavLink
            to="/"
            onClick={cbToggle}
            className={`${isPlaying ? 'SideBarMenuItem play' : 'SideBarMenuItem'}`}
          >
            Main Page
          </NavLink>
        </li>

        {categories.map((elem, i) => {
          return (
            <li key={elem.title}>
              <NavLink
                to={`/category/${i + 1}`} // +1 cause of array starts on index 0
                onClick={cbToggle}
                className={`${isPlaying ? 'SideBarMenuItem play' : 'SideBarMenuItem'}`}
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
