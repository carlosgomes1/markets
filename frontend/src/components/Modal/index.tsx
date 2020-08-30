import React from 'react';

import {
  ModalContainer,
  Body,
  Button,
  ContainerBody,
  ContainerButton,
  ContainerTitle,
  Title,
} from './styles';

interface Props {
  typeModal: string;
  message: string;
  button: string;
  active: boolean;
  handle: () => void;
}

const Modal: React.FC<Props> = ({
  typeModal,
  message,
  button,
  active,
  handle,
}) => {
  return (
    <ModalContainer active={active}>
      <ContainerTitle>
        <Title typeModal="error">
          {typeModal === 'error' ? 'Oooooops!' : 'Sucesso!'}
        </Title>
      </ContainerTitle>
      <ContainerBody>
        <Body>{message}</Body>
      </ContainerBody>
      <ContainerButton>
        <Button typeModal="error" onClick={handle}>
          {' '}
          {button}{' '}
        </Button>
      </ContainerButton>
    </ModalContainer>
  );
};

export default Modal;
