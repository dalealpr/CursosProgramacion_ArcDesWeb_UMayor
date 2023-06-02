import React from 'react'
import styles from './HomePage.module.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/Cart/Cart'


function HomePage() {
    return (
        <div className=''>
            <Nav />

            <Cart />

            <Footer />

        </div>
    )
}

export default HomePage