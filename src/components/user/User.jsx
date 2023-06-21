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
        auth.setImgUser("")
    }



    return (
        <div>
            <img src={photoURL} referrerPolicy='no-referrer' />
            <p>Nombre: {displayName}</p>
            <p>Email: {email}</p>
            <p>Telefono: {phoneNumber}</p>
            <Button variant="contained" color="error" onClick={handlerLogout}>Cerrar sesion</Button>
        </div>
    )
}

export default User