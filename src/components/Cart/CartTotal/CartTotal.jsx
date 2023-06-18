import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../../context/DataContext'
import styles from './CartTotal.module.css'


function CartTotal() {

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)

    const total = cart.reduce((acc, e) => acc + e.price, 0)

    return (
        <div className={styles.contcTotal}>
            <h3>Total  a pagar</h3>
            <p>${total}</p>
        </div>
    )
}

export default CartTotal