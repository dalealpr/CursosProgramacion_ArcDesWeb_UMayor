import React from 'react'
import styles from './LoginPage.module.css'
import Login from '../../components/Login/Login'


function LoginPage() {
    return (
        <div className={styles.contLogin}>
            <Login />
        </div>
    )
}

export default LoginPage