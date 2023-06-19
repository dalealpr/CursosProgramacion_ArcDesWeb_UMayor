import { Container, InputAdornment, TextField } from "@mui/material";
import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import logoSitio from '../../assets/images/logo/logoWeb.png'
import { dataContext } from "../../context/DataContext";
//Iconos
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartCount from "../Cart/CartCount/CartCount";



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

    //Traigo el contenido del carrito
    const { cart } = useContext(dataContext)

    return (
        <nav className={styles.contNav} ref={menuRef}>

            {/* Menu Hamburguesa */}

            {/* si show es true muestra: */}
            {show ? (
                <>
                    <a className={styles.contHambBX} onClick={mostrarNav} >
                        <CloseIcon className={styles.navBurgX} style={{ color: "White" }}
                            sx={{
                                height: '38px',
                                width: '35px',
                                cursor: 'pointer',
                                marginRight: '20px'
                            }} />
                    </a>

                    <ul className={styles.navULHX}>
                        <li className={styles.navLiH}><Link className={styles.aNavH} to={"/"}> CURSOS</Link ></li>
                        <li className={styles.navLiH}><Link className={styles.aNavH} to={"/nosotros"}> NOSOTROS</Link ></li>
                        <li className={styles.navLiH}><Link className={styles.aNavH} to={"/contacto"}> CONTACTO</Link ></li>
                    </ul>
                </>
            )
                :
                // Si show es false muestra:
                (
                    <a className={styles.contHambB} onClick={mostrarNav} >
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
            <Link to={"/"}><img className={styles.logoNav} src={logoSitio} /></Link>

            {/* Titulo Nav */}
            <h2 className={styles.titleNav}>CURSOS DE <br /> PROGRAMACION</h2>

            {/* UL */}
            <ul className={styles.navUL}>
                <li className={styles.navLi}><Link className={styles.aNav} to={"/"}> CURSOS</Link ></li>
                <li className={styles.navLi}><Link className={styles.aNav} to={"/nosotros"}> NOSOTROS</Link ></li>
                <li className={styles.navLi}><Link className={styles.aNav} to={"/contacto"}> CONTACTO</Link ></li>
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

                    <Link className={styles.navCartIC} to={"/cart"}>
                        {/* Si el carrito esta vacio no muestra contador */}
                        {cart.length > 0 ? <CartCount /> : null}

                        <ShoppingCartIcon style={{ color: "white" }}
                            sx={{
                                height: '30px',
                                width: '30px',
                            }} className={styles.navCartI} />
                    </Link>

                    <Link className={styles.navLoginA} to={"/login"}>
                        <AccountCircleIcon style={{ color: "white" }}
                            sx={{
                                height: '28px',
                                width: '28px',
                                marginRight: '10px',
                            }} />LOGIN</Link>

                </div>
            ) : (
                // Si show es true muestra:
                <div className={styles.cont2Nav}>

                    <a className={styles.navSearchIc} onClick={mostrarB} >
                        <SearchIcon style={{ color: "White" }}
                            sx={{
                                height: '31px',
                                width: '31px',
                            }}></SearchIcon>
                    </a>

                    <Link className={styles.navCartIC} to={"/cart"}>
                        {/* Si el carrito esta vacio no muestra contador */}
                        {cart.length > 0 ? <CartCount /> : null}

                        <ShoppingCartIcon style={{ color: "white" }}
                            sx={{
                                height: '30px',
                                width: '30px',
                            }} className={styles.navCartI} />
                    </Link>

                    <Link className={styles.navLoginA} to={"login"}>
                        <AccountCircleIcon style={{ color: "white" }}
                            sx={{
                                height: '28px',
                                width: '28px',
                                marginRight: '10px',
                            }} />LOGIN</Link>

                </div>
            )}

        </nav >
    )
}

export default Nav