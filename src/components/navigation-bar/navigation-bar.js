import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationBarClass from './navigation-bar.css';

export default function NavigationBar() {
  return (
    <div className={NavigationBarClass.navigationBar}>
      <div className={NavigationBarClass.navigationBarInnerContainer}>
        <h1>Tour Of Heroes</h1>
        <nav className={NavigationBarClass.nav}>
          <NavLink exact="true" to="/" activeclassname={NavigationBarClass.active}>Dashboard</NavLink>
          <NavLink exact="true" to="/heroes" activeclassname={NavigationBarClass.active}>Heroes</NavLink>
        </nav>
      </div>
    </div>
  );
}