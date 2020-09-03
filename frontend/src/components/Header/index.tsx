import React from 'react';

import {
  HeaderDiv,
  HeaderContainer,
  Image,
  NavBar,
  NavItem,
  Divisor,
  Info,
  ImageMarket,
} from './styles';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const { avatar, user } = useAuth();

  return avatar ? (
    <NavBar>
      <Info>
        Bem-vindo, <strong>{user.name}</strong>
      </Info>
      <ImageMarket src={avatar.url} />
    </NavBar>
  ) : (
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
