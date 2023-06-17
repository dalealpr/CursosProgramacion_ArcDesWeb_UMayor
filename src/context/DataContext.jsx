import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const dataContext = createContext()

const DataProvider = ({ children }) => {

    //HOOKS
    const [data, setData] = useState([])

    useEffect(() => {
        //GET Productos
        axios("productsjson.json").then((res) => setData(res.data))
    }, [])

    //-------------------------------------------------------//
    return <dataContext.Provider value={{ data }}> {children} </dataContext.Provider>
}

export default DataProvider;