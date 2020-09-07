import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Colors from '../../../design/color';

import { useProduct } from '../../../hooks/product';

import {
  FormContainer,
  ProductConfirmContainer,
  ProductLabel,
  ProductInformation,
  ButtonContainer,
  Button,
} from '../styles';

const Confirm: React.FC = () => {
  const { product, backStep, sendProduct, backToDashboard } = useProduct();

  return (
    <FormContainer>
      <FiArrowLeft size={24} color={Colors.primary} onClick={backToDashboard} />
      <h1> Confirme as informações do seu produto: </h1>
      <ProductConfirmContainer>
        <ProductLabel>
          Nome: <ProductInformation>{product.name}</ProductInformation>
        </ProductLabel>
        <ProductLabel>
          Valor antigo:{' '}
          <ProductInformation style={{ color: 'red' }}>
            R${product.old_value}
          </ProductInformation>
        </ProductLabel>
        <ProductLabel>
          Novo valor:{' '}
          <ProductInformation style={{ color: '#0ed600' }}>
            R${product.new_value}
          </ProductInformation>
        </ProductLabel>
        <ProductLabel>
          Descrição:{' '}
          <ProductInformation>{product.description}</ProductInformation>
        </ProductLabel>
      </ProductConfirmContainer>
      <ButtonContainer>
        <Button tipo="back" onClick={backStep}>
          Voltar
        </Button>
        <Button tipo="next" onClick={(event) => sendProduct(event)}>
          Cadastrar produto
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Confirm;
