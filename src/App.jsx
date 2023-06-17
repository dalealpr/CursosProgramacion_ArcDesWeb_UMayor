import { useState } from 'react'
//Components
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import DataProvider from './context/DataContext'
// Pages
import HomePage from './pages/HomePage/HomePage'
import NosotrosPage from './pages/NosotrosPage/NosotrosPage'
import ContactoPage from './pages/contactoPage/ContactoPage'
import LoginPage from './pages/LoginPage/LoginPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DataProvider>
      <BrowserRouter>
        <Nav />

        {/* Rutas */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
