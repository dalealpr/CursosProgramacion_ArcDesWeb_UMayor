import React from 'react'
import styles from './Cart.module.css'
import CardProductCart from './CardProductCart/CardProductCart'
import imgMediosPago from '../../assets/images/webpay.png'
import pythonImg from '../../assets/images/cursos/cursoPython.jpg'

const cursos = [
    { id: 1, title: 'Curso Python', content: 'Curso basico programacion en Python', img: 'https://i.ibb.co/pQWN3Cb/cursoC.jpg', price: '$10.000' },
    { id: 2, title: 'Curso C#', content: 'Curso basico programacion en C#', img: 'https://i.ibb.co/ph5kpj3/curso-Java.jpg', price: '$10.000' },
    { id: 3, title: 'Curso Java', content: 'Curso basico programacion en Java', img: 'https://i.ibb.co/L8TzNyd/curso-Python.jpg', price: '$10.000' },
]


function Cart() {
    return (
        <>
            <h2 className={styles.cartTitle}>CARRITO DE COMPRAS</h2>

            <div className={styles.contCart}>

                <div className={styles.contCardCart}>
                    {cursos.map((curso) => {
                        return <CardProductCart title={curso.title} content={curso.content} img={curso.img} price={curso.price} />
                    })}
                </div>

                <div className={styles.contCartTotal}>
                    <h3 className={styles.totalTitle}>Total Carrito:</h3>
                    <p className={styles.totalPrice}>CLP $30.000</p>

                    <button className={styles.totalBtn}>Pagar</button>
                    <button className={styles.totalBtn}>Seguir comprando</button>

                    <img className={styles.totalImgMP} src={imgMediosPago} />

                </div>

            </div>
        </>
    )
}

export default Cart