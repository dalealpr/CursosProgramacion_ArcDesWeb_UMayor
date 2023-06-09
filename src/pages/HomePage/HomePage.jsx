import React from 'react'
import styles from './HomePage.module.css'
import Carrusel from '../../components/Carrusel/Carrusel'
import Products from '../../components/Products/Products'



function HomePage() {

    return (
        <div className={styles.contHome}>
            <div className={styles.contCarrusel}>
                <Carrusel />
            </div>

            <section className={styles.sectListP}>
                <h3 className={styles.prodTitle}>CURSOS</h3>

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