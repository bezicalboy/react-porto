/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const skillsData = [
  {
    id: 1,
    name: 'JavaScript',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    id: 2,
    name: 'React JS',
    imageSrc: 'https://joshuafrilot.com/img/react-logo.png',
  },
  {
    id: 3,
    name: 'Node JS',
    imageSrc: 'https://ecofriend.com/wp-content/uploads/2020/02/Node-JS-1-800x800.jpg',
  },
  {
    id: 4,
    name: 'Mongo DB',
    imageSrc: 'https://th.bing.com/th/id/R.9c2c379aef549a2cf9266bcc409ecf03?rik=Vo%2f7VWyCHM60Ew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmongodb-png--1000.png&ehk=kjjn5rqJgQ8SBkkmFm9UTRWhxyIhJD3%2bp%2fFhPF0WgHA%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 5,
    name: 'MySQL',
    imageSrc: 'https://th.bing.com/th/id/OIP.lIIc_svaWdGdEJuEk7TBlgHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 6,
    name: 'PHP',
    imageSrc: 'https://pngimg.com/uploads/php/php_PNG26.png',
  },
  {
    id: 7,
    name: 'Laravel',
    imageSrc: 'https://www.ahmedabadcomputereducation.com/wp-content/uploads/2021/07/iconfinder_3069648_circle_laravel_programming_round-icon_icon_128px.png',
  },
  {
    id: 8,
    name: 'HTML5',
    imageSrc: 'https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png',
  },
  {
    id: 9,
    name: 'CSS',
    imageSrc: 'https://th.bing.com/th/id/OIP.aiII04uB8m611vQPSw7HfgHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 10,
    name: 'Bootstrap',
    imageSrc: 'https://th.bing.com/th/id/OIP.KTq5K5E3QeLVrm71FR0w8gHaHa?w=1280&h=1280&rs=1&pid=ImgDetMain',
  },
];

function SkillCard({ name, imageSrc }) {
  return (
    <Card>
      <Avatar src={imageSrc} alt={name} />
      <ContentContainer>
        <Title>{name}</Title>
      </ContentContainer>
    </Card>
  );
}

// const Card = styled.div`
//   box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.25);
//   background-color: #fff;
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;
//   padding: 13px;
//   transition: transform 0.3s ease-in-out; /* Added transition for pop-up effect */

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     transform: scale(1.05); /* Scale up on hover for pop-up effect */
//   }
// `;

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

const Card = styled.div`
  box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 13px;
  transition: transform 0.3s ease-in-out; /* Added transition for pop-up effect */
  animation: ${fadeInLeft} 0.5s ease-in-out; /* Fade-in and left-to-right transition */

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05); /* Scale up on hover for pop-up effect */
    animation: none; /* Disable fade-in effect on hover */
  }
`;

const Avatar = styled.img`
  border-radius: 100px;
  background-color: #d9d9d9;
  width: 54px;
  height: 54px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 1;
  flex-basis: 0%;
  margin: auto 0;
`;

const Title = styled.div`
  color: #000;
  white-space: nowrap;
  font: 700 16px/141% Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

function SkillComponent() {
  return (
    <SkillDiv>
      <SkillText>SKILL</SkillText>
      <SkillsGrid>
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </SkillsGrid>
    </SkillDiv>
  );
}

const SkillDiv = styled.div`
  color: #000;
  margin-right: 34px;
  white-space: nowrap;
  font: 400 20px Inter, sans-serif;
  text-align: center;

  @media (max-width: 991px) {
    margin-right: 10px;
    white-space: initial;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 per line on desktop */
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr); /* 2 per line on mobile */
  }
`;

const SkillText = styled.div`
  padding: 10px;
`;

export default function Skill() {
  const [pageTitle] = useState('Skill');

  // Update the document title when the component mounts
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <>
      <SkillComponent />
    </>
  );
}
