import React from 'react';
import { NavLink } from 'react-router-dom';
import { firstLetterLowercase } from '../helpers/utils';

const tabs = ['Home', 'Battle', 'Popular', 'Contacts'];

export default function Nav() {
  return (
    <ul className="nav">
      {tabs.map((tab, index) => (
        <li key={index}>
          <NavLink exact to={`/${tab !== 'Home' ? firstLetterLowercase(tab) : ''}`}>
            {tab}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
