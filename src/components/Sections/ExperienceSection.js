import React from 'react';
import ExperienceTimeline from '../ExperienceSection';

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <ExperienceTimeline />
      </div>
    </section>
  );
};

export default ExperienceSection;