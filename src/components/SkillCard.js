import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg border border-gray-600/20"
    >
      <div className="flex items-center mb-6">
        <div className="h-8 w-1 bg-blue-500 rounded-full mr-4" />
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm text-gray-200 rounded-lg text-sm 
                     border border-gray-700/50 shadow-sm hover:border-blue-500/50 
                     transition-colors duration-200 font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;