import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image img='./logo512.png' className="custom-image" />
          <ProductCard.Title title='Hola mundo' className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor: '#70d1f8'}} >
          <ProductImage 
            isBackground 
            style={{ 
              border: '5px solid green', 
              boxSizing: 'border-box', 
              backgroundColor: '#222222',
              backgroundRepeat:'no-repeat', 
              backgroundImage: 'url("./favicon.ico")', 
              backgroundPosition: 'center',
              width: '100%', height: '250px' 
            }} 
          />          
          <ProductTitle style={{backgroundColor: 'yellow'}}/>
          <ProductButtons style={{backgroundColor: 'red'}}/>
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  )
}
