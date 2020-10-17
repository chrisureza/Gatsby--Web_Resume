import React from 'react';
// import SkillBar from 'react-skills-bars';
import loadable from "@loadable/component";
import './ListSkills.scss';

const ListSkills = ({ skills, colors }) => {

  const SkillBar = loadable(() => import('react-skills-bars'));

  return (
    <div className="list-skills">
      <SkillBar skills={skills} colors={colors} animationDelay={0} animationDuration={1500} />
    </div>
  );
};

export default ListSkills;