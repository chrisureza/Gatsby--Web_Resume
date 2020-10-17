import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import './Menu.scss';

const Menu = ({ menuColor }) => {
  return (
    <header className="menu" style={{ backgroundColor: menuColor || "transparent" }}>
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Menu;