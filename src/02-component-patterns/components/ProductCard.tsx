import { CSSProperties, ReactNode, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

import { ProductContextProps, Product } from '../interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);

export interface ProductCardProps{
  children?:  ReactNode
  className?: string
  style?:     CSSProperties
  product:    Product
}

export const ProductCard = ({children, product, className, style}: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

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
