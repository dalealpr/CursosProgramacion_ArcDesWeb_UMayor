import { React, useContext, useEffect, useState } from 'react'
import { dataContext } from '../../context/DataContext'
import { Button } from '@mui/material'
import styles from './Login.module.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuth } from '../../context/DataContext'
import User from '../user/User'


function Login() {


    //useState
    const [currentUser, setCurrentUser] = useState(null)

    const auth = useAuth()
    console.log(auth.user)

    const handleGoogle = (e) => {
        e.preventDefault()
        auth.loginWithGoogle()
    }


    return !auth.user ? (
        <div>
            <h3 className={styles.titleLog}>LOGIN</h3>
            <Button variant="contained" onClick={(e) => handleGoogle(e)}><img
                className={styles.imgLog} src="https://i.ibb.co/Kmk1Fz1/googex.png" /> Inicia sesion con Google</Button >
        </div >

    ) : (
        <User />
    )

}

export default Login