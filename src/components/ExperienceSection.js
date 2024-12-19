import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../helpers/Experiences';

const ExperienceCard = ({ role, company, date, description, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600/20 shadow-lg relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full 
                    border-4 border-gray-900 hidden md:block" />
      
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-100">{role}</h3>
            <p className="text-blue-400 font-medium">{company}</p>
          </div>
          <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
            {date}
          </span>
        </div>
        
        <ul className="list-disc text-gray-300 leading-relaxed pl-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="pl-2">{item}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-900/50 text-gray-300 rounded-lg text-xs font-medium
                       border border-gray-600/30 backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {


  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-8 bottom-8 w-px bg-gray-700 hidden md:block" />
      
      <div className="space-y-8 pl-0 md:pl-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;