import { Link } from 'react-router-dom';
import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

const About = () => {
  const [pageTitle] = useState('About');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const targetText = `Deetail-oriented, analytical, and self-driven programmer with extensive experience building user-facing applications. Efficient and knowledgeable coder with skills in HTML, CSS, PHP, and JavaScript programming languages. Coordinated and collaborative team player with attention to detail, graphic design skills, and ability to contribute to code base improvement initiatives and UX improvement projects.`;

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < targetText.length) {
        setTypedText((prevText) => prevText + targetText[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <Heading>About me</Heading>
      <Content>
        My name is Muhamad Rico Wijaya
        <br />
        <ContentText>I’m a Full Stack Web Developer</ContentText>
      </Content>
      <ContentDetail>{typedText}</ContentDetail>
      <Button>
        <Link to="/contact">Contact Me</Link>
      </Button>
    </Wrapper>
  );
};

// ... (rest of the code remains the same)

//

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Heading = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 20px;
  font: 400 20px Inter, sans-serif;
  animation: ${fadeIn} 1s ease-in-out; /* Adjust the animation duration as needed */
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Content = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 26px;
  font: 700 32px/45px Inter, sans-serif;
  animation: ${fadeIn} 2s ease-in-out; /* Adjust the animation duration as needed */

  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 16px;
    font-size: 18px;
  }
`;
const ContentText = styled.div`
  font-size: 40px;
  animation: ${fadeIn} 2s ease-in-out; /* Adjust the animation duration as needed */

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const ContentDetail = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 25px;
  font: 400 22px/31px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.div`
  color: #9747ff;
  text-transform: uppercase;
  white-space: nowrap;
  justify-content: center;
  border-radius: 29.5px;
  border: 2px solid #9747ff;
  align-self: start;
  margin: 26px 0 26px;
  padding: 18px 26px;
  font: 400 16px/141% Inter, sans-serif;
  animation: ${fadeIn} 3s ease-in-out; /* Adjust the animation duration as needed */

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
  a {
    text-decoration: none;
    color: #9747ff;
  }
  &:hover {
    cursor: pointer;
    color: #fffff;
    background-color: #9747ff;
    a {
      color: #fff;
    }
  }
`;

export default About;
