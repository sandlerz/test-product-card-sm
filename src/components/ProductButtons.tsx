import React from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from './ProductCard';
export interface ProductButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { increaseBy, counter, isMaxCountReached } = useProduct();

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={`${isMaxCountReached && styles.disabled} ${
          styles.buttonAdd
        }`}
      >
        +
      </button>
    </div>
  );
};
