import React, { useState } from 'react';
import Header from './Header';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import PublicationsSection from './PublicationsSection';
import SkillsSection from './SkillsSection';
import ProfileSection from './ProfileSection';
import { Button } from '@/components/ui/button';
import DownloadButton from './DownloadButton';

const CVSection = () => (
  <div className="flex flex-col items-center justify-center min-h-[40vh]">
    <a href="/resume.pdf" download>
      <Button variant="outline" className="flex items-center gap-2 px-4 py-2 text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
        Download PDF
      </Button>
    </a>
  </div>
);

const SECTIONS = [
  { key: 'experience', label: 'Work', component: <ExperienceSection /> },
  { key: 'education', label: 'Education', component: <EducationSection /> },
  { key: 'projects', label: 'Projects', component: <ProjectsSection /> },
  { key: 'publications', label: 'Research', component: <PublicationsSection /> },
  { key: 'skills', label: 'Skills', component: <SkillsSection /> },
  { key: 'cv', label: 'Resume', component: <CVSection /> },
];

const MainSectionsSwitcher = () => {
  const [active, setActive] = useState(SECTIONS[0].key);
  const ActiveComponent = SECTIONS.find(s => s.key === active)?.component;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-10">
      <Header />
      <ProfileSection />
      <nav
        className="w-full flex justify-center border-b border-border mb-8 bg-background sticky top-0 z-20 shadow-sm"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div
          className="flex flex-wrap md:flex-nowrap gap-2 py-3 items-center justify-center w-full min-w-0 px-2 overflow-x-auto scrollbar-none"
          style={{
            overflowX: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {SECTIONS.map(section => (
            <Button
              key={section.key}
              variant={active === section.key ? 'default' : 'ghost'}
              className="px-3 py-2 text-[clamp(0.9rem,2.5vw,1.05rem)] font-medium rounded-full transition-all whitespace-nowrap flex-shrink-0 min-w-[90px] md:min-w-[120px] md:px-5 md:py-2"
              onClick={() => setActive(section.key)}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </nav>
      <div>
        {ActiveComponent}
      </div>
    </div>
  );
};

export default MainSectionsSwitcher;
