import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../context/DataContext'
import styles from './CartPage.module.css'
import CartElements from '../../components/Cart/CartElements/CartElements'
import CartTotal from '../../components/Cart/CartTotal/CartTotal'
import { SubtitlesOutlined } from '@mui/icons-material'

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
        <>
            <p>El carrito de compras esta vacio</p>
        </>

    )
}

export default CartPage