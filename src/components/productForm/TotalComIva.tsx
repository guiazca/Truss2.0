import React from 'react';
import { IProduct } from '../../types/product.type';

export interface ITotalComIva {
  products: IProduct[];
}
export const TotalComIva: React.FC<ITotalComIva> = ({ products }) => (
  <h3>
    + Iva:
    {products.reduce(function (sum, i) {
      if (i.count)
        sum = Math.round((sum + i.count * (i.price * 1.23)) * 100) / 100;
      return sum;
    }, 0)}{' '}
    €
  </h3>
);
