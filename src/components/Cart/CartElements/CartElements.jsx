import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../../context/DataContext'
import styles from './CartElements.module.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


function CartElements() {

    //Traigo el contenido del carrito
    const { cart, setCart } = useContext(dataContext)

    //---------------------------------------------------------------------//

    //Funcion Eliminar producto 
    const DeleteProduct = (id) => {
        //Busca el producto por el id
        const findId = cart.find((item) => item.id === id)
        //filtra el carrito con todos los productos menos el eliminado
        const newCart = cart.filter((item) => {
            return item !== findId
        })
        //Cambia el estado del carrito eliminando el producto
        setCart(newCart)
    }

    //---------------------------------------------------------------------//
    //mapeo los productos
    return cart.map((product) => {
        return (
            <div className={styles.contCartEl} key={product.id}>
                <div className={styles.contTiImg}>
                    <h3 className={styles.cartETitle}>{product.title}</h3>
                    <img className={styles.cartEImg} src={product.image} />
                </div>

                <p className={styles.cartEId}><b>ID: </b>{product.id}</p>
                <p className={styles.cartEPrice}>${product.price} USD</p>
                <Button onClick={() => DeleteProduct(product.id)} variant="contained" color="error" sx={{ fontSize: '11px' }}><DeleteIcon />Eliminar</Button>
            </div>
        )
    })
}

export default CartElements