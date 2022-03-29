import React from 'react'
import ItemCount from '../itemCount/itemCount'
import './item.css';

const Item = ({ title, image, price, id, stock }) => {
    const onAdd = (qty) => {
      alert(`Has agregado ${qty} cervezas 🍺`);
    };
  
    return (
      <article className="product-card">
        <img className="product-card__image" src={image} alt="" />
  
        <h3 className="product-card__name">{title}</h3>
        <span className="product-card__name">${price}</span>
  
        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
      </article>
    );
  };
  
  export default Item;
  
//export default function Item({ data }) {
 //   const { title, price, tipo, stock, image } = data
 //   const [ count, setCount ] = useState(1)
 //   const [ countTest, setCountTest ] = useState(1)
    

  //  const addStock = () => {
 //       setCount(count + 1)
   // }
//    const removeStock = () => {
   //     setCountTest(countTest - 1)
 //   }
//    return(
//        <div className="card-item">
//            <img src={`./${image}`} alt={image} />
            
 //           <div className='container-card-data'>
   //             <h2>{title}</h2>
     //           <p>Precio : $ {price}</p>
       //         <p>Tipo : {tipo}</p>
         //       <ItemCount stock={stock}/>
           //     <button>Comprar</button>
         //   </div>
      //  </div>
  //  )
//}