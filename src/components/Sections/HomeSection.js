import React from 'react';
import SocialLink from '../Social/SocialLink';
import SkillCard from '../SkillCard';
import { LinkedIn, Article, Email, GitHub } from '@mui/icons-material';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">Hi, I'm Hoon</h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            A myrmecologist turned software engineer with a passion for problem-solving
          </p>
          
          <div className="flex justify-center mb-12 space-x-6">
            <SocialLink href="https://www.linkedin.com/in/hoon-kang-az" icon={<LinkedIn />} />
            <SocialLink href="https://drive.google.com/file/d/1HZmpFTYLKMLpKI_1vgw7c0h-K2IISEDU/view?usp=sharing" icon={<Article />} />
            <SocialLink href="mailto:bhoonkang@gmail.com" icon={<Email />} />
            <SocialLink href="https://github.com/hoon610" icon={<GitHub />} />
          </div>

          <div className="grid gap-8 mt-16 md:grid-cols-2">
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