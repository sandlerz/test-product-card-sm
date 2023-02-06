import React from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from './ProductCard';

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleProps) => {
  const {
    product: { title: productTitle },
  } = useProduct();
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title || productTitle}
    </span>
  );
};
