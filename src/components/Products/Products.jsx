import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../../context/DataContext'
import styles from './Products.module.css'
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { db } from '../../firebase/firebase.config';
import { getDocs, collection } from "firebase/firestore";


function Products() {
    //useContext
    const { cart, setCart, data, setData } = useContext(dataContext)

    const { detalleId } = useParams()

    //Traer productos de DB Firebase
    useEffect(() => {
        const querydb = db
        const queryCollection = collection(querydb, 'Cursos')
        getDocs(queryCollection)
            //Resultado
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

    }, [])
    //---------------------------------------------------------------------//

    // Funcion comprar producto
    const BuyProducts = (product) => {

        //Buscar productos duplicados
        const productRepeat = cart.find((item) =>
            item.id == product.id
        )
        //Si el producto ya se encuentra en el carrito
        if (productRepeat) {
            setCart([...cart])
            console.log("Error, el producto ya se encuentra en el carrito de compras")
            //Si el producto no se encuentra en el carrito
        } else {
            console.log(product)
            setCart([...cart, product])
        }
    }

    //---------------------------------------------------------------------//
    return data.map((product) => {
        return (
            <div className={styles.contProd} key={product.id}>
                <h3 className={styles.prodTitle}>{product.title}</h3>
                <p className={styles.prodId}><b>ID: </b>{product.id}</p>
                <img className={styles.prodImg} src={product.image} />
                <p className={styles.prodPrice}>${product.price} USD</p>
                <p className={styles.medP}>Cualquier medio de pago</p>
                <Button variant="contained" onClick={() => BuyProducts(product)} sx={{ fontSize: '13px' }}><AddShoppingCartIcon sx={{
                    fontSize: '19px', marginRight: '5px'
                }} />  Agregar al carrito</Button>
            </div>
        )
    })
}

export default Products