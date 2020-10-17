import React from "react";
import { Container } from 'react-bootstrap';
import BasicLayout from '../layouts/BasicLayout';
import ListSkills from '../components/ListSkills';
import {
	frontendSkills,
	frontendSkillsColors,
	backendSkills,
	backendSkillsColors,
	osSkills,
	osSkillsColors
} from '../utils/skills';
import './skills.scss';

const IndexPage = () => {
	return (
		<BasicLayout menuColor="#000">
			<Container className="skills">
				<div className="skills__block">
					<h2>Front-End</h2>
					<ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
				</div>
				<div className="skills__block">
					<h2>Back-End</h2>
					<ListSkills skills={backendSkills} colors={backendSkillsColors} />
				</div>
				<div className="skills__block">
					<h2>Operative Systems</h2>
					<ListSkills skills={osSkills} colors={osSkillsColors} />
				</div>
			</Container>
		</BasicLayout>
	);
};


export default IndexPage;
