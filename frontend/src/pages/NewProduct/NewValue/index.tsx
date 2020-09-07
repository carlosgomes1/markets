import React, { useCallback, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Colors from '../../../design/color';

import { useProduct } from '../../../hooks/product';

import { FormContainer, Input, ButtonContainer, Button } from '../styles';

const NewValue: React.FC = () => {
  const [newValue, setNewValue] = useState(0);

  const { attProduct, backStep, backToDashboard } = useProduct();

  return (
    <FormContainer>
      <FiArrowLeft size={24} color={Colors.primary} onClick={backToDashboard} />
      <h1> Agora, informe qual o novo valor do produto com a promoção: </h1>
      <Input
        type="text"
        value={newValue}
        onChange={(text) => setNewValue(Number(text.target.value))}
        placeholder="R$..."
      />
      <ButtonContainer>
        <Button tipo="back" onClick={backStep}>
          Voltar
        </Button>
        <Button tipo="next" onClick={(event) => attProduct(event, 3, newValue)}>
          Próximo passo
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default NewValue;
