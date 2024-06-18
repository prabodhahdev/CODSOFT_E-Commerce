import React, { useContext } from 'react';
import './CartIems.css';
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalcartAmount,all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems-Format cartitems-format-main">
                <img src={e.image} alt="" className='cartIcon-producticon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartItems-quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img className='cartitems-remove-icon' src={removeIcon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItemsTotal">
            <h1>Cart Total</h1>
            <div>
                <div>
                    <div className="cartItems-totalItems">
                       <p>SubTotal</p>
                       <p>${getTotalcartAmount()}</p> 
                    </div>
                    <hr />
                    <div className="cartItems-totalItems">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-totalItems">
                        <h3>Total</h3>
                        <h3>${getTotalcartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
           
        </div>
        <div className="cartItems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartItems-promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default CartItems;
