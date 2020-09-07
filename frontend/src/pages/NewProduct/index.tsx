import React, { useCallback, useState, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Colors from '../../design/color';

import product_register_svg from '../../assets/product_register.svg';

import {
  Container,
  Content,
  FormContainer,
  Input,
  Button,
  ButtonContainer,
  TextArea,
} from './styles';

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

  const handleClickButton = useCallback(
    (event: FormEvent, step: number, type: string) => {
      event.preventDefault();

      if (type === 'back') {
        setSteps(step - 1);
      } else {
        setSteps(step + 1);
      }
    },
    []
  );

  const handleNavigateBack = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  const StepActive = useCallback(() => {
    if (steps === 1) {
      return (
        <FormContainer>
          <FiArrowLeft
            size={24}
            color={Colors.primary}
            onClick={handleNavigateBack}
          />
          <h1> Primeiro, informe qual o nome do produto: </h1>
          <Input
            type="text"
            value={product.name || ''}
            onChange={(text) =>
              setProduct({ ...product, name: text.target.value })
            }
          />
          <ButtonContainer>
            <Button tipo="cancell" onClick={handleNavigateBack}>
              Cancelar
            </Button>
            <Button
              tipo="next"
              onClick={(e) => handleClickButton(e, 1, 'next')}
            >
              Próximo passo
            </Button>
          </ButtonContainer>
        </FormContainer>
      );
    }

    if (steps === 2) {
      return (
        <FormContainer>
          <FiArrowLeft
            size={24}
            color={Colors.primary}
            onClick={handleNavigateBack}
          />
          <h1> Agora, informe qual o valor antigo do produto: </h1>
          <Input
            type="text"
            value={product.old_value || ''}
            onChange={(text) =>
              setProduct({ ...product, old_value: Number(text.target.value) })
            }
            placeholder="R$..."
          />
          <ButtonContainer>
            <Button
              tipo="back"
              onClick={(e) => handleClickButton(e, 2, 'back')}
            >
              Voltar
            </Button>
            <Button
              tipo="next"
              onClick={(e) => handleClickButton(e, 2, 'next')}
            >
              Próximo passo
            </Button>
          </ButtonContainer>
        </FormContainer>
      );
    }

    if (steps === 3) {
      return (
        <FormContainer>
          <FiArrowLeft
            size={24}
            color={Colors.primary}
            onClick={handleNavigateBack}
          />
          <h1> Agora, informe qual o novo valor do produto com a promoção: </h1>
          <Input
            type="text"
            value={product.new_value || ''}
            onChange={(text) =>
              setProduct({ ...product, new_value: Number(text.target.value) })
            }
            placeholder="R$..."
          />
          <ButtonContainer>
            <Button
              tipo="back"
              onClick={(e) => handleClickButton(e, 3, 'back')}
            >
              Voltar
            </Button>
            <Button
              tipo="next"
              onClick={(e) => handleClickButton(e, 3, 'next')}
            >
              Próximo passo
            </Button>
          </ButtonContainer>
        </FormContainer>
      );
    }

    if (steps === 4) {
      return (
        <FormContainer>
          <FiArrowLeft
            size={24}
            color={Colors.primary}
            onClick={handleNavigateBack}
          />
          <h1> Informe a descrição do produto (OPCIONAL): </h1>
          <TextArea
            value={product.description || ''}
            onChange={(text) =>
              setProduct({ ...product, description: text.target.value })
            }
            placeholder="Ex: Feminino TAM 36"
          />
          <ButtonContainer>
            <Button
              tipo="back"
              onClick={(e) => handleClickButton(e, 4, 'back')}
            >
              Voltar
            </Button>
            <Button
              tipo="next"
              onClick={(e) => handleClickButton(e, 5, 'next')}
            >
              Próximo passo
            </Button>
          </ButtonContainer>
        </FormContainer>
      );
    }
  }, [handleNavigateBack, steps, handleClickButton, product]);

  return (
    <Container>
      <Header />
      <Content>
        <img src={product_register_svg} alt="SVG Produto" />

        {StepActive()}
      </Content>
      <Footer />
    </Container>
  );
};

export default NewProduct;
