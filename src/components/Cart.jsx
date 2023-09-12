import { useEffect, useState } from 'react';
import '../App.css';
import App from '../App';

function Cart({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart-container'>
            <div className="cart">
                <div className='text'>Your Cart</div>

                {
                    CART?.map((cartItem, cartindex) => {
                        return (
                            <div className='cart-items'>
                                <img src={cartItem.url} width={'10%'} />
                                <div cart-options>
                                <div className='cart-text'> {cartItem.name} 
                                
                                <div className='button-size'>
                                    <button className='size'>M</button>
                                    <button className='size'>L</button>
                                    <button className='size'>X</button>
                                    <button className='size'>XXL</button>
                                </div>
                                </div>
                                    <button className='btn btn-outline-secondary'
                                        onClick={() => {
                                            const _CART = CART.map((item, index) => {
                                                return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                            })
                                            setCART(_CART)
                                        }}
                                    ><div>-</div></button>
                                    <span className='counter'> {cartItem.quantity} </span>
                                    <button className='btn btn-outline-secondary'
                                        onClick={() => {
                                            const _CART = CART.map((item, index) => {
                                                return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                            })
                                            setCART(_CART)
                                        }}
                                    >+</button>
                                    <div className='cart-amount'>₹{cartItem.price * cartItem.quantity} </div>
                                </div>
                            </div>


                        )
                    })
                }

                <p className='total-amt'> Total: ₹
                    {
                        CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                    }
                </p>
            </div >
        </div>
    )
}

export default Cart;