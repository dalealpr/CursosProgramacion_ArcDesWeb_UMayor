import { React, useContext } from 'react'
import { dataContext } from '../../../context/DataContext'
import styles from './CartCount.module.css'


function CartCount() {

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)
    //Sumo las cantidades de los productos
    const itemQuanty = cart.reduce((acc, e) => acc + e.quanty, 0)

    //---------------------------------------------------------------//
    return (
        <span className={styles.quantyC}>{itemQuanty}</span>
    )
}

export default CartCount