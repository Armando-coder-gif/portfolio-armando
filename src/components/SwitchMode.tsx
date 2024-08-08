import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/Switch.css'; // Importa el archivo CSS para el switch

const SwitchMode: React.FC<{ onToggle: (isDarkMode: boolean) => void }> = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };

  return (
    <div className="switch-container">
      <FontAwesomeIcon
        icon={faSun}
        className={`icon ${isDarkMode ? 'dark-mode' : ''}`}
      />
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <FontAwesomeIcon
        icon={faMoon}
        className={`icon ${!isDarkMode ? '' : 'dark-mode'}`}
      />
    </div>
  );
};

export default SwitchMode;
