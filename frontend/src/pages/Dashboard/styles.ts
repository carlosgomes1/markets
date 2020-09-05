import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const AppearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);    
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;

  width: 100%;

  padding: 24px;

  max-width: 1000px;

  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const LeftHeaderContent = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  transition: 0.3s;

  svg {
    margin-right: 12px;
  }

  strong {
    font: 500 1.9rem Archivo;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonAddNewProduct = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  text-decoration: none;

  strong {
    color: white;
    font: 500 1.6rem Archivo;
  }

  svg {
    margin-left: 8px;
    color: white;
  }

  border: 1px solid #575a89;
  border-radius: 4px;

  background-color: #575a89;

  transition: 0.3s;

  &:hover {
    strong {
      color: #575a89;
    }

    svg {
      color: #575a89;
    }

    background-color: white;
  }

  cursor: pointer;
`;

export const Products = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;

  > strong {
    font: 700 3.3rem Archivo;
    color: #575a89;
    margin-bottom: 8px;
  }
`;

export const ProductItemContainer = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
`;

export const ProductItem = styled.div`
  animation: ${AppearFromBottom} 1s;

  display: flex;
  flex-direction: column;

  border: 2px solid #575a89;
  border-radius: 8px;

  padding: 8px;

  > img {
    width: 100%;
    max-width: 250px;
    border-radius: 8px;
    margin-bottom: 4px;
  }
`;

export const ProductItemTitle = styled.strong`
  font: 700 2rem Archivo;
  margin-bottom: 4px;
`;

export const ProductItemPrice = styled.div`
  display: flex;
  align-items: center;

  > span {
    font: 600 1.5rem Archivo;
    color: red;
    margin-right: 8px;
    text-decoration: line-through;
  }

  > strong {
    font: 700 1.7rem Archivo;
    color: #0ed600;
  }

  margin-bottom: 8px;
`;

export const ProductItemDescription = styled.p`
  font: 500 1.8rem Archivo;
  color: #7c7c7c;
`;
