import { useContext } from 'react'
import { dataContext } from '../../context/DataContext'
import styles from './Products.module.css'
import { Button } from '@mui/material'


function Products() {

    const { data } = useContext(dataContext)

    return data.map((product) => {
        return (
            <div className={styles.contProd}>
                <h3 className={styles.prodTitle}>{product.title}</h3>
                <p className={styles.prodId}><b>ID: </b>{product.id}</p>
                <img className={styles.prodImg} src={product.image} />
                <p className={styles.prodPrice}>${product.price} USD</p>
                <p className={styles.medP}>Cualquier medio de pago</p>
                <Button variant="contained">Agregar al carrito</Button>
            </div>
        )
    })
}

export default Products