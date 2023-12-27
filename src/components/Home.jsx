import { styled, keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const Home = () => {
  const [pageTitle] = useState('Home');

  // Update the document title when the component mounts
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Wrapper>
      <Header>Hi There!</Header>
      <Content>
        My name is <br /> Muhamad Rico Wijaya
      </Content>
      <ImageContainer>
        {images.map((image, index) => (
          <a key={index} href={image.link}>
            <LazyImage src={image.src} alt={`Social Icon ${index + 1}`} />
          </a>
        ))}
      </ImageContainer>
    </Wrapper>
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
  align-items: flex-start;
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
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    width: fit-content; /* Adjust the width to fit the content */
    margin-bottom: -20px;
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
    font-size: 24px;
    margin-top: 20px;
    max-height: 80%;
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
    gap: 20px;
    overflow-x: auto; /* Add horizontal scrolling on small screens */
    flex-wrap: nowrap; /* Prevent wrapping to the next line */
    justify-content: flex-start; /* Align items to the start */
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

const images = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/949187d7ee1e2afd8a023c671f59d74c39c29d054926767f17b217fed5475910?apiKey=fa3c261be00e47dbba58773480c054e8&',
    link: 'https://www.instagram.com/bezicalboy/',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/76459e7d65a9e7d359fa86d969eab55170677000a13eaf06fec609c0eeef06b8?apiKey=fa3c261be00e47dbba58773480c054e8&',
    link: 'https://web.facebook.com/ricocrfqq11',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20b91319aa8c73e3d645eb4aeefedc7f337acd87cc2bcea1a90ca77d18e63440?apiKey=fa3c261be00e47dbba58773480c054e8&',
    link: 'https://www.linkedin.com/in/muhamad-rico-wijaya-576509242/',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1fbe326ccd78bbe23409d8cda45972191176711754b196ecdc00e6047b0beba0?apiKey=fa3c261be00e47dbba58773480c054e8&',
    link: 'https://github.com/bezicalboy',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01f40ea487076498d516673a92c046d529184419025991057802acbc2e76aa73?apiKey=fa3c261be00e47dbba58773480c054e8&',
    link: 'https://www.youtube.com/@bezicalboy',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8d8d5de915b0867e540cf79376870d176ff432b8ad1d81c197a75e0652f4fa37?apiKey=fa3c261be00e47dbba58773480c054e8&',
    link: 'https://wa.link/c1vamk',
  },
];

export default Home;
