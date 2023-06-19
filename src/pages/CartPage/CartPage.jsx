import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../context/DataContext'
import { Link } from "react-router-dom";
import styles from './CartPage.module.css'
import CartElements from '../../components/Cart/CartElements/CartElements'
import CartTotal from '../../components/Cart/CartTotal/CartTotal'
import { SubtitlesOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'

function CartPage() {

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)

    //condicion ? '':''
    return cart.length > 0 ? (
        <div className={styles.contCartPage}>
            <h3 className={styles.cartPageTitle}>CARRITO DE COMPRAS</h3>

            <div className={styles.contCartElTot}>
                <div className={styles.contProE}>
                    <CartElements />
                </div>
                <CartTotal />
            </div>


        </div>
    ) : (
        <div className={styles.contCVacio}>
            <p className={styles.volverInP}>No hay productos agregados al carrito de compras</p>
            <Link to={"/"}><Button variant="contained" sx={{ fontSize: '13px', width: '360px' }}>Volver al inicio</Button></Link>
        </div>

    )
}

export default CartPage