import { Container, InputAdornment, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import styles from './Nav.module.css'
//Iconos
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Nav() {



    return (
        <div className={styles.contNav}>
            {/* Logo */}
            <a className={styles.navTitle} href="#">CURSOS DE PROGRAMACIÓN</a>

            <input className={styles.navSearch} type="text" placeholder="Buscar" />
            <SearchIcon style={{ color: "black" }}
                sx={{
                    height: '25px',
                    width: '25px',
                    position: 'absolute',
                    right: '63.2%',
                }}
            />

            <div>
                <a href="#">
                    <ShoppingCartIcon style={{ color: "white" }}
                        sx={{
                            height: '35px',
                            width: '35px'
                        }}
                    />
                </a>

                <a href="">
                    <AccountCircleIcon style={{ color: "white" }}
                        sx={{
                            height: '35px',
                            width: '35px',
                            marginLeft: '30px'
                        }}
                    />
                </a>

            </div>

        </div>
    )
}

export default Nav