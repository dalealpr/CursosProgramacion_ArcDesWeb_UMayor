import React from 'react'
import CarruselItem from './CarruselItem/CarruselItem'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import carouseljson from '../../helper/carouseljson.json'


function Carrusel() {

    return (
        <Carousel>
            {
                carouseljson.map(item => <CarruselItem key={item.id} item={item} />)
            }
        </Carousel>
    )
}

export default Carrusel