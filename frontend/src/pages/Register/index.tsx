import React from 'react';
import {
  FaUser,
  FaAt,
  FaLock,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaSortNumericDownAlt,
  FaBuilding,
} from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import svg from '../../assets/register_svg.svg';

import {
  Container,
  RegisterContainer,
  FormContainer,
  Form,
  InputContainer,
  InputContainerDouble,
  NumberContainer,
  ComplementoContainer,
  Button,
} from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header />
      <RegisterContainer>
        <img src={svg} alt="Register" />
        <FormContainer>
          <h1> Registre-se agora </h1>
          <Form>
            <InputContainer>
              <FaUser />
              <input type="text" placeholder="Nome de sua empresa..." />
            </InputContainer>
            <InputContainer>
              <FaAt />
              <input type="text" placeholder="E-mail da empresa..." />
            </InputContainer>
            <InputContainer>
              <FaLock />
              <input type="password" placeholder="Senha..." />
            </InputContainer>
            <InputContainer>
              <FaWhatsapp />
              <input type="text" placeholder="WhatsApp da empresa..." />
            </InputContainer>
            <InputContainer>
              <FaMapMarkerAlt />
              <input type="text" placeholder="Logradouro da empresa..." />
            </InputContainer>
            <InputContainerDouble>
              <NumberContainer>
                <FaSortNumericDownAlt />
                <input type="text" placeholder="Número..." />
              </NumberContainer>
              <ComplementoContainer>
                <FaBuilding />
                <input type="text" placeholder="Complemento..." />
              </ComplementoContainer>
            </InputContainerDouble>
            <Button type="submit"> Confirmar </Button>
          </Form>
        </FormContainer>
      </RegisterContainer>
      <Footer />
    </Container>
  );
};

export default Register;
