import React from 'react'
import styles from './User.module.css'
import { useAuth } from '../../context/DataContext'
import { Button } from '@mui/material'


function User() {

    const auth = useAuth()
    const { displayName } = auth.user
    const { email } = auth.user
    const { photoURL } = auth.user
    const { phoneNumber } = auth.user



    const handlerLogout = () => {
        auth.logout()
    }



    return (
        <div className={styles.contUser}>
            <img className={styles.imgUser} src={photoURL} referrerPolicy='no-referrer' />
            <p className={styles.titleName}>Nombre:</p>
            <p>{displayName}</p>
            <p className={styles.titleEmail}>Email:</p>
            <p>{email}</p>
            <p className={styles.titleTel}>Telefono:</p>
            <p>{phoneNumber}</p>
            <Button sx={{ marginTop: '30px' }} variant="contained" color="error" onClick={handlerLogout}>Cerrar sesion</Button>
        </div>
    )
}

export default User