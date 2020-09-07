import React, { useCallback, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Colors from '../../../design/color';

import { useProduct } from '../../../hooks/product';

import { FormContainer, Input, ButtonContainer, Button } from '../styles';

const OldValue: React.FC = () => {
  const [oldValue, setOldValue] = useState(0);

  const { attProduct, backStep, backToDashboard } = useProduct();

  return (
    <FormContainer>
      <FiArrowLeft size={24} color={Colors.primary} onClick={backToDashboard} />
      <h1> Agora, informe qual o valor antigo do produto: </h1>
      <Input
        type="text"
        value={oldValue}
        onChange={(text) => setOldValue(Number(text.target.value))}
        placeholder="R$..."
      />
      <ButtonContainer>
        <Button tipo="back" onClick={backStep}>
          Voltar
        </Button>
        <Button
          tipo="next"
          type="submit"
          onClick={(event) => attProduct(event, 2, oldValue)}
        >
          Próximo passo
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default OldValue;
