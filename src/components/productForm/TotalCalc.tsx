import React from 'react';
import { IProduct } from '../../types/product.type';

export interface ITotal {
  products: IProduct[];
}

export const Total: React.FC<ITotal> = ({ products }) => {
  return (
    <h3>
      Total:
      {products.reduce(function (sum, i) {
        if (i.count) sum = Math.round((sum + i.count * i.price) * 100) / 100;
        return sum;
      }, 0)}{' '}
      €
    </h3>
  );
};
