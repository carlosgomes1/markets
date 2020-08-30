import React from 'react';
import { FaAt, FaLock } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import svg from '../../assets/login_svg.svg';

import {
  Container,
  LoginContainer,
  FormContainer,
  Form,
  InputContainer,
  Button,
  ForgetPassword,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Header />
      <LoginContainer>
        <img src={svg} alt="Login" />
        <FormContainer>
          <h1> Faça seu login </h1>
          <Form>
            <InputContainer>
              <FaAt />
              <input type="text" placeholder="Seu e-mail..." />
            </InputContainer>
            <InputContainer>
              <FaLock />
              <input type="password" placeholder="Sua senha..." />
            </InputContainer>
            <Button> Entrar </Button>
            <ForgetPassword to="/"> Esqueceu sua senha? </ForgetPassword>
          </Form>
        </FormContainer>
      </LoginContainer>
      <Footer />
    </Container>
  );
};

export default Login;
