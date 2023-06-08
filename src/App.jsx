import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
