import React, { useState, useCallback, FormEvent } from 'react';
import { FaAt, FaLock } from 'react-icons/fa';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

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
  email: Yup.string().required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha no mínimo 6 carácteres')
    .required('A senha é obrigatória'),
});

const Login: React.FC = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleLogin = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!(await schema.isValid(data))) {
        addToast({
          type: 'error',
          title: 'Erro nas credenciais de acesso',
          description:
            'Alguma coisa nas credenciais está errada, tente novamente.',
        });

        return;
      }

      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        });
      }
    },
    [data, signIn, addToast]
  );

  return (
    <Container>
      <Header />

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
