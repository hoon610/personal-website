import React from 'react';

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialLink;