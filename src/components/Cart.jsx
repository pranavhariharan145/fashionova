import { useEffect, useState } from 'react';
import '../App.css';
import App from '../App';

// A basic cart design 
function Cart({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <>
            <div className="display-text">Our Products<hr style={{ height: "5px", width: "800px", margin: "auto" }} /></div>
            <div className='cart-container'>
                <div className="cart">
                    <div className='text'>Your Cart</div>
                    {
                        CART?.map((cartItem, cartindex) => {
                            return (
                                // Individual cart items can be accessed
                                <div className='cart-items'>
                                    <div className="cart-image">
                                        <img src={cartItem.url} width={'500px'} />
                                    </div>
                                    <div cart-options>
                                        <div className='cart-text'> {cartItem.name}</div>
                                        
                                        <div className='range'>
                                            <div className='right'>
                                                <div class="select">
                                                    <select id = "select" class="form-select form-select-sm" aria-label="Small select example" background-color='grey'>
                                                        <option selected>Size</option>
                                                        <option value="1">S</option>
                                                        <option value="2">M</option>
                                                        <option value="3">L</option>
                                                        <option value="3">XL</option>
                                                        <option value="3">XXL</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <button className='btn btn-outline-secondary'
                                                        onClick={() => {
                                                            const _CART = CART.map((item, index) => {
                                                                return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                                            })
                                                            setCART(_CART)
                                                        }}
                                                    ><div>-</div></button>
                                                    <span className='counter'> {cartItem.quantity} </span>
                                                    <button className='btn btn-outline-secondary '
                                                        onClick={() => {
                                                            const _CART = CART.map((item, index) => {
                                                                return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                            })
                                                            setCART(_CART)
                                                        }}
                                                    >+</button>
                                                </div>
                                            </div>
                                        </div>
                                        
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
        </>
    )
}

export default Cart;