import { useCounter } from '../hooks/useCounter';
import { createContext, useContext } from 'react';
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  ProductInCart,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import React from 'react';

const ProductContext = createContext({} as ProductContextProps);
export const useProduct = () => useContext(ProductContext);

export interface ProductCardProps {
  product: Product;
  children: (
    args: ProductCardHandlers
  ) => React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: ProductInCart) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, reset, isMaxCountReached } = useCounter({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <ProductContext.Provider
      value={{
        counter,
        increaseBy,
        product,
        isMaxCountReached,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          reset,
          product,
          increaseBy,
        })}
      </div>
    </ProductContext.Provider>
  );
};
