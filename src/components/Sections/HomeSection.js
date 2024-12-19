import React from 'react';
import SocialLink from '../Social/SocialLink';
import SkillCard from '../SkillCard';
import { LinkedIn, Article, Email, GitHub } from '@mui/icons-material';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Hi, I'm Hoon</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A myrmecologist turned software engineer with a passion for problem-solving
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <SocialLink href="https://www.linkedin.com/in/hoon-kang-az" icon={<LinkedIn />} />
            <SocialLink href="https://drive.google.com/file/d/1yHsLVhMSge7rrfBlquR45-_xgU5otqSc/view?usp=sharing" icon={<Article />} />
            <SocialLink href="mailto:bhoonkang@gmail.com" icon={<Email />} />
            <SocialLink href="https://github.com/hoon610" icon={<GitHub />} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <SkillCard 
              title="Languages"
              skills={["TypeScript/JavaScript", "Python", "R", "HTML/CSS", "C#"]}
            />
            <SkillCard 
              title="Tools and Technologies"
              skills={["Git", "React", "Node.js", "GCP", "AWS", "Firebase", "Docker"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;