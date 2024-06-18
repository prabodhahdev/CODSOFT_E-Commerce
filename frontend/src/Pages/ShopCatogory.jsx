import React, { useContext } from 'react'
import './CSS/ShopCatogory.css'
import all_product from '../Components/Assets/all_product'
import { ShopContext } from '../Context/ShopContext/ShopContext'
import drop_down from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCatogory = (props) => {
  const{all_product}=useContext(ShopContext);
  return (
    <div className='shop-catogory'>
      <img src={props.banner} alt="" />
      <div className="shopcatogory-indexSort">
        <p>
          <span>
            Showing 1-12
          </span>
          out of 36 products
        </p>
        <div className="shopcatogory-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopcatogory-products">
        {
        all_product.map((item,i)=>{
          if(props.category===item.category){
            return (
              <Item key={i} 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price}
                  old_price={item.old_price}/>
          );
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCatogory
