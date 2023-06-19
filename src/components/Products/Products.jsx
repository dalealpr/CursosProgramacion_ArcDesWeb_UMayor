import { useContext } from 'react'
import { dataContext } from '../../context/DataContext'
import styles from './Products.module.css'
import { Button } from '@mui/material'


function Products() {

    const { data, cart, setCart } = useContext(dataContext)

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



    return data.map((product) => {
        return (
            <div className={styles.contProd} key={product.id}>
                <h3 className={styles.prodTitle}>{product.title}</h3>
                <p className={styles.prodId}><b>ID: </b>{product.id}</p>
                <img className={styles.prodImg} src={product.image} />
                <p className={styles.prodPrice}>${product.price} USD</p>
                <p className={styles.medP}>Cualquier medio de pago</p>
                <Button variant="contained" onClick={() => BuyProducts(product)}>Agregar al carrito</Button>
            </div>
        )
    })
}

export default Products