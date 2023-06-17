import React from 'react'
import styles from './HomePage.module.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/Cart/Cart'
import Carrusel from '../../components/Carrusel/Carrusel'
import { Paper, Button } from '@mui/material'
import Products from '../../components/Products/Products'



function HomePage() {
    return (
        <div className={styles.contHome}>
            <Carrusel />

            <section className={styles.sectListP}>
                <h3 className={styles.prodTitle}>Productos</h3>

                <div className={styles.contProdC}>
                    <div className={styles.contProdC2}>
                        <Products />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HomePage