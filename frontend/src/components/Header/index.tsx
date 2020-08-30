import React from 'react';

import {
  HeaderDiv,
  HeaderContainer,
  Image,
  NavBar,
  NavItem,
  Divisor,
} from './styles';

import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <NavBar>
      <NavItem to="/register"> Registrar-se </NavItem>
      <Divisor />
      <NavItem to="/login"> Login </NavItem>
    </NavBar>
  );
};

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <Image to="/">
          <img src={logo} alt="Logo" />
        </Image>
        <Navbar />
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
