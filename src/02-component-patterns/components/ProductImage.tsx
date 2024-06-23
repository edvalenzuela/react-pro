import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface ProductImageProps {
  className?:   string
  img?:         string
  isBackground?: boolean
  style?:       CSSProperties
}

export const ProductImage = ({img, className, isBackground, style }: ProductImageProps) => {

  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if(img){
    imgToShow = img;
  }else if(product.img){
    imgToShow = product.img
  }else{
    imgToShow = noImage;
  }

  if (isBackground) {
    return (
      <div 
        className={`${styles.productImg} ${className}`} 
        style={style}
      />
    );
  }

  return (
    <img 
      className={`${styles.productImg} ${className}`} 
      style={style}
      src={imgToShow} 
      alt="Product Img" 
    />
  )
}
