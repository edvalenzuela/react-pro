import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces";

interface ProductInCart extends Product{
  count: number;
}

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}:onChangeArgs) => {
    setShoppingCart(old => {

      const productInCart: ProductInCart = old[product.id] || {...product, count: 0}
      
      if(Math.max(productInCart.count + count, 0) > 0 ){
        productInCart.count += count;
        return{
          ...old,
          [product.id]: productInCart
        }
      }

      // Borrar el producto

      const { [product.id]:toDelete, ...rest } = old;
      return rest

      // if(count === 0){
      //   const { [product.id]:toDelete, ...rest } = old;
      //   return rest
      // }

      // return {
      //   ...old,
      //   [product.id] : { ...product, count }
      // }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}