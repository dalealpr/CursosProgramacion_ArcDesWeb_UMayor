import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../../context/DataContext'
import styles from './CartElements.module.css'


function CartElements() {

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)


    return cart.map((product) => {
        return (
            <div className={styles.contCartEl} key={product.id}>
                <div className={styles.contTiImg}>
                    <h3 className={styles.cartETitle}>{product.title}</h3>
                    <img className={styles.cartEImg} src={product.image} />
                </div>

                <p className={styles.cartEId}><b>ID: </b>{product.id}</p>
                <p className={styles.cartEPrice}>${product.price} USD</p>
            </div>
        )
    })
}

export default CartElements