//Components
import CartPage from './pages/CartPage/CartPage'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import DataProvider from './context/DataContext'
// Pages
import HomePage from './pages/HomePage/HomePage'
import NosotrosPage from './pages/NosotrosPage/NosotrosPage'
import ContactoPage from './pages/contactoPage/ContactoPage'
import LoginPage from './pages/LoginPage/LoginPage'
//Firebase
import { firebaseConfig } from './firebase/firebase.config'
//Route
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Nav />

        {/* Rutas */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
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
