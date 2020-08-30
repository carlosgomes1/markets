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

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

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
  const [modalActive, setModalActive] = useState(false);
  const [modalError, setModalError] = useState(true);

  const history = useHistory();

  function handleCloseModal() {
    if (modalError) {
      setModalError(false);
      setModalActive(!modalActive);
    } else {
      setModalActive(!modalActive);
      history.push('/');
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (data.password.length < 6) {
      setModalError(true);
      setModalActive(!modalActive);
      return;
    }

    try {
      await api.post('/markets', data);
      setModalError(false);
      setModalActive(!modalActive);
    } catch (error) {
      setModalError(true);
      setModalActive(!modalActive);
    }
  }

  return (
    <Container>
      <Header />
      <Modal
        typeModal={modalError ? 'error' : 'success'}
        message={
          modalError
            ? 'Ocorreu um erro, tente novamente mais tarde.'
            : `Bem-vindo, ${data.name}, sua conta foi criada com sucesso.`
        }
        button={modalError ? 'Entendi!' : 'Legal!'}
        active={modalActive}
        handle={handleCloseModal}
      />
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
                placeholder="Senha..."
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
