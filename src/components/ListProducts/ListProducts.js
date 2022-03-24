import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const mockProductos = [{
        title : 'shortboard 6´4" x 19" x 2 1/4"',
        id: 1,
        tipo: 'Short',
        price: 90500,
        image: 'tabla1.jpg',
        stock: 3
    },
    {
        title : 'sup 7´4" x 27´x 3 1/2 "',
        id: 2,
        tipo: 'Sup',
        price: 103500,
        image: 'tabla2.jpg',
        stock: 2  
    },
    {
        title : 'longboard retro 9´3" x 22" x 3"',
        id: 3,
        tipo: 'Longboard',
        price: 120000,
        image: 'tabla3.jpeg',
        stock: 1  
    }
]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])


    return(
        <div className="container-cards">
            <h2> Productos en Oferta</h2>
            {products.map( ( product ) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
        </div>
    ) 
}

export default ListProducts;