import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDiv = styled.header`
  width: 100vw;
  height: 12vh;

  display: flex;
  justify-content: center;

  box-shadow: 0 0 8px 0 rgba(87, 90, 137, 0.7);
`;

export const HeaderContainer = styled.div`
  width: 70vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1000px;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const Image = styled(Link)`
  img {
    height: 96%;
    width: 9rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 400px;
`;

export const NavItem = styled(Link)`
  font: 700 1.8rem Archivo;
  text-decoration: none;

  margin: 0 1.6rem;

  color: #575a89;

  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Divisor = styled.div`
  background-color: #575a89;
  width: 1px;
  height: 2rem;
`;
