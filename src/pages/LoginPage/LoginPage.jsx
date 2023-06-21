import React from 'react'
import styles from './LoginPage.module.css'
import { Button } from '@mui/material'
// Componentes
import Login from '../../components/Login/Login'
import User from '../../components/user/User'
//Funciones
import { useAuth } from '../../context/DataContext'


function LoginPage() {

    const auth = useAuth()

    //Si el usuario no existe
    return (
        <div className={styles.contLogin}>
            {!auth.user ? (
                <Login />
            ) : (
                <div className={styles.contUser}>
                    <User />
                </div>
            )}

        </div>
    )
}

export default LoginPage