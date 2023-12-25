/* eslint-disable no-unused-vars */
import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const projectsData = [
  {
    title: 'Laravel Movie Info',
    description: 'This app was made using Laravel 9, TailwindCss, AlpineJs ,TMDB Api to see Movie/Series information',
    githubLink: 'https://github.com/bezicalboy/bezical-movie-example',
    imageUrl: 'https://user-images.githubusercontent.com/89235834/191915441-8db14809-0f80-45d9-bc67-ca08f631c1d4.png', // Add the imageUrl property
  },
  {
    title: 'Laravel CRUD with role',
    description: 'CRUD App using Laravel 9 and AJAX JQuery with Role',
    githubLink: 'https://github.com/username/project2',
    imageUrl: 'https://user-images.githubusercontent.com/89235834/193780326-74fd1307-9044-4117-b425-6d9169c1dd3b.png', // Add the imageUrl property
  },
  {
    title: 'Dicoding assigment',
    description: 'Simple static website use HTML and CSS',
    githubLink: 'https://github.com/bezicalboy/tugas-dicoding',
    imageUrl: 'https://bezicalboy.thedev.id/dist/img/project/bfd.png', // Add the imageUrl property
  },
];

function Projects() {
  const [pageTitle] = useState('Projects');

  // Update the document title when the component mounts
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Container>
      <Header>PROJECTS</Header>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <ProjectColumn key={index}>
            <ProjectWrapper>
              <AnimatedProjectImage href={project.githubLink} target="_blank">
                <ProjectImage imageUrl={project.imageUrl} />
              </AnimatedProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectWrapper>
          </ProjectColumn>
        ))}
      </ProjectsContainer>
    </Container>
  );
}

const AnimatedProjectImage = styled.a`
  position: relative;
  display: flex;
  height: 365px;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 991px) {
    height: 200px;
  }

  &:hover {
    /* Add your animation keyframes here for the hover effect */
  }

  &:after {
    content: 'View on GitHub';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #9747ff;
    font-weight: bold;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
    font-size: 18px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 29px 60px;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const Header = styled.div`
  color: #000;
  white-space: nowrap;
  font: 400 20px Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  margin-top: 33px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeInLeft} 0.5s ease-in-out; /* Fade-in and left-to-right transition */

  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

const ProjectImage = styled.div`
  background-color: #d9d9d9;
  display: flex;
  height: 365px;
  flex-direction: column;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 991px) {
    height: 200px;
  }
`;

const ProjectTitle = styled.div`
  color: #000;
  margin-top: 14px;
  font: 600 17px Inter, sans-serif;
`;

const ProjectDescription = styled.div`
  color: #000;
  margin-top: 11px;
  font: 400 14px Inter, sans-serif;
`;

export default Projects;
