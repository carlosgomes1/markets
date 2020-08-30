import styled, { keyframes } from 'styled-components';

const modalEnter = keyframes`  
  from { top: -2000px; }
  to { top: 34%; }
`;

interface MyProps {
  typeModal: string;
}

interface ActiveProps {
  active: boolean;
}

export const ModalContainer = styled.div`
  width: 400px;
  height: 200px;

  position: absolute;

  background-color: white;

  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

  display: ${(props: ActiveProps) => (props.active ? 'flex' : 'none')};
  justify-content: center;
  flex-direction: column;
  align-items: center;

  animation: ${modalEnter} 1.6s;

  border: 1px solid #575a89;
  border-radius: 8px;
`;

export const ContainerTitle = styled.div`
  flex: 1;

  width: 100%;
  border-bottom: 1px solid #c9cbe5;
`;

export const Title = styled.h1`
  margin: 16px 0 0 16px;
  font: 700 2.4rem Archivo;
  color: ${(props: MyProps) =>
    props.typeModal === 'error' ? '#f15e5e' : '#82CE34'};
`;

export const ContainerBody = styled.div`
  flex: 1;
  width: 100%;
  border-bottom: 1px solid #c9cbe5;
`;

export const Body = styled.p`
  margin: 16px 0 0 16px;
  font: 500 1.8rem Archivo;
`;

export const ContainerButton = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Button = styled.button`
  margin: 0 16px 16px 0;
  background-color: ${(props: MyProps) =>
    props.typeModal === 'error' ? '#f15e5e' : '#82CE34'};
  color: white;
  border: 0;
  border-radius: 6px;
  padding: 8px;
  font: 500 1.6rem Archivo;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: ${(props: MyProps) =>
      props.typeModal === 'error' ? '#f15e5e' : '#73b52d'};
  }
`;
