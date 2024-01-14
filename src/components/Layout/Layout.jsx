import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li className={css.navigationItem}>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.navigationItem}>
              <NavLink
                className={({ isActive }) =>
                  `${css.navLink} ${isActive ? css.active : ''}`
                }
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};
