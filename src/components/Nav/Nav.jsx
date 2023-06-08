import { Container, InputAdornment, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import styles from './Nav.module.css'
import logoSitio from '../../assets/images/logo/logoWeb.png'
//Iconos
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function Nav() {

    //HOOKS
    const [show, setShow] = useState(false);
    const [showB, setShowB] = useState(true);
    const menuRef = useRef()

    useEffect(() => {

        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setShow(false)
            } else {

            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    const mostrarB = () => {
        setShowB(!showB)
    }

    const mostrarNav = () => {
        setShow(!show)
    }

    return (
        <nav className={styles.contNav} ref={menuRef}>

            {/* Menu Hamburguesa */}

            {/* si show es true muestra: */}
            {show ? (
                <>
                    <a className={styles.contHambBX} onClick={mostrarNav} href="#">
                        <CloseIcon className={styles.navBurgX} style={{ color: "White" }}
                            sx={{
                                height: '38px',
                                width: '35px',
                                cursor: 'pointer',
                                marginRight: '20px'
                            }} />
                    </a>

                    <ul className={styles.navULHX}>
                        <li className={styles.navLiH}><a className={styles.aNavH} href="#"> CURSOS</a></li>
                        <li className={styles.navLiH}><a className={styles.aNavH} href="#"> NOSOTROS</a></li>
                        <li className={styles.navLiH}><a className={styles.aNavH} href="#"> CONTACTO</a></li>
                    </ul>
                </>
            )
                :
                // Si show es false muestra:
                (
                    <a className={styles.contHambB} onClick={mostrarNav} href="#">
                        <MenuIcon className={styles.navBurg} style={{ color: "White" }}
                            sx={{
                                height: '38px',
                                width: '35px',
                                cursor: 'pointer',
                                marginRight: '20px'
                            }} />
                    </a>
                )}

            {/* ----------------------------------------------------------------------------------------------- */}

            {/* Logo */}
            <a href="#"><img className={styles.logoNav} src={logoSitio} /></a>

            {/* Titulo Nav */}
            <h2 className={styles.titleNav}>CURSOS DE <br /> PROGRAMACION</h2>

            {/* UL */}
            <ul className={styles.navUL}>
                <li className={styles.navLi}><a className={styles.aNav} href="#"> CURSOS</a></li>
                <li className={styles.navLi}><a className={styles.aNav} href="#"> NOSOTROS</a></li>
                <li className={styles.navLi}><a className={styles.aNav} href="#"> CONTACTO</a></li>
            </ul>

            {/* ----------------------------------------------------------------------------------------------- */}

            {/* BotonBuscador */}
            {!showB ? (
                // Si show es false muestra:
                <div className={styles.cont2Nav}>

                    <input className={styles.navSearch} type="text" placeholder="Buscar..." />

                    <a className={styles.navSearchIc} onClick={mostrarB} href="#">
                        <CloseIcon style={{ color: "White" }}
                            sx={{
                                height: '31px',
                                width: '31px',
                            }}></CloseIcon>
                    </a>

                    <a className={styles.navCartIC} href="#">
                        <ShoppingCartIcon style={{ color: "white" }}
                            sx={{
                                height: '30px',
                                width: '30px',
                            }} className={styles.navCartI} />
                    </a>

                    <a className={styles.navLoginA} href="#">
                        <AccountCircleIcon style={{ color: "white" }}
                            sx={{
                                height: '28px',
                                width: '28px',
                                marginRight: '10px',
                            }} />LOGIN</a>

                </div>
            ) : (
                // Si show es true muestra:
                <div className={styles.cont2Nav}>

                    <a className={styles.navSearchIc} onClick={mostrarB} href="#">
                        <SearchIcon style={{ color: "White" }}
                            sx={{
                                height: '31px',
                                width: '31px',
                            }}></SearchIcon>
                    </a>

                    <a className={styles.navCartIC} href="#">
                        <ShoppingCartIcon style={{ color: "white" }}
                            sx={{
                                height: '30px',
                                width: '30px',
                            }} className={styles.navCartI} />
                    </a>

                    <a className={styles.navLoginA} href="#">
                        <AccountCircleIcon style={{ color: "white" }}
                            sx={{
                                height: '28px',
                                width: '28px',
                                marginRight: '10px',
                            }} />LOGIN</a>

                </div>
            )}

        </nav >
    )
}

export default Nav