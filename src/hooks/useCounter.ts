import { useCallback, useEffect, useRef, useState } from 'react';
import {
  InitialValues,
  Product,
  ProductInCart,
} from '../interfaces/interfaces';

interface useCounterArgs {
  product: Product;
  onChange?: (args: ProductInCart) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useCounter = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useCounterArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const setMaxCount = useCallback(
    (newValue: number) => {
      initialValues?.maxCount
        ? setCounter(Math.min(newValue, initialValues?.maxCount))
        : setCounter(newValue);
    },
    [initialValues?.maxCount]
  );

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setMaxCount(newValue);
    onChange && onChange({ ...product, count: newValue });
  };

  const isMaxCountReached = counter === initialValues?.maxCount;

  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setMaxCount(value);
  }, [value, setMaxCount]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { increaseBy, counter, isMaxCountReached, reset };
};
