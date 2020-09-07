import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Name from './Name';
import OldValue from './OldValue';
import NewValue from './NewValue';
import Description from './Description';
import Confirm from './Confirm';

import { useProduct } from '../../hooks/product';

import product_register_svg from '../../assets/product_register.svg';

import { Container, Content } from './styles';

interface ProductProps {
  id?: number;
  name: string;
  old_value: number;
  new_value: number;
  description?: string;
}

const Active: React.FC = () => {
  const { steps } = useProduct();

  if (steps === 1) {
    return <Name />;
  } else if (steps === 2) {
    return <OldValue />;
  } else if (steps === 3) {
    return <NewValue />;
  } else if (steps === 4) {
    return <Description />;
  } else if (steps === 5) {
    return <Confirm />;
  } else {
    return <div />;
  }
};

const NewProduct: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <img src={product_register_svg} alt="SVG Produto" />
        <Active />
      </Content>
      <Footer />
    </Container>
  );
};

export default NewProduct;
