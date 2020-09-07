import styled, { keyframes } from 'styled-components';

import Colors from '../../design/color';
import Fonts from '../../design/font';

const AppearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const RegisterContainer = styled.div`
  flex: 1;
  max-width: 1000px;
  padding: 24px;

  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-areas: 'svg register';
  grid-gap: 24px;

  img {
    grid-area: svg;
    max-width: 60rem;
    width: 100%;
    align-self: center;
  }

  @media (max-width: 900px) {
    img {
      display: none;
    }

    & {
      grid-gap: 0;
    }
  }
`;

export const FormContainer = styled.div`
  grid-area: register;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  align-self: center;

  animation: ${AppearFromRight} 1s;

  h1 {
    font: 700 4rem ${Fonts.main};
    color: ${Colors.primary};
  }
`;

export const Form = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 16px;

  width: 90%;
`;

export const InputContainer = styled.div`
  width: 90%;
  border: 1.6px solid ${Colors.primary};
  border-radius: 8px;
  padding: 8px;

  margin-top: 12px;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: ${Colors.primary};
  }

  input {
    flex: 1;
    border: 0;
    margin-left: 8px;
    font: 500 1.8rem ${Fonts.main};
  }
`;

export const InputContainerDouble = styled.div`
  width: 90%;
  margin-top: 12px;

  display: flex;
  justify-content: space-between;

  svg {
    font-size: 20px;
    color: ${Colors.primary};
  }

  input {
    flex: 1;
    border: 0;
    margin-left: 20px;
    font: 500 1.8rem ${Fonts.main};
  }
`;

export const NumberContainer = styled.div`
  width: 35%;

  border: 1.6px solid ${Colors.primary};
  border-radius: 8px;
  padding: 8px;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: ${Colors.primary};
  }

  input {
    width: 75%;
    border: 0;
    margin-left: 8px;
    font: 500 1.8rem ${Fonts.main};
  }
`;

export const ComplementoContainer = styled.div`
  width: 63%;

  border: 1.6px solid ${Colors.primary};
  border-radius: 8px;
  padding: 8px;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: ${Colors.primary};
  }

  input {
    width: 75%;
    border: 0;
    margin-left: 8px;
    font: 500 1.8rem ${Fonts.main};
  }
`;

export const Button = styled.button`
  width: 90%;
  border-radius: 8px;
  padding: 10px;

  margin-top: 12px;

  border: 1px solid ${Colors.primary};

  background-color: ${Colors.primary};
  color: ${Colors.secondary};
  font: 500 1.6rem ${Fonts.main};

  transition: 0.3s;

  &:hover {
    background-color: ${Colors.secondary};
    color: ${Colors.primary};
  }

  cursor: pointer;
`;
