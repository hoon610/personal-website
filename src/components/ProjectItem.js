import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";

function ProjectItem({ image, name, id, skills, github, link, documentation, summary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skillsArray = skills.split(",").map((skill) => skill.trim());

  const LinkButton = ({ href, icon, text, primary }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors
        ${primary 
          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20" 
          : "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600/50"}
      `}
    >
      {icon}
      {text}
    </a>
  );

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl overflow-hidden cursor-pointer shadow-lg border border-gray-700/30"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-48 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-100 mb-4">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {skillsArray.map((skill, index) => (
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/30 shadow-xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-gray-100">{name}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-200 text-2xl leading-none transition-colors"
                  >
                    ×
                  </button>
                </div>

                <img
                  src={image}
                  alt={name}
                  className="w-full h-72 object-cover rounded-lg mb-6 shadow-lg"
                />

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {link && (
                    <LinkButton 
                      href={link} 
                      icon={<ExternalLink size={18} />} 
                      text="Link" 
                      primary 
                    />
                  )}
                  {github && (
                    <LinkButton 
                      href={github} 
                      icon={<Github size={18} />} 
                      text="View Code" 
                    />
                  )}
                  {documentation && (
                    <LinkButton 
                      href={documentation} 
                      icon={<FileText size={18} />} 
                      text="Documentation" 
                    />
                  )}
                </div>

                {/* Project Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">About the Project</h3>
                  <p className="text-gray-300 leading-relaxed">{summary}</p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg text-sm font-medium
                                 border border-gray-600/30 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectItem;