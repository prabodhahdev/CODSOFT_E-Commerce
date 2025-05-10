import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;  // Use product IDs as keys
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const[all_product,setAll_Product]=useState([]);
    const [cartItem, setCartItem] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://codsoft-e-commerce.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://codsoft-e-commerce.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
    
                },
                body:"",
            }).then((response)=>response.json())
                .then((data)=>setCartItem(data));
        
        }
    },[])

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if(localStorage.getItem('auth-token')){
            fetch('https://codsoft-e-commerce.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',

                },
                body:JSON.stringify({"itemId":itemId}),

            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
        
    }
//remove from cart
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem('auth-token')){
        fetch('https://codsoft-e-commerce.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',

                },
                body:JSON.stringify({"itemId":itemId}),

            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
    }
    
    
    }

    const getTotalcartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {  // Corrected condition
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalcartAmount, all_product, cartItem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
