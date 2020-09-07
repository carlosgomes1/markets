import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Colors from '../../../design/color';

import { useProduct } from '../../../hooks/product';

import { FormContainer, Input, ButtonContainer, Button } from '../styles';

const Name: React.FC = () => {
  const [name, setName] = useState('');

  const { attProduct, backToDashboard } = useProduct();

  return (
    <FormContainer>
      <FiArrowLeft size={24} color={Colors.primary} onClick={backToDashboard} />
      <h1> Primeiro, informe qual o nome do produto: </h1>
      <Input
        type="text"
        value={name}
        onChange={(text) => setName(text.target.value)}
      />
      <ButtonContainer>
        <Button tipo="cancell" type="button" onClick={backToDashboard}>
          Cancelar
        </Button>
        <Button
          tipo="next"
          type="submit"
          onClick={(event) => attProduct(event, 1, name)}
        >
          Próximo passo
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Name;
