import { useProduct } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const {
    product: { img: productImage },
  } = useProduct();

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={img || productImage || noImage}
      alt="Product Img"
    />
  );
};
