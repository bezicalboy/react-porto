import styled from 'styled-components';
import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileIcon onClick={toggleMenu}>
        <span>&#9776;</span>
      </MobileIcon>
      <Nav isOpen={isOpen}>
        <Logo>
          <Link to="/">BEZICAL</Link>
        </Logo>
        <Links>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/skill">Skill</Link>
          </NavLink>
          <NavLink>
            <Link to="/project">Project</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">Contact</Link>
          </NavLink>
        </Links>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  justify-content: space-between;
  align-items: start;
  background-color: #fff;
  display: flex;
  gap: 20px;
  padding: 29px 60px;

  @media (max-width: 991px) {
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
  }
`;

const Logo = styled.div`
  color: #000;
  margin-top: 7px;
  font: 700 30px Inter, sans-serif;

  @media (max-width: 768px) {
    font-size: 0;
  }
`;

const Links = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const NavLink = styled.nav`
  color: #000;
  align-self: start;
  font: 600 17px Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
  &.active {
    color: #fff;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: flex;
    cursor: pointer;
    span {
      font-size: 24px;
    }
  }
`;

export default Navbar;
