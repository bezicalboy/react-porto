import styled from 'styled-components';
import { useState } from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
          <Link to="/" style={linkStyle}>
            BEZICAL
          </Link>
        </Logo>
        <Links>
          {navLinks.map(({ id, to, text }) => (
            <NavLink key={id} isActive={location.pathname === to}>
              <CustomLink to={to} onClick={() => setIsOpen(false)} isActive={location.pathname === to}>
                {text}
              </CustomLink>
            </NavLink>
          ))}
        </Links>
      </Nav>
    </>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const Nav = styled.div`
  justify-content: space-between;
  align-items: center;
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
    top: 50px;
    left: 0;
    width: 33%;
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

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#000' : '#888')};

  &:hover {
    color: #000;
  }
`;

const NavLink = styled.nav`
  align-self: start;
  font: 600 17px Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
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

const navLinks = [
  { id: 1, to: '/', text: 'Home' },
  { id: 2, to: '/about', text: 'About' },
  { id: 3, to: '/skills', text: 'Skill' },
  { id: 4, to: '/projects', text: 'Project' },
  { id: 5, to: '/contact', text: 'Contact' },
];

export default Navbar;
