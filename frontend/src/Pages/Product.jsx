import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} =useParams();
  const product=all_product.find((e)=>e.id=== Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
