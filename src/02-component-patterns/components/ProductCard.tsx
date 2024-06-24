import { CSSProperties, ReactNode, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { ProductContextProps, Product, onChangeArgs } from '../interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);

export interface ProductCardProps{
  children?:  ReactNode;
  className?: string;
  onChange?:  (args: onChangeArgs) => void;
  style?:     CSSProperties;
  product:    Product;
  value?:     number;
}

export const ProductCard = ({children, product, className, style, onChange, value}: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <ProductContext.Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  )
}
ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;
