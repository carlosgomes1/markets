import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import svg from '../../assets/index_svg.svg';

import { Container, Main, Content, ButtonContainer, Button } from './styles';

const Index: React.FC = () => {
  const history = useHistory();

  function handleNavigateToLogin() {
    history.push('/login');
  }

  function handleNavigateToRegister() {
    history.push('/register');
  }

  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <h1>Plataforma de divulgação on-line</h1>
          <p>
            Cadastre-se e comece a mostrar seus produtos em promoções para
            diversas pessoas através do App. <br /> Se inscreva em um minuto e
            torne-se visível na plataforma.
          </p>
          <ButtonContainer>
            <Button tipo="cadastrar" onClick={handleNavigateToRegister}>
              Cadastre-se
            </Button>
            <Button tipo="login" onClick={handleNavigateToLogin}>
              Faça Login
            </Button>
          </ButtonContainer>
        </Content>
        <img src={svg} alt="Página inicial" />
      </Main>
      <Footer />
    </Container>
  );
};

export default Index;
