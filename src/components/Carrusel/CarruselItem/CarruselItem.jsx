import React from 'react'
import { Paper, Button } from '@mui/material'
import { Height } from '@mui/icons-material'
import styles from "./CarruselItem.module.css"

function CarruselItem({ item }) {
    return (
        <div className={styles.contCarrus}>
            <Paper sx={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '550px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <h2 className={styles.CTitle}>{item.title}</h2>

            </Paper></div>

    )
}

export default CarruselItem