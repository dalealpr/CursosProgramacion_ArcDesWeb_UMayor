import { React, useContext } from 'react'
import { dataContext } from '../../../context/DataContext'
import styles from './CartCount.module.css'


function CartCount() {

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)

    const itemQuanty = cart.reduce((acc, e) => acc + e.quantity, 0)
    console.log(itemQuanty)
    return (
        <span className={styles.quantyC}>{itemQuanty}</span>
    )
}

export default CartCount