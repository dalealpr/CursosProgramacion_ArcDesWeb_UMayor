import React from 'react'
import styles from './Footer.module.css'
// Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import googlePlay from '../../assets/images/footer/img_google_play.png'
import appStore from '../../assets/images/footer/img_app_store.png'


function Footer() {
    return (
        <div className={styles.contFoot}>

            {/* REDES SOCIALES */}
            <div className={styles.contSocial}>
                <a href="#">
                    <InstagramIcon style={{ color: "#cacaca" }}
                        sx={{
                            height: '40px',
                            width: '40px',
                        }}
                    />
                </a>
                <a href="#">
                    <FacebookIcon style={{ color: "#cacaca" }}
                        sx={{
                            height: '40px',
                            width: '40px',
                        }}
                    />
                </a>
                <a href="#">
                    <TwitterIcon style={{ color: "#d9d9d9" }}
                        sx={{
                            height: '40px',
                            width: '40px',
                        }}
                    />
                </a>
            </div>

            {/* FOOTER CONT */}
            <div className={styles.contFootC}>
                <ul className={styles.footUl}>
                    <li><a className={styles.footLink} href="">Politica de privacidad</a></li>
                    <li><a className={styles.footLink} href="">Terminos y servicios</a></li>
                    <li><a className={styles.footLink} href="">Sobre nosotros</a></li>
                </ul>

                <div className={styles.contFootimg}>
                    <img src={googlePlay} />
                    <img src={appStore} />
                </div>

                <p className={styles.footFText}>
                    © 2023, Cursos, Inc.<br /> Cursos de Programaciony es marca comercial
                    registrada de Cursos de programacion, Inc.

                </p>
            </div>


        </div>
    )
}

export default Footer