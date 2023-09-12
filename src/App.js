
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import Items from './components/Items'
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [product, setProduct] = useState([
    {
      url: '/assets/model1.jpg',
      name: 'Printed Slim Fit Hoodie',
      category: 'Slim Fit',
      seller: 'MVMT Threads',
      price: 300,
    },
    {
      url: '/assets/model2.jpg',
      name: 'Colourblock Crew-Neck Sweatshirt',
      category: 'Sweatshirts',
      seller: 'RED TAPE Cottons Ltd Mumbai',
      price: 700
    },
    {
      url: '/assets/model3.jpg',
      name: 'Brand Printed Hoodie with Kangaroo Pocket',
      category: 'Hoodie',
      seller: 'GAP ORIGINALS',
      price: 2500
    },
  ])


const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Nav count={cart.length}
        handleShow={handleShow} ></Nav>
        <Home/>
      {
        showCart ?
          <Cart cart={cart} ></Cart> :
          <Items product={product} addToCart={addToCart} ></Items>
      }


    </div>
  );
}

export default App;