import { Dispatch, SetStateAction } from 'react';
import { IProduct } from '../../types/product.type';
import { styled } from 'styled-components';

export interface IProductsForm {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const ProductForm: React.FC<IProductsForm> = ({
  products,
  setProducts,
}) => {
  const handleProductChange = (index: number, value: number) => {
    const updatedProducts = [...products]; // Cria uma cópia do array de produtos
    updatedProducts[index].count = value; // Atualiza o valor do count para o produto específico

    setProducts(updatedProducts); // Atualiza o estado com o novo array de produtos
  };

  return (
    <div>
      {products.map((product, i) => (
        <>
          {product.subLinha ? <h3>{product.subLinha}</h3> : ''}
          <div key={i} className="Produto">
            <SyledInput
              style={{ width: 35, height: 14 }}
              className="inputQTD"
              type="number"
              pattern="\d*"
              value={product.count}
              min="0"
              onChange={(evt) =>
                handleProductChange(i, parseInt(evt.target.value) || 0)
              }
            />
            <text>{product.nome}</text>
          </div>
        </>
      ))}
    </div>
  );
};

const SyledInput = styled.input`
  margin-right: 5px;
  margin-bottom: 5px;
  width: 100px;
`;
