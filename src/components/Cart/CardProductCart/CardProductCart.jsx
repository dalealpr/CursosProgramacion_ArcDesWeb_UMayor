import React from 'react'
import styles from './CardProductCart.module.css'

function CardProductCart(props) {
    return (
        <div className={styles.contCardPCart}>
            <div>
                <h3>{props.title}</h3>
                <img className={styles.imgCPC} src={props.img} />
            </div>

            <p className={styles.contetCPC}>{props.content}</p>
            <p className={styles.priceCPC}>{props.price}</p>

            <button className={styles.btnCPC}>Eliminar</button>

        </ div>
    )
}

export default CardProductCart