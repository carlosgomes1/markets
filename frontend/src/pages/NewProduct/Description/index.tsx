import React, { useCallback, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Colors from '../../../design/color';

import { useProduct } from '../../../hooks/product';

import { FormContainer, TextArea, ButtonContainer, Button } from '../styles';

const Description: React.FC = () => {
  const [description, setDescription] = useState('');

  const { attProduct, backStep, backToDashboard } = useProduct();

  return (
    <FormContainer>
      <FiArrowLeft size={24} color={Colors.primary} onClick={backToDashboard} />
      <h1> Informe a descrição do produto (OPCIONAL): </h1>
      <TextArea
        value={description}
        onChange={(text) => setDescription(text.target.value)}
        placeholder="Ex: Feminino TAM 36"
      />
      <ButtonContainer>
        <Button tipo="back" onClick={backStep}>
          Voltar
        </Button>
        <Button
          tipo="next"
          onClick={(event) => attProduct(event, 4, description)}
        >
          Próximo passo
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Description;
