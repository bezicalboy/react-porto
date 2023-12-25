import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

function Contact() {
  const [pageTitle] = useState('Contact');

  // Update the document title when the component mounts
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <Wrapper>
      <Title>CONTACT</Title>
      <Content>
        <ContactInfo>
          <ContactItem>
            <ContactLabel>Email:</ContactLabel>
            <ContactValue>
              <a href="mailto:mhmdrcow3363@gmail.com">mhmdrcow3363@gmail.com</a>
            </ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Phone:</ContactLabel>
            <ContactValue>
              <a href="https://wa.link/c1vamk">+62 8960 3133 982</a>
            </ContactValue>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Address:</ContactLabel>
            <ContactValue>
              <a href="https://www.google.com/maps/@-6.6731823,106.8557136,3a,75y,5.5h,61.09t/data=!3m6!1e1!3m4!1symQNuRZRNsriW8ZDXKjF-Q!2e0!7i16384!8i8192?authuser=0&hl=id&entry=ttu">Jalan Veteran 3 no 31 Kab. Bogor 16720</a>
            </ContactValue>
          </ContactItem>
        </ContactInfo>
      </Content>
    </Wrapper>
  );
}

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

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 27px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Title = styled.div`
  color: #000;
  margin-top: 30px;
  white-space: nowrap;
  font: 400 20px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Content = styled.div`
  background-color: #fff;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 5px;
  padding: 0 29px 37px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  animation: ${fadeInLeft} 0.5s ease-in-out; /* Fade-in and left-to-right transition */
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ContactLabel = styled.div`
  color: #000;
  font: 600 24px Inter, sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 8px;
  }
`;

const ContactValue = styled.div`
  color: #000;
  font: 400 24px Inter, sans-serif;
  margin-top: 8px;

  a:hover {
    color: #9747ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Contact;
