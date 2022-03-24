import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemCount from '../itemCount/itemCount'


export default function Card({ data }) {
    const { title, price, tipo, stock, image } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image} />
            
            <div className='container-card-data'>
                <h2>{title}</h2>
                <p>Precio : $ {price}</p>
                <p>Tipo : {tipo}</p>
                <ItemCount stock={stock}/>
                <button>Comprar</button>
            </div>
        </div>
    )
}