import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces";

interface ProductInCart extends Product{
  count: number;
}

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}:onChangeArgs) => {
    setShoppingCart(old => {

      if(count === 0){
        const { [product.id]:toDelete, ...rest } = old;
        return rest
      }

      return {
        ...old,
        [product.id] : { ...product, count }
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}