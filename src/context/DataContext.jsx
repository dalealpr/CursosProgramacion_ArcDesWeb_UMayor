import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// Firebase
import { db } from "../firebase/firebase.config";
import { collection, getDocs } from 'firebase/firestore'
//Firebase
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/firebase.config";



export const dataContext = createContext()

export const useAuth = () => {
    const context = useContext(dataContext)
    if (!context) {
        console.log("error creating auth context")
    }
    return context
}

const DataProvider = ({ children }) => {

    //HOOKS
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [user, setUser] = useState(null)
    const [imgUser, setImgUser] = useState(auth.user)

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                console.log("no hay usuario logeado")
                setUser("")
            } else {
                setUser(currentUser)
            }
        })
        return () => suscribed()
    }, [])

    const [state, setCurrentState] = useState(0)

    //----------------------------------------------------------------------//
    //FUNCIONES

    //LOGIN
    //Funcion Login Google
    const loginWithGoogle = async () => {
        //Podria ser try catch
        const resGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, resGoogle)
    }

    //Funcion Logout
    const logout = async () => {
        //Podria ser try catch
        const res = await signOut(auth)
    }



    //-------------------------------------------------------//
    return <dataContext.Provider value={{ data, setData, cart, setCart, logout, loginWithGoogle, setCurrentState, user, imgUser }}> {children} </dataContext.Provider>
}


export default DataProvider;

