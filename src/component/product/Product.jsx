import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../store/cartSlice'
import './product.css'


const Product = () => {
  
   const [filters, setFilter] = useSearchParams()
    const dispatch = useDispatch()

    const [products, setProducts] = React.useState([])
    
    const filterItem = filters.get('category')

    React.useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    const addToCart = product => {
        dispatch(add(product))
    }

    const productFilter = filterItem 
      ? products.filter(product => product.category === filterItem) 
      : products

    const item = productFilter.map(product => {

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
    <div>

      <div className='filter'>

        <ul>
          <button onClick={() => setFilter(`category=men's clothing`)}>Men</button>
          <button onClick={() => setFilter('category=jewelery')}>Jewery</button>
          <button onClick={() => setFilter('category=electronics')}>Electronics</button>
          <button onClick={() => setFilter(`category=women's clothing`)}>Women's clothing</button>
          <Link to='.'>Clear filter</Link>

        </ul>
        
      </div>
      
      <div className="product_con">
        {item}
      </div>
      
    </div>
  )
}

export default Product