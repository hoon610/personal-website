import React from 'react';
import ProjectItem from '../ProjectItem';
import { ProjectList } from '../../helpers/ProjectList';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectList.map((project, idx) => (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              github={project.github}
              link={project.link}
              documentation={project.documentation}
              summary={project.summary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;