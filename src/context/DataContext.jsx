import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const dataContext = createContext()

const DataProvider = ({ children }) => {

    //HOOKS
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        //GET Productos
        axios("productsjson.json").then((res) => setData(res.data))
    }, [])

    //-------------------------------------------------------//
    return <dataContext.Provider value={{ data, cart, setCart }}> {children} </dataContext.Provider>
}

export default DataProvider;