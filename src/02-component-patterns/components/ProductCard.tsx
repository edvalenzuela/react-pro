import { CSSProperties, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);

export interface ProductCardProps{
  children:      (args: ProductCardHandlers) => JSX.Element;
  className?:     string;
  initialValues?: InitialValues;
  onChange?:      (args: onChangeArgs) => void;
  style?:         CSSProperties;
  product:        Product;
  value?:         number;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: ProductCardProps) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <ProductContext.Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          
          reset,
          increaseBy
        })}
      </div>
    </ProductContext.Provider>
  )
}
ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;
