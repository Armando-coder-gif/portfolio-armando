// src/components/Menu.tsx
import React from 'react';
import '../styles/Menu.css';
import SwitchMode from './SwitchMode';
import { useDarkMode } from '../context/DarkMode';

const Menu: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`menu-container ${isDarkMode ? 'dark' : ''}`}>
      <ul className="menu-list">
        <li className="menu-item"><a href="#about" className="menu-link">About</a></li>
        <li className="menu-item"><a href="#work" className="menu-link">Work Experience</a></li>
        <li className="menu-item"><a href="#contact" className="menu-link">Contact</a></li>
      </ul>
      <SwitchMode onToggle={toggleDarkMode} />
    </div>
  );
};

export default Menu;
