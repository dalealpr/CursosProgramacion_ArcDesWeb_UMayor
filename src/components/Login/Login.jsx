import { React, useContext, useEffect, useState } from 'react'
import { dataContext } from '../../context/DataContext'
import { Button } from '@mui/material'
import styles from './Login.module.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuth } from '../../context/DataContext'
import User from '../user/User'
import { Link } from "react-router-dom";


function Login() {

    const auth = useAuth()

    //Funcion login Google
    const handleGoogle = (e) => {
        e.preventDefault()
        auth.loginWithGoogle()
    }

    //Si el usuario no existe
    return (
        <div className={styles.contLogin}>
            <h3 className={styles.titleLog}>LOGIN</h3>
            <Button variant="contained" onClick={(e) => handleGoogle(e)}><img
                className={styles.imgLog} src="https://i.ibb.co/Kmk1Fz1/googex.png" /> Inicia sesion con Google</Button >
            <Link className={styles.probIC}>¿Problemas para iniciar sesion?<br></br> Click aqui</Link>
        </div >
    )
}

export default Login