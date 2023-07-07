import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../../context/DataContext'
import { Link } from "react-router-dom";
import styles from './CartTotal.module.css'
import { Button } from '@mui/material'


function CartTotal() {

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)
    //Sumo los precios de los productos
    const total = cart.reduce((acc, e) => acc + e.price, 0)

    //---------------------------------------------------------------------//
    return (
        <div className={styles.contcTotal}>
            <h3 className={styles.titlecTotal}>Total  a pagar</h3>
            <p className={styles.pricecTotal}>${total}</p>
            <Button variant="contained" sx={{ fontSize: '13px', width: '68%', marginBottom: '20px' }}>PAGAR</Button>
            <Link className={styles.linkSC} to={"/"}><Button variant="outlined" sx={{ fontSize: '13px', width: '99%' }}>SEGUIR COMPRANDO</Button></Link>
            <p className={styles.mPago}>Medios de pago</p>
            <img className={styles.imgWp} src="https://i.ibb.co/GQC5RWC/webpay.png" />
        </div>
    )
}

export default CartTotal