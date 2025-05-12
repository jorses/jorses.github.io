
import React from 'react';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import DownloadButton from '@/components/DownloadButton';

const Index = () => {
  return (
    <>
      <div className="cv-container">
        <Header />
        
        <div className="grid grid-cols-1 gap-8">
          <ProfileSection />
          
          <ExperienceSection />
          
          <EducationSection />
          
          <PublicationsSection />
          
          <ProjectsSection />
          
          <SkillsSection />
        </div>
      </div>
      <DownloadButton />
    </>
  );
};

export default Index;
