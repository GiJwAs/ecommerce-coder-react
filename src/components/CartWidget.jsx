import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={ faUmbrellaBeach } size="2x" color="black" />
      <div className="qty-display">{cart.length}</div>
    </div>
  );
};

export default CartWidget;
