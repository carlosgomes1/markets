import React, { useCallback, ChangeEvent } from 'react';

import { FormContainer, UploadContainer } from '../styles';

const UploadImage: React.FC = () => {
  const handleFileProduct = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files);
    }
  }, []);

  return (
    <FormContainer>
      <h1> Agora, adicione uma foto ao produto: </h1>
      <UploadContainer>
        <label htmlFor="upload">
          <div>
            <h1> Clique para escolher a foto </h1>
          </div>
          <input id="upload" type="file" onChange={handleFileProduct} />
        </label>
      </UploadContainer>
    </FormContainer>
  );
};

export default UploadImage;
