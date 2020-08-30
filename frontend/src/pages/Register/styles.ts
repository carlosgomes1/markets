import styled from 'styled-components';

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

  h1 {
    font: 700 4rem Archivo;
    color: #575a89;
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
  border: 1.6px solid #575a89;
  border-radius: 8px;
  padding: 8px;

  margin-top: 12px;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: #575a89;
  }

  input {
    flex: 1;
    border: 0;
    margin-left: 8px;
    font: 500 1.8rem Archivo;
  }
`;

export const InputContainerDouble = styled.div`
  width: 90%;
  margin-top: 12px;

  display: flex;
  justify-content: space-between;

  svg {
    font-size: 20px;
    color: #575a89;
  }

  input {
    flex: 1;
    border: 0;
    margin-left: 20px;
    font: 500 1.8rem Archivo;
  }
`;

export const NumberContainer = styled.div`
  width: 35%;

  border: 1.6px solid #575a89;
  border-radius: 8px;
  padding: 8px;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: #575a89;
  }

  input {
    width: 75%;
    border: 0;
    margin-left: 8px;
    font: 500 1.8rem Archivo;
  }
`;

export const ComplementoContainer = styled.div`
  width: 63%;

  border: 1.6px solid #575a89;
  border-radius: 8px;
  padding: 8px;

  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: #575a89;
  }

  input {
    width: 75%;
    border: 0;
    margin-left: 8px;
    font: 500 1.8rem Archivo;
  }
`;

export const Button = styled.button`
  width: 90%;
  border-radius: 8px;
  padding: 10px;

  margin-top: 12px;

  border: 1px solid #575a89;

  background-color: #575a89;
  color: white;
  font: 500 1.6rem Archivo;

  transition: 0.3s;

  &:hover {
    background-color: white;
    color: #575a89;
  }

  cursor: pointer;
`;
