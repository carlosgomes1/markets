import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  FormEvent,
} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

import { useToast } from './toast';

interface ProductProps {
  id?: number;
  name: string | number;
  old_value: string | number;
  new_value: string | number;
  description?: string | number;
}

interface ProductContextData {
  product: ProductProps;
  attProduct(event: FormEvent, step: number, data: string | number): void;
  steps: number;
  backStep(): void;
  sendProduct(event: FormEvent): void;
  backToDashboard(): void;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

const ProductProvider: React.FC = ({ children }) => {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [steps, setSteps] = useState(1);

  const history = useHistory();
  const { addToast } = useToast();

  const attProduct = useCallback(
    (event: FormEvent, step: number, data: string | number) => {
      event.preventDefault();

      if (step === 1) {
        if (data === '') {
          addToast({
            type: 'error',
            title: 'O nome não pode estar vazio',
            description: 'Você tentou avançar sem preencher um campo.',
          });
        } else {
          setProduct({ ...product, name: data });
          setSteps(steps + 1);
        }
      } else if (step === 2) {
        if (data === 0) {
          addToast({
            type: 'error',
            title: 'O valor do produto não pode ser 0',
            description: 'Você tentou avançar sem preencher um campo.',
          });
        } else {
          setProduct({ ...product, old_value: data });
          setSteps(steps + 1);
        }
      } else if (step === 3) {
        if (data === 0) {
          addToast({
            type: 'error',
            title: 'O valor do produto não pode ser 0',
            description: 'Você tentou avançar sem preencher um campo.',
          });
        } else {
          setProduct({ ...product, new_value: data });
          setSteps(steps + 1);
        }
      } else if (step === 4) {
        setProduct({ ...product, description: data });
        setSteps(steps + 1);
      }
    },
    [product, steps, addToast]
  );

  const backStep = useCallback(() => {
    setSteps(steps - 1);
  }, [steps]);

  const backToDashboard = useCallback(() => {
    setSteps(1);
    history.push('/dashboard');
  }, [history]);

  const sendProduct = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      console.log(product);
    },
    [product]
  );

  return (
    <ProductContext.Provider
      value={{
        product,
        attProduct,
        steps,
        backStep,
        sendProduct,
        backToDashboard,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

function useProduct(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within an ProductProvider');
  }

  return context;
}

export { useProduct, ProductProvider };
