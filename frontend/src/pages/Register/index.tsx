import React, { useState, FormEvent } from 'react';
import {
  FaUser,
  FaAt,
  FaLock,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaSortNumericDownAlt,
  FaBuilding,
} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useToast } from '../../hooks/toast';

import svg from '../../assets/register_svg.svg';

import api from '../../services/api';

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

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().min(6).required(),
  address: Yup.string().required(),
  address_number: Yup.number().required(),
  address_complement: Yup.string().notRequired(),
});

const Register: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    whatsapp: '',
    address: '',
    address_number: 0,
    address_complement: '',
  });

  const { addToast } = useToast();
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!(await schema.isValid(data))) {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Suas credenciais estão inválidas. Tente novamente.',
      });
      return;
    }

    try {
      await api.post('/markets', data);
      addToast({
        type: 'success',
        title: `Bem vindo(a), ${data.name}`,
        description: 'Sua conta foi criada com sucesso.',
      });

      history.push('/login');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro na aplicação',
        description:
          'Ocorreu um erro durante o envio das suas informações, tente novamente mais tarde.',
      });
    }
  }

  return (
    <Container>
      <Header />

      <RegisterContainer>
        <img src={svg} alt="Register" />
        <FormContainer>
          <h1> Registre-se agora </h1>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <FaUser />
              <input
                type="text"
                placeholder="Nome de sua empresa..."
                value={data.name}
                onChange={(text) =>
                  setData({ ...data, name: text.target.value })
                }
              />
            </InputContainer>
            <InputContainer>
              <FaAt />
              <input
                type="email"
                placeholder="E-mail da empresa..."
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
                placeholder="Senha... (Min. 6 carácteres)"
                value={data.password}
                onChange={(text) =>
                  setData({ ...data, password: text.target.value })
                }
              />
            </InputContainer>
            <InputContainer>
              <FaWhatsapp />
              <input
                type="text"
                placeholder="WhatsApp da empresa..."
                value={data.whatsapp}
                onChange={(text) =>
                  setData({ ...data, whatsapp: text.target.value })
                }
              />
            </InputContainer>
            <InputContainer>
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="Logradouro da empresa..."
                value={data.address}
                onChange={(text) =>
                  setData({ ...data, address: text.target.value })
                }
              />
            </InputContainer>
            <InputContainerDouble>
              <NumberContainer>
                <FaSortNumericDownAlt />
                <input
                  type="text"
                  placeholder="Número..."
                  value={data.address_number}
                  onChange={(text) =>
                    setData({
                      ...data,
                      address_number: Number(text.target.value),
                    })
                  }
                />
              </NumberContainer>
              <ComplementoContainer>
                <FaBuilding />
                <input
                  type="text"
                  placeholder="Complemento..."
                  value={data.address_complement}
                  onChange={(text) =>
                    setData({ ...data, address_complement: text.target.value })
                  }
                />
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
