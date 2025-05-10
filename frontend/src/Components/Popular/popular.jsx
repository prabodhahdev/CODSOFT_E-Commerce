import React, { useEffect, useState } from 'react';
import './popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch('https://codsoft-e-commerce.onrender.com/popularinwomen')
      .then((response) => response.json())  // Correctly parse the JSON
      .then((data) => setPopularProduct(data))
      .catch((error) => console.error('Error fetching popular products:', error));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {Array.isArray(popularProduct) ? popularProduct.map((item, i) => (
          <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
        )) : <p>No popular products available.</p>}
      </div>
    </div>
  );
};

export default Popular;
