import React from 'react';
import ItemCount from '../itemCount/itemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} tabla/s`);
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.image} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>Size:</li>
          <li>{item.title}</li>
          <li>Type:</li>
          <li>{item.tipo}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;
