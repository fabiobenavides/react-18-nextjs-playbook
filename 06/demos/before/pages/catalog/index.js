import { useState, useEffect } from 'react'

import ProductDetails from '../../components/product-details'
import Cart from '../../components/cart'
import styles from './Catalog.module.scss'

function Catalog() {
  const [cart, setCart] = useState({ products: [] })
  const [products, setProducts] = useState([])

  function fetchProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }

  //second parameter is to executed only 1 time
  useEffect(() => fetchProducts(), [])

  function addToCart(product) {
    const newCart = { _id: cart._id }
    newCart.products = [...cart.products, { ...product }]
    setCart(newCart)
  }

  function removeItemFromCart(product) {
    const newCart = { _id: cart._id }
    newCart.products = cart.products.filter(item => item !== product)
    setCart(newCart)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                <ProductDetails product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div >
        <div className={styles.rightSidebar}>
          <h2>Cart</h2>
          <Cart cartItems={cart.products} removeItemFromCart={removeItemFromCart} />
        </div>
      </div>
    </>
  )
}

export default Catalog