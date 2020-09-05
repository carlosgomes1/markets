import React, { useEffect, useState, useCallback } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  ButtonAddNewProduct,
  Products,
  HeaderContent,
  LeftHeaderContent,
  ProductItem,
  ProductItemContainer,
  ProductItemDescription,
  ProductItemPrice,
  ProductItemTitle,
} from './styles';

interface ItemProps {
  id: number;
  old_price: number;
  new_price: number;
  name: string;
  description: string;
  market_id: string | number;
  file_id: number;
  path: string;
}

const Dashboard: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>();

  const { signOut, user } = useAuth();

  const loadData = useCallback(async () => {
    const response = await api.get(`/productMarket/${user.id}`);

    setItems(response.data);
  }, [user.id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container>
      <Header />
      <Content>
        <HeaderContent>
          <LeftHeaderContent onClick={signOut}>
            <FaSignOutAlt size={30} color="#575a89" />
            <strong> Sair do app </strong>
          </LeftHeaderContent>
          <ButtonAddNewProduct to="/newproduct">
            <strong>Adicionar novo produto</strong>
            <FiArrowRight size={18} />
          </ButtonAddNewProduct>
        </HeaderContent>

        <Products>
          <strong> Seus produtos cadastrados </strong>
          <ProductItemContainer>
            {items?.map((item) => (
              <ProductItem key={item.id}>
                <img
                  src={`http://localhost:3333/files/${item.path}`}
                  alt={item.name}
                />
                <ProductItemTitle>{item.name}</ProductItemTitle>
                <ProductItemPrice>
                  <span>R${item.old_price}</span>
                  <strong>R${item.new_price}</strong>
                </ProductItemPrice>
                <ProductItemDescription>
                  {item.description}
                </ProductItemDescription>
              </ProductItem>
            ))}
          </ProductItemContainer>
        </Products>
      </Content>
      <Footer />
    </Container>
  );
};

export default Dashboard;
