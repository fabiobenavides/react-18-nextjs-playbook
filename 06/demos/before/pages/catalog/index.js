import { useState, useEffect } from 'react'
import ProductDetails from '../../components/product-details'
import Cart from '../../components/cart'
import styles from './Catalog.module.scss'
import { MongoClient } from 'mongodb'

//This run in the server
//To access things like querystring  or route parameters use the context parameter
export async function getServerSideProps(context) {

  /*
  context.req
  context.res
  context.query //querystring
  context.params //route parameters
  */

  async function getProducts() {

    const uri = 'mongodb+srv://gecko:alert-radius-LEFTY1@cluster0.m6rbt.mongodb.net/?retryWrites=true&w=majority'
    const dbName = 'album-shop-dev'
    const client = await MongoClient.connect(uri)
    const collection = client.db(dbName).collection("albums")
  
    const albums = await collection.find({}).toArray()
  
    client.close()
  
    return albums
  }

  const productsFromDb = await getProducts();

  return { props: {products: productsFromDb}}
}

function Catalog({products}) {
  const [cart, setCart] = useState({ products: [] })
 
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