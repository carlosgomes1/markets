import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import svg from '../../assets/index_svg.svg';

import { Container, Main, Content, ButtonContainer, Button } from './styles';

const Index: React.FC = () => {
  const [modalActive, setModalActive] = useState(true);

  function handleCloseModal() {
    setModalActive(!modalActive);
  }

  return (
    <Container>
      <Header />
      <Modal
        typeModal="error"
        message="Campos preenchidos incorretamente!"
        button="Entendi!"
        active={modalActive}
        handle={handleCloseModal}
      />
      <Main>
        <Content>
          <h1>Plataforma de divulgação on-line</h1>
          <p>
            Cadastre-se e comece a mostrar seus produtos em promoções para
            diversas pessoas através do App. <br /> Se inscreva em um minuto e
            torne-se visível na plataforma.
          </p>
          <ButtonContainer>
            <Button tipo="cadastrar"> Cadastre-se </Button>
            <Button tipo="login"> Faça Login </Button>
          </ButtonContainer>
        </Content>
        <img src={svg} alt="Página inicial" />
      </Main>
      <Footer />
    </Container>
  );
};

export default Index;
