import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Social from './Social';

import profileImage from '../../images/avatar.jpg';
import './Profile.scss';

const Profile = () => {
  const data = [
    {
      title: 'Age',
      info: '27',
    },
    {
      title: 'email',
      info: 'chrisureza@gmail.com',
    },
    {
      title: 'Phone',
      info: '(+506) 60226057',
    },
    {
      title: 'Country',
      info: 'Costa Rica',
    },
  ];

  return (
    <div className="profile">
      <div className="walppaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>Hello!</span>
            <p>Christian Ureña Zamora</p>
            <p>Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p> {item.title}: </p>
                  <p> {item.info} </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  );
};

export default Profile;