import styled from 'styled-components';

import Colors from '../../design/color';
import Fonts from '../../design/font';

interface MyProps {
  tipo: string;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const Main = styled.main`
  max-width: 1000px;
  flex: 1;

  padding: 24px;

  margin-top: 24px;

  display: grid;
  grid-template-columns: 430px 1fr;
  grid-template-areas: 'main svg';
  grid-gap: 24px;

  img {
    grid-area: svg;
    max-width: 60rem;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 800px) {
    img {
      display: none;
    }

    & {
      grid-gap: 0;
    }
  }
`;

export const Content = styled.div`
  grid-area: main;
  align-self: center;

  h1 {
    font: 700 4.6rem ${Fonts.main};
    color: ${Colors.primary};
  }

  p {
    margin-top: 16px;
    font: 500 1.8rem ${Fonts.main};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: 1px solid ${Colors.primary};
  background-color: ${(props: MyProps) =>
    props.tipo === 'login' ? `${Colors.primary}` : `${Colors.secondary}`};
  color: ${(props: MyProps) =>
    props.tipo === `login` ? `${Colors.secondary}` : `${Colors.primary}`};
  width: 48%;
  border-radius: 8px;
  padding: 8px;
  font: 500 1.6rem ${Fonts.main};
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: ${(props: MyProps) =>
      props.tipo === 'login' ? `${Colors.secondary}` : `${Colors.primary}`};
    color: ${(props: MyProps) =>
      props.tipo === 'login' ? `${Colors.primary}` : `${Colors.secondary}`};
  }
`;
