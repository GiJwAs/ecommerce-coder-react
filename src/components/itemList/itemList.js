import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getAllProductsFromDB } from '../getData/getData';
import './itemList.css';

const ItemList = () => {
 
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, []);


  return (
    <div className="product-list-container">
      {
       
        products.length ? ( 
          <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
       
      }
    </div>
  );
};

export default ItemList;