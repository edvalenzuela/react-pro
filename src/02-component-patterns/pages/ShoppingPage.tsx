import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'

import { products } from '../data'

import '../styles/custom-styles.css'

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
        
      <ProductCard 
        key={products[0].id} 
        product={products[0]} 
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 8
        }}
      >
        {
          ({count, maxCount, reset, increaseBy, isMaxCountReached}) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={() => increaseBy(-2)}>-2</button>
              <button onClick={reset}>Reset</button>
              {
                !isMaxCountReached && (<button onClick={() => increaseBy(+2)}>+2</button>)
              }
              <span style={{display: 'flex', justifyContent: 'center'}}>{count} = {maxCount}</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
