import React from "react";
import '../App.css';

// In which order the items get stored in home page is given here
// If Add to Cart is pressed the function addToCart() starts its execution
function Items({ product, addToCart }) {
    return (
        <div className="container-all-items">
            <div className='all-items'>
                {
                    product.map((productItem, productIndex) => {
                        return (
                            <div className="items">
                                <div className='product-item'>
                                    <img src={productItem.url} width={'100%'} />
                                    <p>{productItem.name} | {productItem.category} </p>
                                    <p> {productItem.seller} </p>
                                    <p> Rs. {productItem.price} /-</p>
                                    <button className="btn btn-outline-secondary" type="button" data-bs-toggle="button" onClick={() => addToCart(productItem)}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Items;