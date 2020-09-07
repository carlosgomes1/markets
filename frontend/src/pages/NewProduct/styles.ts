import styled, { keyframes } from 'styled-components';

import Colors from '../../design/color';
import Fonts from '../../design/font';

const AppearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;

  width: 100%;

  padding: 24px;

  max-width: 1000px;

  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-areas: 'form svg';
  grid-gap: 16px;

  > img {
    grid-area: svg;
    max-width: 60rem;
    width: 100%;
    align-self: center;
  }
`;

export const FormContainer = styled.form`
  grid-area: form;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 24px;

  animation: ${AppearFromLeft} 1s;

  > svg {
    align-self: flex-start;
    margin-bottom: 4rem;
    cursor: pointer;
  }

  > h1 {
    font: 700 3rem ${Fonts.main};
    color: ${Colors.primary};
    text-align: center;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1.6px solid ${Colors.primary};
  border-radius: 8px;

  width: 80%;

  font: 500 1.8rem ${Fonts.main};

  margin: 24px 0;
`;

export const Button = styled.button`
  width: 80%;

  border-radius: 8px;
  border: 1px solid ${Colors.primary};

  background-color: ${Colors.primary};
  color: ${Colors.secondary};
  font: 500 1.6rem ${Fonts.main};

  padding: 8px;

  transition: 0.3s;

  &:hover {
    background-color: ${Colors.secondary};
    color: ${Colors.primary};
  }

  cursor: pointer;
`;
