import React, { useState, useCallback, FormEvent } from 'react';
import { FaAt, FaLock } from 'react-icons/fa';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import { useAuth } from '../../hooks/AuthContext';

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

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).required(),
});

const Login: React.FC = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [modalActive, setModalActive] = useState(false);

  const { signIn, user, avatar } = useAuth();

  console.log(user, avatar);

  const handleCloseModal = useCallback(() => {
    setModalActive(!modalActive);
  }, [modalActive]);

  const handleLogin = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!(await schema.isValid(data))) {
        setModalActive(true);
        return;
      }

      signIn({
        email: data.email,
        password: data.password,
      });
    },
    [data, signIn]
  );

  return (
    <Container>
      <Header />
      <Modal
        typeModal="error"
        message="Ocorreu um erro, tente novamente."
        button="OK!"
        active={modalActive}
        handle={handleCloseModal}
      />
      <LoginContainer>
        <img src={svg} alt="Login" />
        <FormContainer>
          <h1> Faça seu login </h1>
          <Form onSubmit={handleLogin}>
            <InputContainer>
              <FaAt />
              <input
                type="email"
                placeholder="Seu e-mail..."
                value={data.email}
                onChange={(text) =>
                  setData({ ...data, email: text.target.value })
                }
              />
            </InputContainer>
            <InputContainer>
              <FaLock />
              <input
                type="password"
                placeholder="Sua senha..."
                value={data.password}
                onChange={(text) =>
                  setData({ ...data, password: text.target.value })
                }
              />
            </InputContainer>
            <Button type="submit"> Entrar </Button>
            <ForgetPassword to="/"> Esqueceu sua senha? </ForgetPassword>
          </Form>
        </FormContainer>
      </LoginContainer>
      <Footer />
    </Container>
  );
};

export default Login;
