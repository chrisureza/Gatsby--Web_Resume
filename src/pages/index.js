import React from "react";
import BasicLayout from '../layouts/BasicLayout';
import Profile from "../components/Profile";
import AboutMe from '../components/AboutMe';
import './index.scss';

const IndexPage = () => (
  <BasicLayout>
    <Profile />
    <AboutMe />
  </BasicLayout>
);

export default IndexPage;
