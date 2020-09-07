import React, { useCallback, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Colors from '../../design/color';

import product_register_svg from '../../assets/product_register.svg';

import { Container, Content, FormContainer, Input, Button } from './styles';

interface ProductProps {
  name: string;
  old_value: number;
  new_value: number;
  description?: string;
}

const NewProduct: React.FC = () => {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [steps, setSteps] = useState(1);

  const history = useHistory();

  const handleNavigateBack = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  return (
    <Container>
      <Header />
      <Content>
        <img src={product_register_svg} alt="SVG Produto" />
        <FormContainer>
          <FiArrowLeft
            size={24}
            color={Colors.primary}
            onClick={handleNavigateBack}
          />
          <h1> Primeiro, informe qual o nome do produto: </h1>
          <Input />
          <Button onClick={() => {}}> Continuar </Button>
        </FormContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default NewProduct;
