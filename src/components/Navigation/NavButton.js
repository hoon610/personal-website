import React from 'react';

const NavButton = ({ onClick, active, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'text-blue-400' : 'text-gray-300'
      } hover:text-blue-400 transition-colors duration-200 font-medium`}
    >
      {children}
    </button>
  );
};

export default NavButton;
