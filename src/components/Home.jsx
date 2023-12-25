/* eslint-disable no-unused-vars */
// import styled from 'styled-components';

// function Home() {
//   return (
//     <Content>
//       <Greeting>Hi There!</Greeting>
//       <Name>
//         My name is <br />
//         Muhamad Rico Wijaya.
//       </Name>
//       <ImageWrapper>
//         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/949187d7ee1e2afd8a023c671f59d74c39c29d054926767f17b217fed5475910?apiKey=fa3c261be00e47dbba58773480c054e8&" />
//         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7d60a3960400d8a490b85c9fa9558bb8a2473d9b8b90dc4a3c6c99c2b361f7f?apiKey=fa3c261be00e47dbba58773480c054e8&" />
//         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b91319aa8c73e3d645eb4aeefedc7f337acd87cc2bcea1a90ca77d18e63440?apiKey=fa3c261be00e47dbba58773480c054e8&" />
//         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/838b7c845f263d78ac50df4c09cfc843e08ba74eb6e3e603983064d37fbee81c?apiKey=fa3c261be00e47dbba58773480c054e8&" />
//         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9403ecab02afe3c00fe0542805a71a7548580a16b9cff1677033d82ad6a60f77?apiKey=fa3c261be00e47dbba58773480c054e8&" />
//         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abdd2a2e215a6ae5858c9b7aafe359917e9bc82d828f4da9d246fb1d91edebc?apiKey=fa3c261be00e47dbba58773480c054e8&" />
//       </ImageWrapper>
//     </Content>
//   );
// }

// const Content = styled.div`
//   color: #909090;
//   align-self: start;
//   white-space: nowrap;
//   margin: 186px 0 0 11px;
//   font: 500 20px Inter, sans-serif;

//   @media (max-width: 991px) {
//     white-space: initial;
//     margin: 40px -5px 0 95px;
//   }

//   @media (max-width: 640px) {
//     margin-left: -1px;
//   }
// `;

// const Greeting = styled.div`
//   color: #000;
// `;

// const Name = styled.div`
//   color: #000;
//   max-width: 1049px;
//   align-self: center;
//   margin-top: -1px;
//   font: 700 96px Inter, sans-serif;

//   @media (max-width: 991px) {
//     max-width: 100%;
//     font-size: 40px;
//     margin: 9px 200px 0 -1px;
//   }

//   @media (max-width: 640px) {
//     margin-top: -1px;
//   }
// `;

// const ImageWrapper = styled.div`
//   align-self: center;
//   display: flex;
//   margin-top: 241px;
//   width: 350px;
//   max-width: 100%;
//   align-items: start;
//   gap: 10px;

//   @media (max-width: 991px) {
//     margin-top: 119px;
//   }

//   @media (max-width: 640px) {
//     padding-top: 200px;
//     margin: 100px 0 69px;
//   }
// `;

// const Image = styled.img`
//   aspect-ratio: 1;
//   object-fit: contain;
//   object-position: center;
//   width: 100%;
//   overflow: hidden;
//   flex: 1;
// `;

// export default Home;

import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
const Home = () => {
  const [pageTitle] = useState('Home');

  // Update the document title when the component mounts
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <Wrapper>
        <Header>Hi There!</Header>
        <Content>
          My name is <br /> Muhamad Rico Wijaya.
        </Content>
        <ImageContainer>
          <a href="https://www.instagram.com/bezicalboy/">
            <LazyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/949187d7ee1e2afd8a023c671f59d74c39c29d054926767f17b217fed5475910?apiKey=fa3c261be00e47dbba58773480c054e8&" />
          </a>
          <a href="https://web.facebook.com/ricocrfqq11">
            <LazyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/76459e7d65a9e7d359fa86d969eab55170677000a13eaf06fec609c0eeef06b8?apiKey=fa3c261be00e47dbba58773480c054e8&" />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-rico-wijaya-576509242/">
            <LazyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b91319aa8c73e3d645eb4aeefedc7f337acd87cc2bcea1a90ca77d18e63440?apiKey=fa3c261be00e47dbba58773480c054e8&" />
          </a>
          <a href="https://github.com/bezicalboy">
            <LazyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fbe326ccd78bbe23409d8cda45972191176711754b196ecdc00e6047b0beba0?apiKey=fa3c261be00e47dbba58773480c054e8&" />
          </a>
          <a href="https://www.youtube.com/@bezicalboy">
            <LazyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/01f40ea487076498d516673a92c046d529184419025991057802acbc2e76aa73?apiKey=fa3c261be00e47dbba58773480c054e8&" />
          </a>
          <a href="https://wa.link/c1vamk">
            <LazyImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8d5de915b0867e540cf79376870d176ff432b8ad1d81c197a75e0652f4fa37?apiKey=fa3c261be00e47dbba58773480c054e8&" />
          </a>
        </ImageContainer>
      </Wrapper>
    </>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align items to the start (left) */
  padding: 29px 60px;
  margin-top: 50px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  color: #909090;
  font: 500 20px Inter, sans-serif;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  color: #000;
  margin-top: 15px;
  font: 700 96px Inter, sans-serif;
  animation: ${fadeIn} 2s ease-in-out;
  text-align: left;

  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
    margin-top: 20px;
    max-height: 80%;
  }

  p {
    /* Preserve the style of the paragraph */
    font-size: inherit;
    margin-top: inherit;
    max-width: inherit;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LazyImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  max-width: 100%;
  animation: ${fadeIn} 3s ease-in-out;

  &:focus {
    color: #9747ff;
  }
`;

export default Home;
