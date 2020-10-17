import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BasicLayout from '../layouts/BasicLayout';
import projects from '../utils/projects';
import './projects.scss';

const ProjectsPage = () => {

  const projectCard = (project) => (
    <Card>
      <div className="image" style={{ backgroundImage: `url("${project.image}")` }} />
      <Card.Body>
        <Card.Title>
          {project.title}
        </Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <a href={project.url} target="_blank" rel="noreferrer">
          <Button variant="primary">
            See Project
          </Button>
        </a>
      </Card.Body>
    </Card>
  );

  return (
    <BasicLayout menuColor="#000">
      <Container className="projects">
        <h1>Projects</h1>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={4} className="project">
              {projectCard(project)}
            </Col>
          ))}
        </Row>
      </Container>
    </BasicLayout>
  );
};

export default ProjectsPage;
