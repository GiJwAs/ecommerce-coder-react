import React, { useEffect, useState } from 'react';
import { getProductById } from '../getData/getData'
import ItemDetail from '../ItemDetail/ItemDetail'
import './itemDetailContainer.css';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
   

  getProductById(Number(id), setProduct);
    console.log(product);
    }, [id]);

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;