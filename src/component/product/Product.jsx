import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/cartSlice'
import './product.css'


const Product = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    const addToCart = product => {
        dispatch(add(product))
    }

    const item = products.map(product => {

      const firstLetter = product.category.charAt(0).toUpperCase()
      const remainingLetter = firstLetter + product.category.slice(1)

        return <div className='product_container'>
          <div className='product'>
           <section>
            <img src={product.image} alt='pro' />
              <div>
                  <p className='catergory'>{remainingLetter}</p>
                  <p className='description'>{product.description}</p>
                  <p className='amount'>${product.price}</p>
              </div>

              <footer className='product_footer'>
                <button onClick={() => addToCart(product)}>Add to card</button>
            </footer>
           </section>

            

        </div>
            
            
        </div>
    })

  return (
    <div className="product_con">
      
        {item}
      
    </div>
  )
}

export default Product